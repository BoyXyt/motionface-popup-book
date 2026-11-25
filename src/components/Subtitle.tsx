import React from 'react';
import {useCurrentFrame} from 'remotion';
import {C, F} from '../lib/theme';
import {easeOutBack, rnd, seg} from '../lib/anim';

export type Sub = {t: number; text: string};

/**
 * The reference burns its subtitles onto torn strips of white card stock,
 * dropped slightly crooked at the bottom centre of frame.
 */
export const Subtitle: React.FC<{text: string; startFrame: number; seed?: number}> = ({
  text,
  startFrame,
  seed = 1,
}) => {
  const f = useCurrentFrame();
  const local = f - startFrame;
  if (local < 0) return null;
  const enter = seg(local, 0, 4);
  const k = enter <= 0 ? 0 : easeOutBack(enter, 2.2);
  const rot = -0.9 + (rnd(seed) - 0.5) * 1.1;
  const y = (1 - k) * 16;
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        bottom: 52,
        transform: `translate(-50%, ${y}px) scale(${0.92 + 0.08 * k}) rotate(${rot}deg)`,
        filter: 'drop-shadow(0 10px 14px rgba(0,0,0,0.45))',
        opacity: Math.min(1, enter * 1.6),
      }}
    >
      {/* paper shadow layer */}
      <div
        style={{
          position: 'absolute',
          inset: '-4px -8px -6px -8px',
          background: 'rgba(0,0,0,0.35)',
          filter: 'blur(6px)',
          borderRadius: 6,
        }}
      />
      <div
        style={{
          position: 'relative',
          padding: '12px 34px 14px',
          background: `linear-gradient(178deg, ${C.paperWhite} 0%, ${C.paper} 62%, ${C.paperMid} 100%)`,
          clipPath:
            'polygon(0.6% 6%, 12% 1%, 34% 5%, 58% 0.5%, 82% 4%, 99.4% 1%, 98.6% 42%, 99.8% 78%, 97% 97%, 74% 99%, 51% 95.5%, 27% 99.6%, 4% 96%, 0.4% 62%, 1.6% 30%)',
          boxShadow: '0 2px 0 rgba(255,255,255,0.35) inset',
        }}
      >
        <div
          style={{
            fontFamily: F.sans,
            fontWeight: 700,
            fontSize: 43,
            lineHeight: 1.12,
            color: '#15100a',
            letterSpacing: '0.01em',
            whiteSpace: 'nowrap',
            textShadow: '0 1px 0 rgba(255,255,255,0.45)',
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
