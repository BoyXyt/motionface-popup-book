import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Desk, World} from '../components/Desk';
import {OpenSpread, NameCard, BubbleSticker} from '../components/BookPlanes';
import {C} from '../lib/theme';
import {pop} from '../lib/anim';

/**
 * 3.80 – 7.73s
 * Instead of one-shot prompting: a back-and-forth conversation with Gemini,
 * which yields a whole set of prompt constraints.
 */
export const SceneSpread: React.FC = () => {
  const f = useCurrentFrame();
  const camera = [
    {f: 0, s: 0.96, x: 0, y: 28},
    {f: 118, s: 1.05, x: 0, y: 8},
  ];
  const b1 = pop(f, 12, 16);
  const b2 = pop(f, 26, 16);
  const b3 = pop(f, 50, 16);
  const b4 = pop(f, 64, 16);
  return (
    <World frame={f} keys={camera}>
      <Desk />
      {/* spread shadow */}
      <div
        style={{
          position: 'absolute',
          left: 420,
          top: 700,
          width: 1100,
          height: 190,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.5)',
          filter: 'blur(30px)',
        }}
      />
      <OpenSpread x={422} y={414} rot={-0.4} />
      <NameCard x={118} y={648} text="我" accent={C.yellow} rot={-5} big />
      <NameCard x={1552} y={622} text="✦Gemini" accent={C.blue} rot={4.5} big={false} />

      <div style={{position: 'absolute', inset: 0, opacity: b1, transform: `translateY(${(1 - b1) * 30}px)`}}>
        <BubbleSticker x={146} y={376} color="#2f7d5c" icon="globe" scale={1.0} rot={-5} stick={118} />
      </div>
      <div style={{position: 'absolute', inset: 0, opacity: b2, transform: `translateY(${(1 - b2) * 30}px)`}}>
        <BubbleSticker x={1534} y={366} color="#d9833a" icon="hourglass" scale={1.0} rot={5} stick={128} />
      </div>
      <div style={{position: 'absolute', inset: 0, opacity: b3, transform: `translateY(${(1 - b3) * 26}px)`}}>
        <BubbleSticker x={158} y={196} color="#9c356b" icon="music" scale={0.72} rot={-9} stick={0} />
      </div>
      <div style={{position: 'absolute', inset: 0, opacity: b4, transform: `translateY(${(1 - b4) * 26}px)`}}>
        <BubbleSticker x={1522} y={190} color="#2f5f9e" icon="video" scale={0.72} rot={7} stick={0} />
      </div>
    </World>
  );
};
