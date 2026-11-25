import React from 'react';
import {C} from '../lib/theme';
import {pop, seg, easeOut, wobble} from '../lib/anim';
import {Backdrop} from './Lighthouse';
import {Accordion} from './Accordion';
import {TabsRow, StyleRibbon} from './Tabs';
import {Character, Train, Rocket, Computer, Gramophone, Signpost, Flag, PaperBow} from './PaperProps';

/**
 * The pop-up book diorama, authored at 1920x1080.
 * `build` is the frame counter relative to the moment the book pops open
 * (reference t = 9.70s). Scene 6 reuses the fully built stage.
 */
export const PopupStage: React.FC<{build: number; checkAt?: number[]}> = ({build, checkAt}) => {
  const panelRise = build - 52;
  const charP = pop(build, 104, 16);
  const pageP = easeOut(seg(build, 0, 18));
  return (
    <div style={{position: 'absolute', inset: 0}}>
      {/* desk shadow under the whole book */}
      <div
        style={{
          position: 'absolute',
          left: 170,
          top: 520,
          width: 1580,
          height: 430,
          borderRadius: '46% 46% 40% 40%',
          background: 'rgba(0,0,0,0.55)',
          filter: 'blur(36px)',
          opacity: 0.9,
        }}
      />

      {/* upright back cover + layered scene */}
      <div
        style={{
          position: 'absolute',
          left: 344,
          top: 44,
          width: 1244,
          height: 504,
          background: C.navy,
          boxShadow: '0 26px 34px rgba(0,0,0,0.5)',
          borderRadius: 3,
          transform: 'rotate(-0.35deg)',
        }}
      >
        <div style={{position: 'absolute', inset: 8, overflow: 'hidden', background: C.skyTop}}>
          <div style={{position: 'absolute', left: 0, top: 0}}>
            <Backdrop rise={panelRise} />
          </div>
          {/* inner light falloff of the diorama */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(100deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 22%, rgba(0,0,0,0) 76%, rgba(0,0,0,0.32) 100%)',
            }}
          />
        </div>
      </div>

      {/* base page (trapezoid) */}
      <div style={{position: 'absolute', left: 0, top: 0, opacity: pageP}}>
        <div
          style={{
            position: 'absolute',
            left: 206,
            top: 528,
            width: 1508,
            height: 366,
            background: C.navy,
            clipPath: 'polygon(8.8% 0%, 91.2% 0%, 100% 100%, 0% 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 226,
            top: 542,
            width: 1468,
            height: 340,
            background: `radial-gradient(120% 130% at 32% 4%, rgba(255,250,236,0.5) 0%, rgba(255,255,255,0) 52%),
              linear-gradient(96deg, rgba(120,84,44,0.32) 0%, rgba(255,250,235,0) 16%, rgba(255,250,235,0.25) 58%, rgba(120,84,44,0.36) 100%),
              linear-gradient(178deg,#f3e5c7 0%,#ecd8b3 58%,#dcc198 100%)`,
            clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)',
            boxShadow: 'inset 0 30px 44px rgba(140,104,58,0.32)',
          }}
        />
        {/* cast shadow of the standing backdrop onto the page */}
        <div
          style={{
            position: 'absolute',
            left: 320,
            top: 542,
            width: 1290,
            height: 74,
            background: 'linear-gradient(180deg, rgba(90,62,30,0.42), rgba(90,62,30,0))',
          }}
        />
        {/* page front lip */}
        <div
          style={{
            position: 'absolute',
            left: 226,
            top: 866,
            width: 1468,
            height: 18,
            background: 'linear-gradient(180deg,#f7eedb,#cdb28a)',
            clipPath: 'polygon(0% 0%, 100% 0%, 99.4% 100%, 0.6% 100%)',
            boxShadow: '0 10px 18px rgba(0,0,0,0.45)',
          }}
        />
      </div>

      {/* accordion timeline */}
      <Accordion frame={build} x={406} y={462} appearAt={138} spreadAt={186} artAt={252} />

      {/* style ribbons above the accordion */}
      {build > 282 &&
        ['剪影', '网点', '像素', '霓虹'].map((t, i) => {
          const p = pop(build, 284 + i * 5, 12);
          return (
            <div key={t} style={{position: 'absolute', inset: 0, opacity: p}}>
              <StyleRibbon x={482 + i * 286} y={402} text={t} scale={0.92} />
            </div>
          );
        })}

      {/* paper-doll character */}
      <div style={{position: 'absolute', left: 0, top: 0, opacity: charP <= 0 ? 0 : 1}}>
        <div
          style={{
            position: 'absolute',
            width: 90,
            height: 168,
            transformOrigin: '50% 100%',
            transform: `translate(${1436}px, ${700 - 168}px) scaleY(${Math.max(0.02, charP)}) translateY(${(1 - charP) * 40}px)`,
            opacity: Math.min(1, charP * 1.4),
          }}
        >
          <Character x={0} y={0} scale={1} />
        </div>
      </div>

      {/* props */}
      <PropIn show={pop(build, 226, 14)}>
        <Train x={416} y={560} scale={0.9} rot={wobble(build, 1, 0.5)} />
      </PropIn>
      <PropIn show={pop(build, 232, 14)}>
        <Rocket x={798} y={516} scale={0.86} rot={wobble(build, 2, 0.8)} />
      </PropIn>
      <PropIn show={pop(build, 266, 14)}>
        <Computer x={1074} y={566} scale={0.92} rot={wobble(build, 3, 0.5)} />
      </PropIn>
      <PropIn show={pop(build, 274, 14)}>
        <Signpost x={1312} y={472} scale={0.86} rot={wobble(build, 4, 0.6)} />
      </PropIn>
      <PropIn show={pop(build, 296, 14)}>
        <Gramophone x={282} y={528} scale={0.86} rot={wobble(build, 5, 0.6)} />
      </PropIn>
      <PropIn show={pop(build, 306, 14)}>
        <PaperBow x={402} y={654} scale={0.8} rot={-4} />
      </PropIn>
      <PropIn show={pop(build, 314, 14)}>
        <Flag x={600} y={296} scale={1} />
      </PropIn>

      {/* constraint tabs */}
      <TabsRow frame={build} y={778} baseX={196} appearAt={0} checkAt={checkAt} scale={1} />
    </div>
  );
};

const PropIn: React.FC<{show: number; children: React.ReactNode}> = ({show, children}) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      opacity: show <= 0 ? 0 : 1,
      transform: `translateY(${(1 - show) * 46}px)`,
      transformOrigin: '50% 100%',
    }}
  >
    {children}
  </div>
);
