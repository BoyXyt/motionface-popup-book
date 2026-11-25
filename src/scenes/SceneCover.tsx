import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Desk, World} from '../components/Desk';
import {ClosedCover, NameCard} from '../components/BookPlanes';
import {C} from '../lib/theme';
import {jitter} from '../lib/anim';

/**
 * 7.73 – 8.80s
 * The spread has been bound into a book: gold blocking reads
 * "视频生成提示词" (a whole set of video-generation prompts).
 */
export const SceneCover: React.FC = () => {
  const f = useCurrentFrame();
  const camera = [
    {f: 0, s: 0.96, x: 0, y: 8},
    {f: 32, s: 0.99, x: 0, y: 0},
  ];
  return (
    <World frame={f} keys={camera}>
      <Desk />
      <div
        style={{
          position: 'absolute',
          left: 480,
          top: 770,
          width: 1000,
          height: 160,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.5)',
          filter: 'blur(26px)',
        }}
      />
      <div style={{position: 'absolute', inset: 0, transform: `rotate(${jitter(f, 0.12)}deg)`}}>
        <ClosedCover x={506} y={548} scale={0.99} rot={-0.5} />
      </div>
      <NameCard x={126} y={646} text="我" accent={C.yellow} rot={-4.5} big />
      <NameCard x={1580} y={636} text="✦Gemini" accent={C.blue} rot={4} big={false} />
    </World>
  );
};
