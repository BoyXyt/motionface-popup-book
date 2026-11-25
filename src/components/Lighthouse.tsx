import React from 'react';
import {C} from '../lib/theme';
import {rnd, seg, easeOut} from '../lib/anim';

const W = 1240;
const H = 500;

const STARS = Array.from({length: 64}, (_, i) => ({
  x: 20 + rnd(i * 3.7 + 1) * 1200,
  y: 10 + rnd(i * 7.3 + 5) * 240,
  r: 0.8 + rnd(i * 1.9) * 1.7,
  o: 0.3 + rnd(i * 5.1) * 0.55,
}));

const waveLines = Array.from({length: 30}, (_, i) => ({
  x: 30 + rnd(i * 2.3) * 1170,
  y: 352 + rnd(i * 4.7) * 66,
  w: 26 + rnd(i * 6.1) * 84,
  o: 0.10 + rnd(i * 8.3) * 0.26,
}));

const tufts = Array.from({length: 54}, (_, i) => ({
  x: 6 + rnd(i * 3.3 + 11) * 1226,
  y: 458 + rnd(i * 5.9 + 3) * 36,
  h: 9 + rnd(i * 2.1) * 15,
}));

const Houses: React.FC = () => {
  const roofs = [C.red, C.teal, C.purple, C.orange, '#c9a24a', C.red];
  return (
    <g>
      {Array.from({length: 6}, (_, i) => {
        const x = 128 + i * 80;
        const h = 66 + (i % 3) * 11;
        const top = 352 - h;
        return (
          <g key={i}>
            <rect x={x} y={top} width={64} height={h} fill="#f0e3c6" />
            <rect x={x} y={top} width={13} height={h} fill="#fbf3e0" opacity={0.6} />
            <polygon
              points={`${x - 9},${top} ${x + 32},${top - 32} ${x + 73},${top}`}
              fill={roofs[i % roofs.length]}
            />
            <rect x={x + 12} y={top + 18} width={12} height={15} fill="#d9c193" />
            <rect x={x + 37} y={top + 18} width={12} height={15} fill="#d9c193" />
          </g>
        );
      })}
    </g>
  );
};

const LighthouseTower: React.FC = () => (
  <g>
    {/* cliff */}
    <polygon points="900,500 942,398 1000,352 1090,340 1240,322 1240,500" fill={C.cliff} />
    <polygon points="942,398 1000,352 1090,340 1240,322 1240,346 1084,364 1020,380 976,410" fill="#3d2c1c" />
    {/* tower body */}
    <polygon points="988,352 1074,352 1060,178 1002,178" fill="#f2e6cc" />
    {/* red bands */}
    {[0, 1, 2, 3, 4].map((i) => {
      const y = 352 - i * 35;
      const t = (352 - y) / 174;
      const w = 86 - t * 58;
      return (
        <polygon
          key={i}
          points={`${1031 - w / 2},${y} ${1031 + w / 2},${y} ${1031 + w / 2 - 1.5},${y - 19} ${1031 - w / 2 + 1.5},${y - 19}`}
          fill={C.red}
        />
      );
    })}
    {/* gallery */}
    <rect x={994} y={168} width={74} height={12} fill="#d9c9a8" />
    <rect x={994} y={180} width={74} height={4} fill="#a89474" />
    {/* lamp room */}
    <rect x={1010} y={136} width={42} height={32} fill="#e8c76a" />
    <rect x={1010} y={136} width={42} height={9} fill="#f8e8b2" />
    <rect x={1004} y={130} width={54} height={8} fill="#b9a883" />
    {/* roof */}
    <polygon points="1000,130 1031,104 1062,130" fill="#8c3b2e" />
    <circle cx={1031} cy={124} r={8} fill="#fff2bd" />
    {/* light beam */}
    <polygon points="1040,128 1240,58 1240,104 1048,148" fill="#f3e2a8" opacity={0.38} />
    <polygon points="1040,132 1240,76 1240,94 1046,146" fill="#fff4c8" opacity={0.34} />
  </g>
);

export const Backdrop: React.FC<{rise: number}> = ({rise}) => {
  const layer = (i: number): React.CSSProperties => {
    const p = easeOut(seg(rise, i * 4, i * 4 + 28));
    return {
      position: 'absolute',
      inset: 0,
      transform: `translateY(${(1 - p) * 320}px)`,
    };
  };
  return (
    <div style={{position: 'absolute', width: W, height: H, overflow: 'hidden'}}>
      {/* sky, moon, stars */}
      <div style={layer(0)}>
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <defs>
            <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#092b29" />
              <stop offset="38%" stopColor="#104743" />
              <stop offset="62%" stopColor="#256b60" />
              <stop offset="82%" stopColor="#a07d4c" />
              <stop offset="94%" stopColor="#d29c55" />
              <stop offset="100%" stopColor="#c98f4a" />
            </linearGradient>
            <radialGradient id="moonG" cx="0.38" cy="0.32" r="0.78">
              <stop offset="0%" stopColor="#f6eed0" />
              <stop offset="100%" stopColor="#ddcfa2" />
            </radialGradient>
          </defs>
          <rect x={0} y={0} width={W} height={420} fill="url(#sky)" />
          {STARS.map((s, i) => (
            <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#f6f1da" opacity={s.o} />
          ))}
          <circle cx={262} cy={118} r={94} fill="url(#moonG)" />
          <circle cx={236} cy={94} r={17} fill="#d5c699" opacity={0.5} />
          <circle cx={292} cy={148} r={13} fill="#d5c699" opacity={0.45} />
          <circle cx={256} cy={170} r={8} fill="#d5c699" opacity={0.4} />
        </svg>
      </div>
      {/* far mountains */}
      <div style={layer(1)}>
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <polygon
            points="0,392 120,318 260,368 400,300 540,362 680,312 820,372 950,326 1060,368 1160,336 1240,362 1240,424 0,424"
            fill={C.mountainFar}
            opacity={0.9}
          />
          <polygon
            points="0,406 160,352 320,400 480,348 650,402 830,358 990,404 1130,368 1240,396 1240,426 0,426"
            fill={C.mountain}
          />
        </svg>
      </div>
      {/* sea */}
      <div style={layer(2)}>
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <rect x={0} y={340} width={W} height={110} fill={C.sea} />
          <rect x={0} y={340} width={W} height={14} fill="#1d5f5b" opacity={0.75} />
          <rect x={0} y={412} width={W} height={38} fill="#0e3a3d" />
          {waveLines.map((w, i) => (
            <rect key={i} x={w.x} y={w.y} width={w.w} height={1.6} fill="#86bdb1" opacity={w.o} />
          ))}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect
              key={`r${i}`}
              x={238 + i * 8}
              y={352 + i * 11}
              width={28 - i * 3}
              height={2.2}
              fill="#e0c894"
              opacity={0.5 - i * 0.05}
            />
          ))}
        </svg>
      </div>
      {/* village + lighthouse + cliff */}
      <div style={layer(3)}>
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <Houses />
          <LighthouseTower />
        </svg>
      </div>
      {/* shore + grass */}
      <div style={layer(4)}>
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
          <polygon points="0,424 280,416 560,426 840,418 1080,428 1240,420 1240,466 0,466" fill={C.sand} />
          <polygon points="0,440 260,432 600,444 900,434 1240,440 1240,500 0,500" fill="#35603a" />
          <polygon points="0,440 260,432 600,444 900,434 1240,440 1240,452 0,452" fill="#4f7f4e" opacity={0.55} />
          {tufts.map((t, i) => (
            <path
              key={i}
              d={`M ${t.x} ${t.y} l -5 -${t.h} M ${t.x} ${t.y} l 1 -${t.h + 3} M ${t.x} ${t.y} l 6 -${t.h - 3}`}
              stroke="#2f5a33"
              strokeWidth={1.7}
              fill="none"
              opacity={0.75}
            />
          ))}
          {Array.from({length: 9}, (_, i) => (
            <path
              key={`c${i}`}
              d={`M ${30 + i * 138} 436 q 17 -15 34 0`}
              stroke="#a9d2c4"
              strokeWidth={3.2}
              fill="none"
              opacity={0.42}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export const BackdropSize = {w: W, h: H};
