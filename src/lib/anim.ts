import type React from 'react';

export const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/** 0..1 progress of [from, to] at frame f (clamped). */
export const seg = (f: number, from: number, to: number) =>
  to === from ? (f >= to ? 1 : 0) : clamp((f - from) / (to - from));

export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
export const easeIn = (t: number) => t * t * t;
export const easeInOut = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
export const easeOutBack = (t: number, s = 1.7) =>
  1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2);
export const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

/** Deterministic pseudo random 0..1 from an integer seed. */
export const rnd = (seed: number) => {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

/** Signed deterministic jitter in [-amp, amp]. */
export const jitter = (seed: number, amp = 1) => (rnd(seed) - 0.5) * 2 * amp;

/**
 * Stop-motion quantisation: holds a value on a 12 per second grid.
 * The reference is a physical paper set shot frame by frame, so small
 * elements hold and then jump rather than glide.
 */
export const stop12 = (f: number, rate = 12) => Math.floor((f / 30) * rate) * (30 / rate);

export type CamKey = {f: number; x?: number; y?: number; s?: number; r?: number};
export type Cam = {x: number; y: number; s: number; r: number};

/** Piecewise eased camera move. */
export const cameraAt = (frame: number, keys: CamKey[]): Cam => {
  const ks = keys.map((k) => ({x: 0, y: 0, s: 1, r: 0, ...k}));
  if (frame <= ks[0].f) return ks[0];
  for (let i = 0; i < ks.length - 1; i++) {
    const a = ks[i];
    const b = ks[i + 1];
    if (frame <= b.f) {
      const t = easeInOut(seg(frame, a.f, b.f));
      return {
        x: lerp(a.x, b.x, t),
        y: lerp(a.y, b.y, t),
        s: lerp(a.s, b.s, t),
        r: lerp(a.r, b.r, t),
      };
    }
  }
  return ks[ks.length - 1];
};

export const camStyle = (c: Cam): React.CSSProperties => ({
  transform: `translate3d(${c.x}px, ${c.y}px, 0) scale(${c.s}) rotate(${c.r}deg)`,
});

/** Pop-in helper: returns 0..1 with a small overshoot. */
export const pop = (f: number, from: number, dur = 14) => {
  const t = seg(f, from, from + dur);
  return t <= 0 ? 0 : easeOutBack(t, 1.5);
};

export const fadeWindow = (f: number, inAt: number, dur = 8) => easeOut(seg(f, inAt, inAt + dur));

/** Soft paper corner wobble, helps the cut-outs feel physical. */
export const wobble = (f: number, seed: number, amp = 0.5) =>
  Math.sin(f / 17 + seed) * amp + jitter(stop12(f), amp * 0.6);
