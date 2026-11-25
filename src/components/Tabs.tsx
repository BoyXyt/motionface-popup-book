import React from 'react';
import {C, F} from '../lib/theme';
import {pop} from '../lib/anim';

export type TabSpec = {
  label: string;
  color: string;
  icon: 'globe' | 'hourglass' | 'film' | 'pencil' | 'music';
};

export const TAB_SPECS: TabSpec[] = [
  {label: '世界观·故事', color: C.green, icon: 'globe'},
  {label: '时间跨度', color: C.orange, icon: 'hourglass'},
  {label: '时代背景', color: C.red, icon: 'film'},
  {label: '画面风格', color: C.blue, icon: 'pencil'},
  {label: '节奏·声音', color: C.purple, icon: 'music'},
];

const TabIcon: React.FC<{kind: TabSpec['icon']; color: string}> = ({kind, color}) => {
  const s = {stroke: color, strokeWidth: 2.4, fill: 'none'} as const;
  switch (kind) {
    case 'globe':
      return (
        <svg width={31} height={31} viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="10" {...s} />
          <ellipse cx="15" cy="15" rx="4.4" ry="10" {...s} />
          <path d="M5 15h20M6.4 9.5h17.2M6.4 20.5h17.2" {...s} />
        </svg>
      );
    case 'hourglass':
      return (
        <svg width={31} height={31} viewBox="0 0 30 30">
          <path d="M8 5h14l-5.2 10L22 25H8l5.2-10L8 5z" {...s} />
          <path d="M11 8.5h8M11 21.5h8" {...s} />
        </svg>
      );
    case 'film':
      return (
        <svg width={31} height={31} viewBox="0 0 30 30">
          <rect x="4" y="7" width="22" height="16" rx="2" {...s} />
          <path d="M4 12h22M4 18h22M9 7v16M21 7v16" {...s} strokeWidth={1.6} />
        </svg>
      );
    case 'pencil':
      return (
        <svg width={31} height={31} viewBox="0 0 30 30">
          <path d="M5 24l2-6L20 5l5 5L12 23l-7 1z" {...s} />
          <path d="M18 7l5 5" {...s} />
        </svg>
      );
    default:
      return (
        <svg width={31} height={31} viewBox="0 0 30 30">
          <circle cx="10" cy="23" r="3.2" {...s} />
          <path d="M13 23V7l10-2v14" {...s} />
          <circle cx="20" cy="19" r="3.2" {...s} />
        </svg>
      );
  }
};

const CheckMark: React.FC<{size: number}> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={{filter: 'drop-shadow(0 3px 3px rgba(0,0,0,0.45))'}}>
    <path
      d="M6 22 L16 32 L35 8"
      stroke={C.red}
      strokeWidth={9}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** The five constraint tabs that hang off the front edge of the pop-up book. */
export const TabsRow: React.FC<{
  frame: number;
  y: number;
  appearAt: number;
  checkAt?: number[];
  scale?: number;
  baseX?: number;
  focus?: number;
}> = ({frame, y, appearAt, checkAt, scale = 1, baseX = 196, focus = 1}) => {
  const rots = [-7.5, -3.6, 0.4, 4.2, 8.6];
  return (
    <>
      {TAB_SPECS.map((tab, i) => {
        const p = pop(frame, appearAt + i * 4, 13);
        const check = checkAt ? pop(frame, checkAt[i] ?? 400, 11) : 0;
        const x = baseX + i * 320;
        const lift = (1 - p) * 60;
        return (
          <div
            key={tab.label}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: 264,
              height: 94,
              transform: `scale(${scale * (focus === i ? 1.05 : 1)}) rotate(${rots[i]}deg) translateY(${lift}px)`,
              transformOrigin: '50% 100%',
              opacity: p <= 0 ? 0 : 1,
              filter: 'drop-shadow(0 16px 18px rgba(0,0,0,0.5))',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(176deg,#f7efdd 0%,#e9d8b9 100%)',
                borderTop: `7px solid ${tab.color}`,
                borderBottom: `2px solid ${tab.color}`,
                boxSizing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '0 13px',
                transform: `scaleY(${0.5 + 0.5 * p})`,
                transformOrigin: '50% 100%',
              }}
            >
              <TabIcon kind={tab.icon} color={tab.color} />
              <span
                style={{
                  fontFamily: F.sans,
                  fontWeight: 700,
                  fontSize: 28,
                  color: tab.color,
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </span>
            </div>
            {checkAt && (
              <div
                style={{
                  position: 'absolute',
                  right: -12,
                  top: -22,
                  transform: `rotate(12deg) scale(${check})`,
                }}
              >
                <CheckMark size={58} />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

/** Small "✓" ribbon used on tabs in the final tableaux. */
export const SmallCheck: React.FC<{x: number; y: number; size?: number; rot?: number}> = ({
  x,
  y,
  size = 44,
  rot = 10,
}) => (
  <div style={{position: 'absolute', left: x, top: y, transform: `rotate(${rot}deg)`}}>
    <CheckMark size={size} />
  </div>
);

/** Style ribbons that sit above the accordion (剪影 / 网点 / 像素 / 霓虹). */
export const StyleRibbon: React.FC<{x: number; y: number; text: string; scale?: number}> = ({
  x,
  y,
  text,
  scale = 1,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `scale(${scale})`,
      background: 'linear-gradient(180deg,#2f6fa8 0%,#245a8a 100%)',
      color: '#eef4f8',
      fontFamily: F.sans,
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '0.08em',
      padding: '5px 16px 6px',
      clipPath: 'polygon(3% 0%, 100% 4%, 97% 100%, 0% 96%)',
      boxShadow: '0 8px 12px rgba(0,0,0,0.4)',
    }}
  >
    {text}
  </div>
);
