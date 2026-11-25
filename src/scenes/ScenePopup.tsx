import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Desk, World} from '../components/Desk';
import {PopupStage} from '../components/PopupStage';

/**
 * 9.70 – 24.10s
 * The book opens and the diorama assembles itself: night lighthouse scene,
 * a four-panel timeline of eras, the film-style props and the five constraint
 * tabs. The camera slowly pushes into the book.
 */
export const ScenePopup: React.FC = () => {
  const f = useCurrentFrame();
  const camera = [
    {f: 0, s: 0.99, x: 0, y: 18},
    {f: 60, s: 0.99, x: 0, y: 14},
    {f: 150, s: 1.01, x: 0, y: 8},
    {f: 240, s: 1.06, x: 0, y: 14},
    {f: 330, s: 1.13, x: 0, y: 24},
    {f: 432, s: 1.22, x: 0, y: 36},
  ];
  return (
    <World frame={f} keys={camera}>
      <Desk />
      <PopupStage build={f} />
    </World>
  );
};
