import React from 'react';
import {C, F} from '../lib/theme';

const pageFill =
  'radial-gradient(130% 120% at 22% 8%, rgba(255,247,226,0.55) 0%, rgba(255,255,255,0) 55%), linear-gradient(180deg,#f4e6c8 0%,#edd9b4 100%)';

/** The open spread the two "conversation" cards sit on (t = 4鈥?.7s). */
export const OpenSpread: React.FC<{x: number; y: number; rot?: number; scale?: number}> = ({
  x,
  y,
  rot = -0.6,
  scale = 1,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 1140,
      height: 400,
      transform: `rotate(${rot}deg) scale(${scale})`,
      transformOrigin: '50% 50%',
      filter: 'drop-shadow(0 26px 34px rgba(0,0,0,0.55))',
    }}
  >
    {/* navy cover trim */}
    <div style={{position: 'absolute', inset: 0, background: C.navy, borderRadius: 10}} />
    {/* top (far) page */}
    <div
      style={{
        position: 'absolute',
        left: 10,
        top: 12,
        width: 1120,
        height: 140,
        background: pageFill,
        clipPath: 'polygon(0% 4%, 100% 0%, 100% 100%, 0% 100%)',
        boxShadow: 'inset 0 -20px 26px rgba(140,105,60,0.28)',
      }}
    />
    {/* bottom (near) page */}
    <div
      style={{
        position: 'absolute',
        left: 6,
        top: 156,
        width: 1128,
        height: 228,
        background: pageFill,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 96%, 0% 100%)',
        boxShadow: 'inset 0 22px 26px rgba(140,105,60,0.22)',
      }}
    />
    {/* gutter shadow */}
    <div
      style={{
        position: 'absolute',
        left: 6,
        top: 144,
        width: 1128,
        height: 18,
        background: 'linear-gradient(180deg, rgba(70,45,20,0.42), rgba(70,45,20,0))',
      }}
    />
    {/* page edge highlight */}
    <div
      style={{
        position: 'absolute',
        left: 8,
        top: 148,
        width: 1124,
        height: 3,
        background: 'rgba(255,248,230,0.6)',
      }}
    />
  </div>
);

/** Hand-lettered name cards ("鎴? / "鉁emini"). */
export const NameCard: React.FC<{
  x: number;
  y: number;
  text: string;
  accent: string;
  rot?: number;
  scale?: number;
  big?: boolean;
  font?: string;
}> = ({x, y, text, accent, rot = 0, scale = 1, big = false, font}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `rotate(${rot}deg) scale(${scale})`,
      transformOrigin: '50% 80%',
      filter: 'drop-shadow(0 14px 16px rgba(0,0,0,0.5))',
    }}
  >
    <div
      style={{
        width: big ? 204 : 206,
        height: big ? 122 : 112,
        background: 'linear-gradient(172deg,#f7eedb 0%,#e9d7b8 100%)',
        padding: '10px 16px 14px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontFamily: font ?? F.kai,
          fontSize: big ? 70 : 30,
          fontWeight: 600,
          color: '#241d15',
          letterSpacing: '0.02em',
          lineHeight: 1,
          textShadow: '0 1px 0 rgba(255,255,255,0.5)',
        }}
      >
        {text}
      </span>
    </div>
    <div style={{height: 12, background: accent, boxShadow: 'inset 0 -3px 0 rgba(0,0,0,0.25)'}} />
  </div>
);

/** Glossy paper sticker speech bubbles that pop up on sticks. */
export const BubbleSticker: React.FC<{
  x: number;
  y: number;
  color: string;
  icon: 'globe' | 'hourglass' | 'music' | 'video' | 'search' | 'spark';
  scale?: number;
  rot?: number;
  stick?: number;
}> = ({x, y, color, icon, scale = 1, rot = 0, stick = 0}) => {
  const iconEl = () => {
    switch (icon) {
      case 'globe':
        return (
          <g stroke="#f6efdd" strokeWidth={5} fill="none">
            <circle cx="100" cy="92" r="34" />
            <ellipse cx="100" cy="92" rx="14" ry="34" />
            <path d="M 66 92 H 134 M 72 74 H 128 M 72 112 H 128" />
          </g>
        );
      case 'hourglass':
        return (
          <g stroke="#f6efdd" strokeWidth={5} fill="none">
            <path d="M 76 62 H 124 L 104 92 L 124 122 H 76 L 96 92 Z" />
            <path d="M 96 92 H 104" strokeWidth={3} />
          </g>
        );
      case 'music':
        return (
          <g stroke="#f6efdd" strokeWidth={5} fill="none">
            <circle cx="86" cy="120" r="10" />
            <path d="M 96 120 V 66 L 120 60 V 112" />
            <circle cx="110" cy="112" r="10" />
          </g>
        );
      case 'video':
        return (
          <g stroke="#f6efdd" strokeWidth={5} fill="none">
            <rect x="72" y="70" width="56" height="44" rx="4" />
            <path d="M 100 80 L 116 92 L 100 104 Z" />
          </g>
        );
      case 'search':
        return (
          <g stroke="#f6efdd" strokeWidth={5} fill="none">
            <circle cx="94" cy="86" r="22" />
            <path d="M 110 102 L 126 118" />
          </g>
        );
      default:
        return (
          <path
            d="M 100 54 L 110 84 L 140 94 L 110 104 L 100 134 L 90 104 L 60 94 L 90 84 Z"
            fill="#f6efdd"
          />
        );
    }
  };
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: 200,
        height: 200 + stick,
        transform: `scale(${scale}) rotate(${rot}deg)`,
        transformOrigin: '50% 70%',
        filter: 'drop-shadow(0 12px 14px rgba(0,0,0,0.45))',
      }}
    >
      {stick > 0 && (
        <div
          style={{
            position: 'absolute',
            left: 96,
            top: 150,
            width: 8,
            height: stick,
            background: 'linear-gradient(90deg,#d8c8a8,#b9a682)',
            borderRadius: 4,
          }}
        />
      )}
      <svg width={200} height={200} viewBox="0 0 200 200">
        <path
          d="M 100 12 C 148 12 186 48 186 92 C 186 138 148 168 100 168 C 84 168 68 165 55 159 L 30 178 L 38 148 C 24 134 16 114 16 92 C 16 48 52 12 100 12 Z"
          fill={color}
          stroke="#f6efdd"
          strokeWidth={9}
          strokeLinejoin="round"
        />
        <ellipse cx="86" cy="52" rx="38" ry="18" fill="rgba(255,255,255,0.16)" />
        {iconEl()}
      </svg>
    </div>
  );
};

/** Closed navy prompt book with gold blocking on the cover. */
export const ClosedCover: React.FC<{x: number; y: number; scale?: number; rot?: number}> = ({
  x,
  y,
  scale = 1,
  rot = -0.4,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 960,
      height: 250,
      transform: `rotate(${rot}deg) scale(${scale})`,
      transformOrigin: '50% 50%',
      filter: 'drop-shadow(0 30px 34px rgba(0,0,0,0.6))',
    }}
  >
    {/* page block below the cover */}
    <div
      style={{
        position: 'absolute',
        left: 10,
        bottom: 0,
        width: 940,
        height: 46,
        background: 'linear-gradient(180deg,#f6ebd6 0%,#dcc7a4 60%,#c3a982 100%)',
        borderRadius: '0 0 6px 6px',
      }}
    />
    <div
      style={{
        position: 'absolute',
        left: 6,
        bottom: 40,
        width: 948,
        height: 12,
        background: 'linear-gradient(180deg,#e9dcc2,#c9b28c)',
        opacity: 0.8,
      }}
    />
    {/* front cover */}
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: 960,
        height: 210,
        background: `linear-gradient(158deg, ${C.navyLight} 0%, ${C.navy} 46%, ${C.navyDark} 100%)`,
        borderRadius: 8,
        boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.06), inset 0 -18px 30px rgba(0,0,0,0.35)',
      }}
    >
      {/* gold double frame */}
      <div
        style={{
          position: 'absolute',
          inset: 22,
          border: `3px solid ${C.goldDeep}`,
          boxShadow: `inset 0 0 0 6px rgba(227,185,104,0.10)`,
          borderRadius: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 34,
          border: `1.5px solid rgba(227,185,104,0.75)`,
        }}
      />
      {/* gold title */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 6,
        }}
      >
        <span
          style={{
            fontFamily: F.kai,
            fontWeight: 700,
            fontSize: 74,
            letterSpacing: '0.1em',
            background: 'linear-gradient(178deg,#f7dda0 0%,#e3b968 42%,#b98a35 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'drop-shadow(0 2px 0 rgba(0,0,0,0.55))',
          }}
        >
          视频生成提示词</span>
      </div>
      {/* colour dots */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 52,
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        {['#d4563f', '#e8b23a', '#4a9c6d', '#3b6fb5', '#a3356f'].map((c) => (
          <div
            key={c}
            style={{width: 12, height: 12, borderRadius: '50%', background: c, opacity: 0.95}}
          />
        ))}
      </div>
    </div>
  </div>
);

/** Cover plate used in the closing wide shot. */
export const CoverPlate: React.FC<{
  x: number;
  y: number;
  w: number;
  h: number;
  rot: number;
  scale?: number;
}> = ({x, y, w, h, rot, scale = 1}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: w,
      height: h,
      background: `linear-gradient(155deg, ${C.navyLight} 0%, ${C.navy} 50%, ${C.navyDark} 100%)`,
      borderRadius: 10,
      transform: `rotate(${rot}deg) scale(${scale})`,
      boxShadow: '0 34px 40px rgba(0,0,0,0.55), inset 0 0 0 2px rgba(255,255,255,0.05)',
    }}
  >
    <div style={{position: 'absolute', inset: 26, border: `3px solid ${C.goldDeep}`}} />
    <div style={{position: 'absolute', inset: 38, border: `1.5px solid rgba(227,185,104,0.7)`}} />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontFamily: F.kai,
          fontWeight: 700,
          fontSize: Math.round(h * 0.32),
          letterSpacing: '0.1em',
          background: 'linear-gradient(178deg,#f7dda0 0%,#e3b968 42%,#b98a35 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          filter: 'drop-shadow(0 2px 0 rgba(0,0,0,0.5))',
        }}
      >
        视频生成提示词</span>
    </div>
  </div>
);

