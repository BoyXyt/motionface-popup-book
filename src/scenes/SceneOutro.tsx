import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Desk, World} from '../components/Desk';
import {CoverPlate} from '../components/BookPlanes';
import {FilmCard} from '../components/OmniBox';
import {C, F} from '../lib/theme';
import {rnd} from '../lib/anim';

const CARDS = Array.from({length: 32}, (_, i) => {
  const cluster = i < 22;
  const cx = cluster ? 300 + rnd(i * 3.7 + 1) * 1300 : rnd(i * 3.7 + 1) * 1900;
  const cy = cluster ? 330 + rnd(i * 5.1 + 2) * 620 : 120 + rnd(i * 5.1 + 2) * 900;
  return {
    x: cx,
    y: cy,
    rot: -64 + rnd(i * 2.3) * 128,
    w: 104 + rnd(i * 7.9) * 104,
    v: rnd(i * 4.4),
    z: Math.floor(rnd(i * 9.1) * 12),
  };
});

const TABS = [
  {x: 330, y: 668, label: '世界观·故事', color: C.green, rot: -13},
  {x: 530, y: 700, label: '时间跨度', color: C.orange, rot: -7},
  {x: 1160, y: 672, label: '画面风格', color: C.blue, rot: 9},
];

/**
 * 33.10 – 38.20s
 * Overhead: the finished prompt book, buried under every prompt card that
 * went into making it. "Enough constraints means uniqueness."
 */
export const SceneOutro: React.FC = () => {
  const f = useCurrentFrame();
  const camera = [
    {f: 0, s: 1.0, x: 0, y: 2, r: -1},
    {f: 153, s: 1.07, x: 0, y: -10, r: 0.6},
  ];
  return (
    <World frame={f} keys={camera} origin="50% 42%">
      <Desk />
      {/* soft reading light */}
      <div
        style={{
          position: 'absolute',
          left: 280,
          top: 150,
          width: 1360,
          height: 800,
          background: 'radial-gradient(50% 50% at 50% 45%, rgba(255,214,150,0.14), rgba(0,0,0,0) 70%)',
        }}
      />
      {/* book cover, partly hidden by the prompt cards */}
      <CoverPlate x={462} y={322} w={1000} h={404} rot={-6} scale={1} />

      {/* tabs sticking out under the cover */}
      {TABS.map((t) => (
        <div
          key={t.label}
          style={{
            position: 'absolute',
            left: t.x,
            top: t.y,
            width: 216,
            height: 82,
            transform: `rotate(${t.rot}deg)`,
            background: 'linear-gradient(176deg,#f7efdd 0%,#e7d5b6 100%)',
            borderTop: `6px solid ${t.color}`,
            boxSizing: 'border-box',
            boxShadow: '0 12px 16px rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontFamily: F.sans,
              fontWeight: 700,
              fontSize: 23,
              color: t.color,
              whiteSpace: 'nowrap',
            }}
          >
            {t.label}
          </span>
          <svg width={34} height={34} viewBox="0 0 40 40" style={{marginLeft: 'auto'}}>
            <path d="M6 22 L16 32 L35 8" stroke={C.red} strokeWidth={9} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ))}

      {/* the pile of prompt cards */}
      {CARDS.map((c, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: c.x,
            top: c.y,
            zIndex: 3 + c.z,
          }}
        >
          <FilmCard
            x={0}
            y={0}
            w={c.w}
            h={c.w * 0.68}
            rot={c.rot}
            variant={c.v > 0.5 ? 'photo' : 'blank'}
          />
        </div>
      ))}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(115% 100% at 46% 44%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.45) 82%, rgba(0,0,0,0.82) 100%)',
        }}
      />
    </World>
  );
};
