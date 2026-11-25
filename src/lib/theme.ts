/**
 * Design tokens sampled from the reference recording:
 * a warm, dimly lit paper-craft pop-up book diorama on a wooden desk.
 */

export const C = {
  // desk / light
  woodDeep: '#140b02',
  woodDark: '#2a1708',
  wood: '#412409',
  woodLight: '#6b4118',
  woodSheen: '#8a5622',

  // paper
  paper: '#f2e2c4',
  paperMid: '#e6cfa9',
  paperShade: '#cfb18a',
  paperEdge: '#b3946c',
  paperWhite: '#f8f3e7',
  pageCream: '#efdbb8',
  pageShadow: '#c8a878',

  // ink
  ink: '#211a12',
  inkSoft: '#443729',
  inkBlue: '#1d3a55',

  // book / cover
  navy: '#122b39',
  navyLight: '#1d4152',
  navyDark: '#0a1d27',
  navyEdge: '#224b5d',

  // accents
  gold: '#e3b968',
  goldDeep: '#b98a35',
  red: '#b63a2f',
  orange: '#d9833a',
  yellow: '#e8b23a',
  green: '#2f7d5c',
  teal: '#1f6f66',
  blue: '#2f5f9e',
  purple: '#6b3f86',
  magenta: '#9c356b',
  pink: '#d98b7a',

  // night scene
  skyTop: '#0e3a37',
  skyMid: '#1d5c55',
  skyGlow: '#c9a05a',
  sea: '#14494a',
  seaDeep: '#0f3b3f',
  moon: '#e9dfb3',
  mountain: '#2b5a51',
  mountainFar: '#38706a',
  cliff: '#241a11',
  sand: '#c8a271',
  grass: '#3f6b43',
} as const;

export const F = {
  sans: '"Microsoft YaHei", "微软雅黑", "PingFang SC", "Noto Sans SC", sans-serif',
  kai: '"KaiTi", "楷体", "STKaiti", serif',
  serif: 'Georgia, "Times New Roman", serif',
  xingkai: '"STXingkai", "华文行楷", "KaiTi", serif',
} as const;

/** Warm key light, from upper-left, used for all gradients. */
export const LIGHT = 'rgba(255, 196, 120,';

export const shadow = (blur = 22, y = 16, alpha = 0.55) =>
  `0 ${y}px ${blur}px rgba(0,0,0,${alpha})`;

export const paperGradient = (base = C.paper) =>
  `linear-gradient(168deg, rgba(255,250,236,0.55) 0%, rgba(255,255,255,0) 38%),` +
  `radial-gradient(120% 130% at 18% 8%, rgba(255,244,220,0.35) 0%, rgba(0,0,0,0.10) 78%),` +
  `linear-gradient(180deg, ${base} 0%, ${base} 100%)`;
