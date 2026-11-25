import React from 'react';
import {Composition} from 'remotion';
import {Video} from './Video';
import {DURATION_FRAMES, FPS} from './subtitles';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="PopupBook"
      component={Video}
      durationInFrames={DURATION_FRAMES}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};
