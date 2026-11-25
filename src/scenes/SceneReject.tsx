import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Desk, World} from '../components/Desk';
import {OmniBox, FilmCard, RejectStamp} from '../components/OmniBox';
import {easeInOut, jitter, lerp, seg, wobble} from '../lib/anim';

/**
 * 0.00 – 3.80s
 * The OMNI box processes a prompt and rejects it. Camera pushes in.
 */
export const SceneReject: React.FC = () => {
  const f = useCurrentFrame();
  const camera = [
    {f: 0, s: 0.9, x: 78, y: -26},
    {f: 62, s: 1.0, x: 18, y: 2},
    {f: 114, s: 1.05, x: 0, y: 12},
  ];
  const insert = easeInOut(seg(f, 22, 56));
  const eject = easeInOut(seg(f, 74, 106));
  const busy = seg(f, 56, 74);
  return (
    <World frame={f} keys={camera}>
      <Desk />
      {/* desk shadow of the box */}
      <div
        style={{
          position: 'absolute',
          left: 800,
          top: 640,
          width: 620,
          height: 190,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.55)',
          filter: 'blur(26px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: 690,
          top: 246,
          width: 640,
          height: 480,
          transformOrigin: '50% 100%',
          transform: `rotate(${Math.sin(f / 3.1) * busy * 0.8 + wobble(f, 9, 0.35)}deg) translateY(${-busy * 2}px)`,
        }}
      >
        <OmniBox x={0} y={0} scale={1} />
      </div>

      {/* the handwritten prompt card, fed into the machine */}
      <div
        style={{
          position: 'absolute',
          left: lerp(330, 985, insert),
          top: lerp(604, 196, insert),
          transform: `rotate(${lerp(-7, 15, insert) + jitter(f, 0.4)}deg) scale(${lerp(1, 0.6, insert)})`,
          opacity: insert > 0.94 ? 0 : 1,
        }}
      >
        <FilmCard
          x={0}
          y={0}
          w={276}
          h={186}
          variant="blank"
          text="诗选，女孩，电影院"
          rot={0}
        />
        <div style={{position: 'absolute', left: 74, top: 20, fontFamily: 'KaiTi, serif', fontSize: 15, color: '#6b5b44'}}>
          提示词草稿
        </div>
      </div>

      {/* prompt card rejected, sliding out of the output slot */}
      {f > 72 && (
        <div
          style={{
            position: 'absolute',
            left: lerp(996, 566, eject),
            top: lerp(596, 742, eject),
            transform: `rotate(${lerp(-2, -13, eject)}deg) scale(${lerp(0.72, 1, eject)})`,
            opacity: Math.min(1, seg(f, 72, 80)),
            filter: 'drop-shadow(0 16px 18px rgba(0,0,0,0.5))',
          }}
        >
          <FilmCard x={0} y={0} w={300} h={196} variant="photo" rot={0} />
          <div style={{position: 'absolute', left: 0, top: 0, width: 300, height: 196}}>
            <div style={{position: 'absolute', left: 110, top: 46}}>
              <RejectStamp size={78} />
            </div>
          </div>
        </div>
      )}

      {/* a strip of film peeking from the slot during processing */}
      <div
        style={{
          position: 'absolute',
          left: 996,
          top: 590,
          width: 190,
          height: 12,
          background: 'linear-gradient(180deg,#f6ecd8,#dcc8a6)',
          transform: `translateY(${busy * 6 - 6}px) scaleX(${0.4 + insert * 0.6})`,
          opacity: insert > 0.2 ? 0.9 : 0,
        }}
      />
    </World>
  );
};
