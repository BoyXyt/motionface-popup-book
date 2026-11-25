import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {camStyle, cameraAt, type CamKey} from '../lib/anim';
import {C} from '../lib/theme';

/** Warm wooden desk under a single soft lamp, matching the reference. */
export const Desk: React.FC<{light?: number}> = ({light = 1}) => (
  <AbsoluteFill
    style={{
      background: `radial-gradient(125% 120% at 54% 18%, ${C.woodLight} 0%, ${C.wood} 34%, ${C.woodDark} 66%, ${C.woodDeep} 100%)`,
    }}
  >
    {/* long grain streaks */}
    <AbsoluteFill
      style={{
        opacity: 0.55,
        backgroundImage: `repeating-linear-gradient(92.5deg,
          rgba(0,0,0,0.20) 0px, rgba(0,0,0,0.20) 1px,
          rgba(255,214,160,0.025) 1px, rgba(255,214,160,0.025) 9px,
          rgba(0,0,0,0.10) 9px, rgba(0,0,0,0.10) 10px,
          rgba(0,0,0,0) 10px, rgba(0,0,0,0) 31px)`,
      }}
    />
    {/* fine fibre */}
    <AbsoluteFill
      style={{
        opacity: 0.35,
        backgroundImage: `repeating-linear-gradient(89deg,
          rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 5px)`,
      }}
    />
    {/* lamp pool */}
    <AbsoluteFill
      style={{
        background: `radial-gradient(46% 40% at 54% 16%, rgba(255,196,120,${0.20 * light}) 0%, rgba(255,170,90,0) 62%)`,
      }}
    />
    {/* dark corners */}
    <AbsoluteFill
      style={{
        background: `radial-gradient(120% 105% at 48% 36%, rgba(0,0,0,0) 26%, rgba(0,0,0,0.42) 74%, rgba(6,3,1,0.86) 100%)`,
      }}
    />
  </AbsoluteFill>
);

/** Camera wrapper: one scene diorama is authored at 1920x1080, the camera
 * dollies/pans across it exactly like the reference's stop-motion rig. */
export const World: React.FC<{
  frame: number;
  keys: CamKey[];
  children: React.ReactNode;
  origin?: string;
}> = ({frame, keys, children, origin = '50% 50%'}) => {
  const c = cameraAt(frame, keys);
  return (
    <AbsoluteFill style={{overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          ...camStyle(c),
          transformOrigin: origin,
          willChange: 'transform',
        }}
      >
        {children}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const useFrame = useCurrentFrame;
