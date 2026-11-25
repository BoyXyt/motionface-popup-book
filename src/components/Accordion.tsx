import React from 'react';
import {C} from '../lib/theme';
import {easeOut, seg, pop} from '../lib/anim';

const PW = 278;
const PH = 218;

const Perf: React.FC<{top?: boolean}> = ({top}) => (
  <div
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      [top ? 'top' : 'bottom']: 0,
      height: 19,
      background: 'linear-gradient(180deg,#e4d2b2,#d6c09c)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 8px',
      boxSizing: 'border-box',
    }}
  >
    {Array.from({length: 11}, (_, i) => (
      <div
        key={i}
        style={{
          width: 12,
          height: 8,
          borderRadius: 2,
          background: '#f7efdd',
          boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.25)',
        }}
      />
    ))}
  </div>
);

const Illus1925: React.FC = () => (
  <svg width={PW - 20} height={146} viewBox="0 0 280 146">
    <defs>
      <linearGradient id="sky25" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d97f38" />
        <stop offset="55%" stopColor="#f0b571" />
        <stop offset="100%" stopColor="#f8dfae" />
      </linearGradient>
    </defs>
    <rect width="280" height="146" fill="url(#sky25)" />
    <circle cx="206" cy="38" r="18" fill="#f8ecc8" opacity={0.9} />
    <rect x="0" y="88" width="280" height="58" fill="#4a2a1c" />
    <rect x="0" y="88" width="280" height="5" fill="#6c3f28" />
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} x={20 + i * 60} y={96 + (i % 2) * 8} width={32} height={2} fill="#7a5340" opacity={0.6} />
    ))}
    <polygon points="58,88 190,88 178,112 70,112" fill="#1c1712" />
    <rect x="90" y="62" width="15" height="26" fill="#2a221b" />
    <rect x="122" y="56" width="15" height="32" fill="#2a221b" />
    <rect x="90" y="58" width="15" height="5" fill="#c0553f" />
    <rect x="122" y="52" width="15" height="5" fill="#c0553f" />
    {[0, 1, 2, 3].map((i) => (
      <circle key={i} cx={100 + i * 14} cy={50 - i * 11} r={9 + i * 3} fill="#efe4cc" opacity={0.26 - i * 0.05} />
    ))}
    <path d="M 18 38 q 8 -5 16 0" stroke="#3a2a1c" strokeWidth={1.6} fill="none" />
    <path d="M 38 50 q 8 -5 16 0" stroke="#3a2a1c" strokeWidth={1.6} fill="none" />
  </svg>
);

const Illus1965: React.FC = () => (
  <svg width={PW - 20} height={146} viewBox="0 0 280 146">
    <defs>
      <linearGradient id="sky65" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3d8ba8" />
        <stop offset="70%" stopColor="#8fc6c6" />
        <stop offset="100%" stopColor="#cfe3d8" />
      </linearGradient>
    </defs>
    <rect width="280" height="146" fill="url(#sky65)" />
    <circle cx="58" cy="40" r="15" fill="#f8f0cf" opacity={0.9} />
    <rect x="0" y="100" width="280" height="46" fill="#2f7d8a" />
    <rect x="0" y="100" width="280" height="5" fill="#5ba3a5" />
    <rect x="0" y="114" width="280" height="32" fill="#d9c08c" />
    <rect x="26" y="92" width="32" height="14" fill="#efe3c8" />
    <polygon points="22,92 42,78 62,92" fill="#b65a3f" />
    <path d="M 56 128 Q 132 114 168 58" stroke="#f4efdd" strokeWidth={7} fill="none" opacity={0.5} strokeDasharray="13 10" />
    <g transform="translate(168 42) rotate(24)">
      <ellipse cx="0" cy="0" rx="10.5" ry="25" fill="#f4ecda" />
      <polygon points="-10.5,-13 0,-33 10.5,-13" fill="#c04a35" />
      <circle cx="0" cy="-6" r="4.4" fill="#3f6f9e" />
      <polygon points="-10.5,8 -21,25 -10.5,21" fill="#c04a35" />
      <polygon points="10.5,8 21,25 10.5,21" fill="#c04a35" />
      <rect x="-6" y="11" width="12" height="10" fill="#e8c76a" />
    </g>
  </svg>
);

const Illus1995: React.FC = () => (
  <svg width={PW - 20} height={146} viewBox="0 0 280 146">
    <defs>
      <linearGradient id="sky95" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7fb0c4" />
        <stop offset="75%" stopColor="#cfe0d6" />
        <stop offset="100%" stopColor="#e9ddc0" />
      </linearGradient>
    </defs>
    <rect width="280" height="146" fill="url(#sky95)" />
    <circle cx="214" cy="38" r="14" fill="#f8efcb" opacity={0.9} />
    <rect x="0" y="108" width="280" height="38" fill="#3f7f8a" />
    <rect x="0" y="108" width="280" height="4" fill="#6aa6ac" />
    {[
      [16, 72, 25, 36],
      [48, 58, 21, 50],
      [75, 76, 33, 32],
      [114, 62, 23, 46],
      [143, 80, 29, 28],
      [178, 66, 25, 42],
      [209, 84, 33, 24],
      [246, 70, 23, 38],
    ].map(([x, y, w, h], i) => (
      <g key={i}>
        <rect x={x} y={y} width={w} height={h} fill={i % 3 === 0 ? '#f0e4c8' : '#dfd2b4'} />
        {Array.from({length: Math.floor(h / 12)}, (_, r) => (
          <rect key={r} x={x + 4} y={y + 6 + r * 12} width={w - 8} height={4} fill="#8ea9a6" opacity={0.65} />
        ))}
      </g>
    ))}
    {[0, 1, 2, 3, 4].map((i) => (
      <rect key={`w${i}`} x={28 + i * 50} y={120 + (i % 2) * 9} width={28} height={2} fill="#cfe3dd" opacity={0.4} />
    ))}
  </svg>
);

const Illus2035: React.FC = () => (
  <svg width={PW - 20} height={146} viewBox="0 0 280 146">
    <defs>
      <linearGradient id="sky35" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#131c36" />
        <stop offset="62%" stopColor="#22384f" />
        <stop offset="100%" stopColor="#4a5a66" />
      </linearGradient>
      <radialGradient id="glow35" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0%" stopColor="#7fe6e0" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#7fe6e0" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="280" height="146" fill="url(#sky35)" />
    <rect x="0" y="114" width="280" height="32" fill="#101a2c" />
    {[
      [62, 0.9],
      [144, 0.7],
      [228, 1.02],
    ].map(([x, s], i) => (
      <g key={i} transform={`translate(${x} 114) scale(${s})`}>
        <rect x={-3} y={-70} width={6} height={70} fill="#9fb4bf" />
        <g transform="translate(0 -72)">
          <path d="M0,-4 L-28,8 M0,-4 L28,8 M0,-4 L0,-32" stroke="#b9cbd2" strokeWidth={4} strokeLinecap="round" />
          <circle cx="0" cy="-4" r="15" fill="url(#glow35)" />
          <circle cx="0" cy="-4" r="3.4" fill="#8ff2ea" />
        </g>
      </g>
    ))}
    <rect x="0" y="114" width="280" height="3" fill="#c56a8a" opacity={0.55} />
    {[0, 1, 2, 3].map((i) => (
      <circle key={i} cx={56 + i * 60} cy={130 + (i % 2) * 7} r={2.4} fill="#8ff2ea" opacity={0.55} />
    ))}
  </svg>
);

const ILLUS = [Illus1925, Illus1965, Illus1995, Illus2035];
const YEARS = ['1925', '1965', '1995', '2035'];

export const Accordion: React.FC<{
  frame: number;
  x: number;
  y: number;
  appearAt: number;
  spreadAt: number;
  artAt: number;
}> = ({frame, x, y, appearAt, spreadAt, artAt}) => {
  const base = pop(frame, appearAt, 14);
  if (base <= 0.01) return null;
  const folded = 1 - easeOut(seg(frame, spreadAt, spreadAt + 12));
  return (
    <div style={{position: 'absolute', left: x, top: y, display: 'flex', opacity: base}}>
      {/* folded card (before it concertinas open) */}
      {folded > 0.01 && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 66,
            height: PH,
            opacity: folded,
            background: 'linear-gradient(90deg,#d8c5a4 0%,#c4ae8b 45%,#e2d0af 52%,#cbb492 100%)',
            boxShadow: '6px 10px 14px rgba(0,0,0,0.4)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '6px 0',
          }}
        >
          {[0, 1, 2].map((i) => (
            <div key={i} style={{height: 2, background: 'rgba(120,95,60,0.35)', margin: '0 4px'}} />
          ))}
        </div>
      )}
      {YEARS.map((year, i) => {
        const p = easeOut(seg(frame, spreadAt + i * 3.2, spreadAt + i * 3.2 + 14));
        const art = easeOut(seg(frame, artAt + i * 4, artAt + i * 4 + 16));
        const Ill = ILLUS[i];
        const w = Math.max(0, PW * p);
        return (
          <div
            key={year}
            style={{
              width: w,
              overflow: 'hidden',
              filter: 'drop-shadow(0 12px 14px rgba(0,0,0,0.4))',
            }}
          >
            <div
              style={{
                width: PW,
                height: PH,
                position: 'relative',
                background: 'linear-gradient(94deg,#f2e4c6 0%,#e8d5b3 55%,#dfcaa4 100%)',
                boxShadow: 'inset -14px 0 18px rgba(110,80,40,0.22), inset 14px 0 18px rgba(255,250,235,0.35)',
              }}
            >
              <Perf top />
              <Perf />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 17,
                  height: 50,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 11px',
                  boxSizing: 'border-box',
                }}
              >
                <span style={{fontFamily: '"Microsoft YaHei", sans-serif', fontWeight: 600, fontSize: 21, color: C.inkBlue}}>
                  镜头{i + 1}
                </span>
                <span
                  style={{
                    fontFamily: '"Microsoft YaHei", sans-serif',
                    fontWeight: 700,
                    fontSize: 36,
                    color: C.red,
                    letterSpacing: '0.02em',
                    lineHeight: 1,
                  }}
                >
                  {year}
                </span>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: 9,
                  top: 62,
                  width: PW - 18,
                  height: 146,
                  background: '#efe0bf',
                  boxShadow: 'inset 0 0 0 2px #d3b98f',
                  overflow: 'hidden',
                }}
              >
                <div style={{opacity: 0.42 + art * 0.58, filter: `saturate(${0.4 + art * 0.6})`}}>
                  <Ill />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const AccordionSize = {panelW: PW, panelH: PH};
