import React from 'react';
import {C} from '../lib/theme';

/** Big orange-red "≠" paper cut-out standing on the desk. */
export const NotEqual: React.FC<{x: number; y: number; scale?: number; rot?: number}> = ({
  x,
  y,
  scale = 1,
  rot = -3,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 220,
      height: 200,
      transform: `scale(${scale}) rotate(${rot}deg)`,
      transformOrigin: '50% 100%',
      filter: 'drop-shadow(14px 18px 16px rgba(0,0,0,0.55))',
    }}
  >
    <svg width={220} height={200} viewBox="0 0 220 200">
      <g fill="none" stroke={C.orange} strokeWidth={26} strokeLinecap="butt">
        <path d="M 22 78 L 198 60" />
        <path d="M 22 140 L 198 122" />
        <path d="M 172 24 L 48 176" />
      </g>
      <g fill="none" stroke="#e8734a" strokeWidth={8} strokeLinecap="butt" opacity={0.55}>
        <path d="M 22 72 L 198 54" />
        <path d="M 172 18 L 48 170" />
      </g>
    </svg>
  </div>
);

/** Cream paper tag pinned to the OMNI box. */
export const PriceTag: React.FC<{x: number; y: number; text: string; rot?: number; scale?: number}> = ({
  x,
  y,
  text,
  rot = -5,
  scale = 1,
}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `rotate(${rot}deg) scale(${scale})`,
      filter: 'drop-shadow(0 12px 14px rgba(0,0,0,0.5))',
    }}
  >
    <div
      style={{
        background: 'linear-gradient(174deg,#f6eedc 0%,#e6d3b2 100%)',
        padding: '14px 34px 16px 40px',
        clipPath: 'polygon(0% 4%, 94% 0%, 100% 8%, 97% 96%, 6% 100%)',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}
    >
      <div style={{width: 10, height: 10, borderRadius: '50%', background: '#2a2119'}} />
      <span
        style={{
          fontFamily: '"Microsoft YaHei", sans-serif',
          fontWeight: 700,
          fontSize: 40,
          color: '#241d15',
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </span>
    </div>
    <div style={{position: 'absolute', left: 16, top: -8, width: 20, height: 20, borderRadius: '50%', border: '3px solid #8f7f63'}} />
  </div>
);
