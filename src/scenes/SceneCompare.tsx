import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {Desk, World} from '../components/Desk';
import {PopupStage} from '../components/PopupStage';
import {OmniBox, FilmCard, RejectStamp} from '../components/OmniBox';
import {NotEqual, PriceTag} from '../components/NotEqual';
import {easeOut, jitter, rnd, seg} from '../lib/anim';

/** a small burst of loose prompt cards that pours out of the box */
const LOOSE = Array.from({length: 14}, (_, i) => ({
  x: 320 + rnd(i * 4.1 + 2) * 460,
  y: 560 + rnd(i * 7.7 + 3) * 280,
  rot: -50 + rnd(i * 2.9) * 100,
  w: 120 + rnd(i * 5.3) * 90,
  at: 186 + Math.floor(rnd(i * 3.1) * 54),
}));

/**
 * 24.10 – 33.10s
 * All five constraints get ticked, the camera pulls back to reveal the
 * "average" OMNI box, and the detailed diorama is explicitly not it (≠).
 * Loose prompt cards start to spill across the desk.
 */
export const SceneCompare: React.FC = () => {
  const f = useCurrentFrame();
  // close on the book, then a long pull-back into a wide two-object tableau
  const bookCam = [
    {f: 0, s: 1.22, x: 0, y: 36},
    {f: 63, s: 0.8, x: 600, y: -66},
    {f: 150, s: 0.78, x: 620, y: -56},
    {f: 210, s: 0.81, x: 600, y: -36, r: -1},
    {f: 270, s: 0.85, x: 560, y: -14, r: -2},
  ];
  const boxIn = easeOut(seg(f, 48, 76));
  const tagIn = easeOut(seg(f, 106, 124));
  const neqIn = easeOut(seg(f, 130, 150));
  return (
    <AbsoluteFill>
      <Desk />
      <World frame={f} keys={bookCam}>
        <PopupStage build={432 + f} checkAt={[438, 450, 462, 474, 486]} />
      </World>

      {/* the "average output" machine */}
      <div style={{position: 'absolute', inset: 0, opacity: boxIn, transform: `translateX(${(1 - boxIn) * -90}px)`}}>
        <div style={{position: 'absolute', left: 244, top: 276, transform: 'scale(0.64)', transformOrigin: '0% 0%'}}>
          <OmniBox x={0} y={0} scale={1} rot={-1} />
        </div>
        <div
          style={{
            position: 'absolute',
            left: 250,
            top: 616,
            width: 420,
            height: 120,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.48)',
            filter: 'blur(24px)',
          }}
        />
        {/* rejected prompt card on the desk */}
        <div
          style={{
            position: 'absolute',
            left: 236,
            top: 616,
            transform: `rotate(-11deg)`,
            filter: 'drop-shadow(0 14px 16px rgba(0,0,0,0.5))',
          }}
        >
          <FilmCard x={0} y={0} w={250} h={162} variant="photo" rot={0} />
          <div style={{position: 'absolute', left: 88, top: 34}}>
            <RejectStamp size={64} />
          </div>
        </div>
      </div>

      {tagIn > 0.01 && (
        <div style={{position: 'absolute', inset: 0, opacity: tagIn}}>
          <PriceTag x={318} y={512} text="平均水平" rot={-7} scale={1.0} />
        </div>
      )}
      {neqIn > 0.01 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: neqIn,
            transform: `translateY(${(1 - neqIn) * 30}px)`,
          }}
        >
          <NotEqual x={646} y={452} scale={0.98} rot={-4 + jitter(f, 0.3)} />
        </div>
      )}

      {/* cards spilling out */}
      {LOOSE.map((c, i) => {
        const p = seg(f, c.at, c.at + 26);
        if (p <= 0) return null;
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: c.x + (1 - p) * -60,
              top: c.y + (1 - p) * -80,
              opacity: Math.min(1, p * 1.5),
              transform: `rotate(${c.rot}deg)`,
            }}
          >
            <FilmCard x={0} y={0} w={c.w} h={c.w * 0.66} variant={i % 3 === 0 ? 'blank' : 'photo'} rot={0} />
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
