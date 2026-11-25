import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Desk, World} from '../components/Desk';
import {C, F} from '../lib/theme';
import {easeOut, jitter, seg} from '../lib/anim';

const TAB_COLORS = [C.green, C.orange, C.red, C.blue, C.magenta];

/**
 * 8.80 – 9.70s
 * Low angle: the front cover lifts, coloured page tabs are revealed.
 */
export const SceneLift: React.FC = () => {
  const f = useCurrentFrame();
  const camera = [
    {f: 0, s: 1.0, x: 0, y: 34},
    {f: 27, s: 1.05, x: 0, y: 26},
  ];
  const p = easeOut(seg(f, 6, 24));
  return (
    <World frame={f} keys={camera}>
      <Desk />
      <div
        style={{
          position: 'absolute',
          left: 400,
          top: 760,
          width: 1120,
          height: 170,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.55)',
          filter: 'blur(28px)',
        }}
      />
      {/* back cover standing behind */}
      <div
        style={{
          position: 'absolute',
          left: 452,
          top: 512,
          width: 1016,
          height: 264,
          background: `linear-gradient(160deg,${C.navyLight},${C.navy} 55%,${C.navyDark})`,
          borderRadius: 6,
          transform: 'rotate(-2deg)',
          boxShadow: '0 24px 30px rgba(0,0,0,0.55)',
        }}
      />
      {/* page block */}
      <div
        style={{
          position: 'absolute',
          left: 470,
          top: 566,
          width: 980,
          height: 196,
          background: `linear-gradient(178deg,#f6ebd4 0%,#e6d2ae 100%)`,
          borderRadius: 3,
          boxShadow: 'inset 0 12px 22px rgba(120,88,44,0.28)',
        }}
      />
      {/* coloured page tabs */}
      {TAB_COLORS.map((c, i) => (
        <div
          key={c}
          style={{
            position: 'absolute',
            left: 520 + i * 118,
            top: 690 + (i % 2) * 6,
            width: 30,
            height: 82,
            background: c,
            transform: `rotate(${-6 + i * 3}deg)`,
            boxShadow: '0 8px 10px rgba(0,0,0,0.4)',
            opacity: 0.25 + 0.75 * p,
          }}
        />
      ))}
      {/* the cover, lifting on its hinge */}
      <div
        style={{
          position: 'absolute',
          left: 452,
          top: 536,
          width: 1016,
          height: 232,
          transformOrigin: '50% 100%',
          transform: `perspective(1400px) rotateX(${-16 - p * 10}deg) translateY(${-p * 26}px) rotate(${-1.5 + jitter(f, 0.2)}deg)`,
          background: `linear-gradient(157deg,${C.navyLight} 0%,${C.navy} 46%,${C.navyDark} 100%)`,
          borderRadius: 7,
          boxShadow: '0 22px 30px rgba(0,0,0,0.6), inset 0 0 0 2px rgba(255,255,255,0.05)',
        }}
      >
        <div style={{position: 'absolute', inset: 18, border: `3px solid ${C.goldDeep}`}} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 4,
          }}
        >
          <span
            style={{
              fontFamily: F.kai,
              fontWeight: 700,
              fontSize: 62,
              letterSpacing: '0.1em',
              background: 'linear-gradient(178deg,#f7dda0 0%,#e3b968 42%,#b98a35 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              filter: 'drop-shadow(0 2px 0 rgba(0,0,0,0.55))',
            }}
          >
            视频生成提示词
          </span>
        </div>
      </div>
    </World>
  );
};
