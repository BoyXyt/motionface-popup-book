import React from 'react';

const GroundShadow: React.FC<{w?: number; o?: number}> = ({w = 90, o = 0.5}) => (
  <div
    style={{
      position: 'absolute',
      left: '50%',
      bottom: -8,
      transform: 'translateX(-50%)',
      width: w,
      height: 18,
      borderRadius: '50%',
      background: `rgba(0,0,0,${o})`,
      filter: 'blur(7px)',
    }}
  />
);

/** The little paper-doll viewer who stands inside the pop-up book. */
export const Character: React.FC<{x: number; y: number; scale?: number; rot?: number}> = ({
  x,
  y,
  scale = 1,
  rot = 0,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 90,
      height: 168,
      transform: `scale(${scale}) rotate(${rot}deg)`,
      transformOrigin: '50% 100%',
      filter: 'drop-shadow(6px 10px 8px rgba(0,0,0,0.5))',
    }}
  >
    <GroundShadow w={80} o={0.4} />
    <svg width={90} height={168} viewBox="0 0 90 168">
      {/* legs + boots */}
      <rect x={30} y={118} width={11} height={36} fill="#22303c" />
      <rect x={50} y={118} width={11} height={36} fill="#22303c" />
      <rect x={24} y={152} width={20} height={12} rx={4} fill="#b6422f" />
      <rect x={47} y={152} width={20} height={12} rx={4} fill="#b6422f" />
      {/* coat */}
      <path d="M 27 66 L 63 66 L 70 124 L 20 124 Z" fill="#e8b23a" />
      <path d="M 27 66 L 45 66 L 45 124 L 20 124 Z" fill="#f2c34f" opacity={0.6} />
      <path d="M 36 64 L 45 79 L 54 64 L 45 61 Z" fill="#f6e6c6" />
      {/* arms */}
      <path d="M 27 70 L 14 106 L 21 110 L 33 78 Z" fill="#e0a92f" />
      <path d="M 63 70 L 76 106 L 69 110 L 57 78 Z" fill="#e0a92f" />
      <circle cx={17} cy={109} r={5.5} fill="#f0dcb8" />
      <circle cx={73} cy={109} r={5.5} fill="#f0dcb8" />
      {/* neck */}
      <rect x={39} y={54} width={12} height={12} fill="#f0dcb8" />
      {/* head */}
      <circle cx={45} cy={36} r={26} fill="#f2dfbb" />
      {/* hair bowl */}
      <path d="M 19 36 A 26 26 0 0 1 71 36 L 71 30 A 26 26 0 0 0 19 30 Z" fill="#2b2018" />
      <path d="M 19 34 C 24 12 66 12 71 34 C 60 22 30 22 19 34 Z" fill="#2b2018" />
      <circle cx={35} cy={40} r={2.6} fill="#2b2018" />
      <circle cx={55} cy={40} r={2.6} fill="#2b2018" />
      <path d="M 41 48 q 4 3 8 0" stroke="#b07a55" strokeWidth={1.8} fill="none" strokeLinecap="round" />
      <circle cx={30} cy={46} r={4} fill="#e9a08a" opacity={0.45} />
      <circle cx={60} cy={46} r={4} fill="#e9a08a" opacity={0.45} />
    </svg>
  </div>
);

export const Train: React.FC<{x: number; y: number; scale?: number; rot?: number}> = ({
  x,
  y,
  scale = 1,
  rot = 0,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 210,
      height: 150,
      transform: `scale(${scale}) rotate(${rot}deg)`,
      transformOrigin: '50% 100%',
      filter: 'drop-shadow(10px 14px 10px rgba(0,0,0,0.5))',
    }}
  >
    <GroundShadow w={170} o={0.45} />
    <svg width={210} height={150} viewBox="0 0 210 150">
      {/* wheels */}
      {[46, 84, 154].map((cx, i) => (
        <g key={cx}>
          <circle cx={cx} cy={118} r={i === 2 ? 26 : 19} fill="#1d1712" />
          <circle cx={cx} cy={118} r={i === 2 ? 14 : 9} fill="#b6422f" />
          <circle cx={cx} cy={118} r={i === 2 ? 5 : 3.4} fill="#e6d6b8" />
        </g>
      ))}
      {/* chassis */}
      <rect x={18} y={100} width={176} height={14} fill="#1d1712" rx={4} />
      {/* boiler */}
      <rect x={22} y={58} width={116} height={46} rx={20} fill="#241a13" />
      <rect x={22} y={64} width={116} height={8} fill="#3a2b1e" />
      {/* cab */}
      <rect x={132} y={40} width={56} height={64} fill="#2b1f16" rx={5} />
      <rect x={140} y={50} width={40} height={28} fill="#c9a26a" rx={3} />
      <rect x={140} y={50} width={40} height={28} fill="#8f6c3f" opacity={0.35} />
      {/* chimney */}
      <rect x={44} y={32} width={22} height={28} fill="#241a13" />
      <rect x={38} y={24} width={34} height={12} rx={4} fill="#b6422f" />
      {/* smoke */}
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={44 + i * 12} cy={16 - i * 9} r={8 + i * 3} fill="#efe4cc" opacity={0.35 - i * 0.07} />
      ))}
      {/* headlamp */}
      <circle cx={30} cy={80} r={7} fill="#f2dd97" />
      <rect x={150} y={30} width={6} height={12} fill="#b6422f" />
    </svg>
  </div>
);

export const Rocket: React.FC<{x: number; y: number; scale?: number; rot?: number}> = ({
  x,
  y,
  scale = 1,
  rot = 0,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 96,
      height: 200,
      transform: `scale(${scale}) rotate(${rot}deg)`,
      transformOrigin: '50% 100%',
      filter: 'drop-shadow(8px 12px 10px rgba(0,0,0,0.5))',
    }}
  >
    <GroundShadow w={64} o={0.4} />
    <svg width={96} height={200} viewBox="0 0 96 200">
      {/* body */}
      <path d="M 30 44 L 66 44 L 66 160 L 30 160 Z" fill="#f2e6cc" />
      <path d="M 30 44 L 48 44 L 48 160 L 30 160 Z" fill="#fbf3e0" opacity={0.7} />
      {/* nose */}
      <path d="M 30 44 C 30 16 48 2 48 2 C 48 2 66 16 66 44 Z" fill="#c04a35" />
      {/* porthole */}
      <circle cx={48} cy={80} r={12} fill="#3f6f9e" />
      <circle cx={48} cy={80} r={12} fill="none" stroke="#d8c9a8" strokeWidth={4} />
      <circle cx={44} cy={76} r={4} fill="#9dc0d8" opacity={0.6} />
      {/* fins */}
      <path d="M 30 128 L 10 172 L 30 160 Z" fill="#c04a35" />
      <path d="M 66 128 L 86 172 L 66 160 Z" fill="#c04a35" />
      {/* nozzle + flame */}
      <rect x={38} y={158} width={20} height={12} fill="#5a5348" />
      <path d="M 40 170 L 48 192 L 56 170 Z" fill="#e8b23a" />
    </svg>
  </div>
);

export const Computer: React.FC<{x: number; y: number; scale?: number; rot?: number}> = ({
  x,
  y,
  scale = 1,
  rot = 0,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 160,
      height: 150,
      transform: `scale(${scale}) rotate(${rot}deg)`,
      transformOrigin: '50% 100%',
      filter: 'drop-shadow(10px 12px 10px rgba(0,0,0,0.5))',
    }}
  >
    <GroundShadow w={130} o={0.4} />
    <svg width={160} height={150} viewBox="0 0 160 150">
      {/* monitor */}
      <rect x={26} y={16} width={108} height={84} rx={6} fill="#e4d8bf" />
      <rect x={26} y={16} width={108} height={84} rx={6} fill="none" stroke="#bfae8e" strokeWidth={3} />
      <rect x={38} y={28} width={84} height={58} rx={3} fill="#22301f" />
      <rect x={38} y={28} width={84} height={58} rx={3} fill="#3f6b3a" opacity={0.5} />
      {/* retro text lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={44} y={36 + i * 9} width={i % 2 ? 34 : 56} height={4} fill="#8ee08a" opacity={0.8} />
      ))}
      {/* neck + base */}
      <rect x={64} y={100} width={32} height={16} fill="#d3c5a8" />
      <rect x={38} y={114} width={84} height={16} rx={4} fill="#cbbca0" />
      <rect x={46} y={118} width={68} height={5} fill="#b3a487" />
    </svg>
  </div>
);

export const Gramophone: React.FC<{x: number; y: number; scale?: number; rot?: number}> = ({
  x,
  y,
  scale = 1,
  rot = 0,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 180,
      height: 190,
      transform: `scale(${scale}) rotate(${rot}deg)`,
      transformOrigin: '50% 100%',
      filter: 'drop-shadow(8px 12px 10px rgba(0,0,0,0.5))',
    }}
  >
    <GroundShadow w={120} o={0.4} />
    <svg width={180} height={190} viewBox="0 0 180 190">
      {/* horn */}
      <path d="M 96 74 C 60 18 20 14 8 44 C 14 82 50 104 96 100 Z" fill="#6b3f86" />
      <path d="M 92 78 C 62 34 28 28 18 46 C 26 74 56 94 92 96 Z" fill="#8955a3" opacity={0.75} />
      <ellipse cx={14} cy={46} rx={9} ry={26} fill="#f0dfc6" opacity={0.5} />
      {/* arm */}
      <path d="M 96 86 L 120 104 L 134 118" stroke="#3a2b1e" strokeWidth={7} fill="none" strokeLinecap="round" />
      {/* base */}
      <rect x={62} y={104} width={78} height={54} rx={6} fill="#4a2b16" />
      <rect x={62} y={104} width={78} height={12} rx={6} fill="#6b3f22" />
      <circle cx={140} cy={128} r={9} fill="#c9a26a" />
      {/* sound waves */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M ${26 - i * 8} ${40 - i * 10} q -16 22 0 44`}
          stroke="#e8c98f"
          strokeWidth={3.4}
          fill="none"
          opacity={0.55 - i * 0.12}
        />
      ))}
    </svg>
  </div>
);

export const Signpost: React.FC<{x: number; y: number; scale?: number; rot?: number}> = ({
  x,
  y,
  scale = 1,
  rot = 0,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 140,
      height: 240,
      transform: `scale(${scale}) rotate(${rot}deg)`,
      transformOrigin: '50% 100%',
      filter: 'drop-shadow(8px 12px 10px rgba(0,0,0,0.45))',
    }}
  >
    <GroundShadow w={70} o={0.35} />
    <svg width={140} height={240} viewBox="0 0 140 240">
      <rect x={66} y={40} width={8} height={196} fill="#8a6a44" />
      <rect x={20} y={62} width={104} height={34} fill="#2f6fa8" transform="rotate(-4 72 79)" />
      <rect x={20} y={62} width={104} height={8} fill="#4a8cc4" transform="rotate(-4 72 79)" />
      <polygon points="16,62 34,79 16,96" fill="#2f6fa8" transform="rotate(-4 72 79)" />
      <rect x={40} y={108} width={92} height={34} fill="#2f6fa8" transform="rotate(5 86 125)" />
      <rect x={40} y={108} width={92} height={8} fill="#4a8cc4" transform="rotate(5 86 125)" />
      <polygon points="136,108 116,125 136,142" fill="#2f6fa8" transform="rotate(5 86 125)" />
    </svg>
  </div>
);

export const Flag: React.FC<{x: number; y: number; scale?: number}> = ({x, y, scale = 1}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 70,
      height: 120,
      transform: `scale(${scale})`,
      transformOrigin: '50% 100%',
      filter: 'drop-shadow(5px 7px 6px rgba(0,0,0,0.4))',
    }}
  >
    <svg width={70} height={120} viewBox="0 0 70 120">
      <rect x={4} y={6} width={5} height={110} fill="#8a6a44" />
      <path d="M 9 12 L 64 26 L 9 44 Z" fill="#c04a35" />
    </svg>
  </div>
);

/** Purple origami bow sitting on the page. */
export const PaperBow: React.FC<{x: number; y: number; scale?: number; rot?: number}> = ({
  x,
  y,
  scale = 1,
  rot = 0,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 150,
      height: 100,
      transform: `scale(${scale}) rotate(${rot}deg)`,
      transformOrigin: '50% 100%',
      filter: 'drop-shadow(8px 10px 8px rgba(0,0,0,0.45))',
    }}
  >
    <svg width={150} height={100} viewBox="0 0 150 100">
      <path d="M 20 62 L 52 22 L 76 48 L 52 78 Z" fill="#5b3272" />
      <path d="M 130 62 L 98 22 L 74 48 L 98 78 Z" fill="#6b3f86" />
      <path d="M 52 78 L 62 96 L 82 80 Z" fill="#4a2a60" />
      <circle cx={75} cy={52} r={12} fill="#8a5aa3" />
      <path d="M 20 62 L 52 22 L 76 48 L 52 78 Z" fill="#8a5aa3" opacity={0.35} />
    </svg>
  </div>
);

/** Long studio-backdrop shadow behind an upright panel. */
export const PanelShadow: React.FC<{x: number; y: number; w: number; h: number; rot?: number}> = ({
  x,
  y,
  w,
  h,
  rot = 12,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: w,
      height: h,
      background: 'rgba(0,0,0,0.55)',
      filter: 'blur(26px)',
      transform: `rotate(${rot}deg) skewY(-8deg)`,
      opacity: 0.75,
    }}
  />
);
