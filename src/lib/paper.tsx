import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {C} from './theme';
import {rnd} from './anim';

/** Film-grain / paper-fibre overlay applied on top of everything. */
export const Grain: React.FC<{opacity?: number; id?: string}> = ({
  opacity = 0.09,
  id = 'g',
}) => (
  <AbsoluteFill style={{pointerEvents: 'none', mixBlendMode: 'overlay', opacity}}>
    <svg width="100%" height="100%">
      <filter id={`${id}-fibre`}>
        <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="4" seed="7" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id}-fibre)`} />
    </svg>
  </AbsoluteFill>
);

/** Subtle exposure flicker of the stop-motion rig. */
export const Flicker: React.FC = () => {
  const f = useCurrentFrame();
  const a = 0.03 + (rnd(Math.floor(f / 2) * 13) - 0.5) * 0.035;
  return (
    <AbsoluteFill
      style={{
        pointerEvents: 'none',
        background: a > 0 ? `rgba(255,235,200,${a})` : `rgba(0,0,0,${-a})`,
        mixBlendMode: 'soft-light',
      }}
    />
  );
};

/** Full-frame warm vignette, matching the desk-lamp falloff of the reference. */
export const Vignette: React.FC<{strength?: number}> = ({strength = 0.72}) => (
  <AbsoluteFill
    style={{
      pointerEvents: 'none',
      background: `radial-gradient(115% 100% at 46% 34%, rgba(0,0,0,0) 30%, rgba(0,0,0,${strength *
        0.45}) 72%, rgba(5,3,1,${strength}) 100%)`,
    }}
  />
);

const tornPoints = (seed: number, steps = 22, amp = 1.8) => {
  // deterministic slightly torn rectangle outline, as a CSS polygon
  const pts: string[] = [];
  const push = (x: number, y: number) => pts.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * 100;
    push(x, rnd(seed + i * 3.1) * amp);
  }
  for (let i = 0; i <= steps; i++) {
    const y = (i / steps) * 100;
    push(100 - rnd(seed + 31 + i * 2.7) * amp, y);
  }
  for (let i = 0; i <= steps; i++) {
    const x = 100 - (i / steps) * 100;
    push(x, 100 - rnd(seed + 71 + i * 1.9) * amp);
  }
  for (let i = 0; i <= steps; i++) {
    const y = 100 - (i / steps) * 100;
    push(rnd(seed + 101 + i * 2.3) * amp, y);
  }
  return `polygon(${pts.join(',')})`;
};

export const torn = (seed: number, amp = 1.6) => tornPoints(seed, 22, amp);

/** A rectangle of card stock: warm paper fill, fibre texture, torn edge. */
export const Paper: React.FC<{
  w?: number | string;
  h?: number | string;
  base?: string;
  tear?: number | null;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}> = ({w, h, base = C.paper, tear = null, style, children}) => (
  <div
    style={{
      width: w,
      height: h,
      background: `linear-gradient(157deg, rgba(255,252,240,0.5) 0%, rgba(255,255,255,0) 34%),
        radial-gradient(120% 130% at 20% 6%, rgba(255,246,224,0.35) 0%, rgba(0,0,0,0.10) 80%),
        ${base}`,
      clipPath: tear === null ? undefined : torn(tear, 1.5),
      boxShadow: '0 1px 0 rgba(255,255,255,0.25) inset, 0 18px 30px rgba(0,0,0,0.35)',
      ...style,
    }}
  >
    {children}
  </div>
);
