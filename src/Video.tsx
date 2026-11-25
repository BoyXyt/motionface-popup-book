import React from 'react';
import {AbsoluteFill, Sequence, useCurrentFrame} from 'remotion';
import {SceneReject} from './scenes/SceneReject';
import {SceneSpread} from './scenes/SceneSpread';
import {SceneCover} from './scenes/SceneCover';
import {SceneLift} from './scenes/SceneLift';
import {ScenePopup} from './scenes/ScenePopup';
import {SceneCompare} from './scenes/SceneCompare';
import {SceneOutro} from './scenes/SceneOutro';
import {Subtitle} from './components/Subtitle';
import {Grain, Vignette, Flicker} from './lib/paper';
import {CUT, SUBTITLES, DURATION_FRAMES, FPS} from './subtitles';
import {interpolate} from 'remotion';

/**
 * A Remotion recreation of the "立体书：约束越多，作品越能脱颖而出"
 * paper-craft motion piece (38.2 s, 1920x1080, 30 fps).
 */
export const Video: React.FC = () => {
  const f = useCurrentFrame();
  const fade = interpolate(f, [DURATION_FRAMES - 7, DURATION_FRAMES - 1], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <AbsoluteFill style={{background: '#080400'}}>
      <Sequence from={0} durationInFrames={CUT.introEnd - 0} name="1 reject">
        <SceneReject />
      </Sequence>
      <Sequence from={CUT.introEnd} durationInFrames={CUT.spreadEnd - CUT.introEnd} name="2 gemini spread">
        <SceneSpread />
      </Sequence>
      <Sequence from={CUT.spreadEnd} durationInFrames={CUT.coverEnd - CUT.spreadEnd} name="3 prompt book cover">
        <SceneCover />
      </Sequence>
      <Sequence from={CUT.coverEnd} durationInFrames={CUT.liftEnd - CUT.coverEnd} name="4 cover lift">
        <SceneLift />
      </Sequence>
      <Sequence from={CUT.liftEnd} durationInFrames={CUT.popupEnd - CUT.liftEnd} name="5 popup diorama">
        <ScenePopup />
      </Sequence>
      <Sequence from={CUT.popupEnd} durationInFrames={CUT.compareEnd - CUT.popupEnd} name="6 constraints">
        <SceneCompare />
      </Sequence>
      <Sequence from={CUT.compareEnd} durationInFrames={CUT.end - CUT.compareEnd} name="7 scatter">
        <SceneOutro />
      </Sequence>

      {SUBTITLES.map((s, i) => {
        const from = Math.round(s.t * FPS);
        const to =
          i + 1 < SUBTITLES.length ? Math.round(SUBTITLES[i + 1].t * FPS) : DURATION_FRAMES;
        return (
          <Sequence key={s.text} from={from} durationInFrames={to - from} name={`sub ${i + 1}`}>
            <Subtitle text={s.text} startFrame={0} seed={i + 1} />
          </Sequence>
        );
      })}

      <Vignette strength={0.68} />
      <Grain opacity={0.085} />
      <Flicker />
      <AbsoluteFill style={{background: '#000', opacity: fade}} />
    </AbsoluteFill>
  );
};
