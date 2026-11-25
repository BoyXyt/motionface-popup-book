import React from 'react';
import {C, F} from '../lib/theme';

/**
 * "OMNI — AI VIDEO MODEL": the cardboard prompt machine that swallows a
 * prompt and spits it back out rejected.
 */
export const OmniBox: React.FC<{
  x: number;
  y: number;
  scale?: number;
  rot?: number;
  style?: React.CSSProperties;
}> = ({x, y, scale = 1, rot = 0, style}) => {
  const letters = 'OMNI'.split('');
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: 640,
        height: 480,
        transform: `scale(${scale}) rotate(${rot}deg)`,
        transformOrigin: '50% 100%',
        filter: 'drop-shadow(-14px 26px 26px rgba(0,0,0,0.55))',
        ...style,
      }}
    >
      <svg width={640} height={480} viewBox="0 0 640 480">
        <defs>
          <linearGradient id="omniFront" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e6dbc6" />
            <stop offset="52%" stopColor="#d6c9b1" />
            <stop offset="100%" stopColor="#b9aa90" />
          </linearGradient>
          <linearGradient id="omniTop" x1="0" y1="1" x2="0.4" y2="0">
            <stop offset="0%" stopColor="#e9dec9" />
            <stop offset="100%" stopColor="#f4ecdb" />
          </linearGradient>
          <linearGradient id="omniSide" x1="0" y1="0" x2="1" y2="0.6">
            <stop offset="0%" stopColor="#b6a88e" />
            <stop offset="100%" stopColor="#8f8168" />
          </linearGradient>
          <linearGradient id="slotGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#171310" />
            <stop offset="100%" stopColor="#3a3128" />
          </linearGradient>
          <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8b23a" />
            <stop offset="100%" stopColor="#a8761f" />
          </linearGradient>
        </defs>

        {/* top face */}
        <polygon points="60,74 556,74 636,10 140,10" fill="url(#omniTop)" />
        {/* right side face */}
        <polygon points="556,74 636,10 636,378 556,440" fill="url(#omniSide)" />
        {/* front face */}
        <polygon points="60,74 556,74 556,440 60,440" fill="url(#omniFront)" />

        {/* paper creases on the front */}
        <g stroke="#a89a80" strokeWidth={0.8} opacity={0.35} fill="none">
          <path d="M 60 300 L 556 300" />
          <path d="M 300 74 L 300 440" opacity={0.2} />
        </g>

        {/* prompt slot on top */}
        <polygon points="198,52 520,52 548,36 226,36" fill="url(#slotGrad)" />
        <polygon points="198,52 520,52 520,57 198,57" fill="#f4ecdb" opacity={0.35} />
        <text
          x={250}
          y={68}
          fontFamily={F.serif}
          fontSize={15}
          letterSpacing={6}
          fill="#4a4034"
          transform="skewX(-31) translate(80 0)"
        >
          PROMPT IN
        </text>

        {/* output slot */}
        <rect x={118} y={350} width={386} height={34} rx={4} fill="url(#slotGrad)" />
        <rect x={118} y={350} width={386} height={4} rx={2} fill="#eadfc9" opacity={0.6} />

        {/* brand */}
        <g fontFamily="Georgia, 'Times New Roman', serif" fill="#2a231b" fontWeight={700}>
          {letters.map((ch, i) => (
            <text
              key={ch}
              x={122 + i * 103}
              y={262 + (i % 2 === 0 ? 0 : 2)}
              fontSize={104}
              transform={`rotate(${(i - 1.5) * 0.8} ${122 + i * 103} 262)`}
            >
              {ch}
            </text>
          ))}
          <text
            x={180}
            y={318}
            fontSize={22}
            letterSpacing={9}
            fontWeight={400}
            fill="#3b3226"
            fontFamily={F.serif}
          >
            AI VIDEO MODEL
          </text>
        </g>

        {/* rivets */}
        {[
          [78, 92],
          [538, 92],
          [78, 422],
          [538, 422],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={3.6} fill="#8d8069" opacity={0.85} />
        ))}

        {/* side gauge */}
        <circle cx={598} cy={122} r={17} fill="#ded2ba" stroke="#a89a80" strokeWidth={2} />
        <path d="M 590 114 L 606 130" stroke="#b63a2f" strokeWidth={4} strokeLinecap="round" />
        <circle cx={598} cy={122} r={4} fill="#6b5d48" />

        {/* side crank */}
        <line x1={600} y1={186} x2={600} y2={268} stroke="#cb3f2c" strokeWidth={10} strokeLinecap="round" />
        <line x1={600} y1={264} x2={636} y2={246} stroke="url(#brass)" strokeWidth={10} strokeLinecap="round" />
        <circle cx={600} cy={186} r={7} fill="#cb3f2c" />
      </svg>
    </div>
  );
};

/** The little "film frame" prompt cards scattered all over the desk. */
export const FilmCard: React.FC<{
  x: number;
  y: number;
  w?: number;
  h?: number;
  rot?: number;
  text?: string;
  variant?: 'photo' | 'blank' | 'sketch';
  opacity?: number;
  scale?: number;
  z?: number;
}> = ({x, y, w = 230, h = 150, rot = 0, text, variant = 'photo', opacity = 1, scale = 1, z = 0}) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: w,
      height: h,
      transform: `rotate(${rot}deg) scale(${scale})`,
      transformOrigin: '50% 50%',
      background: `linear-gradient(172deg, #f6ecd8 0%, #e8d6b6 100%)`,
      boxShadow: '0 10px 18px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.4) inset',
      opacity,
      zIndex: z,
      padding: 10,
      boxSizing: 'border-box',
    }}
  >
    {variant !== 'blank' && (
      <div
        style={{
          width: '100%',
          height: text ? '58%' : '100%',
          background:
            variant === 'photo'
              ? 'linear-gradient(165deg,#b9ae97 0%,#8f8571 45%,#6f6754 100%)'
              : 'transparent',
          border: variant === 'sketch' ? '1px solid #9a8a70' : 'none',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.35)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {variant === 'photo' && (
          <div
            style={{
              position: 'absolute',
              left: '18%',
              top: '26%',
              width: '52%',
              height: '46%',
              background: 'rgba(240,232,214,0.30)',
              filter: 'blur(2px)',
            }}
          />
        )}
      </div>
    )}
    {text && (
      <div
        style={{
          marginTop: 8,
          fontFamily: F.kai,
          fontSize: 20,
          color: '#3b3126',
          lineHeight: 1.15,
        }}
      >
        {text}
      </div>
    )}
  </div>
);

/** Red "rejected" stamp used on the prompt card. */
export const RejectStamp: React.FC<{size?: number; opacity?: number}> = ({
  size = 64,
  opacity = 0.92,
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" opacity={opacity}>
    <circle cx="32" cy="32" r="24" fill="none" stroke={C.red} strokeWidth="5" />
    <line x1="17" y1="17" x2="47" y2="47" stroke={C.red} strokeWidth="5" strokeLinecap="round" />
  </svg>
);
