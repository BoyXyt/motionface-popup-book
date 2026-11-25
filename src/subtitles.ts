export type SubtitleLine = {t: number; text: string};

/**
 * Subtitle transcript and beat timing measured from the reference recording
 * (change points detected frame-by-frame, 30 fps).
 */
export const SUBTITLES: SubtitleLine[] = [
  {t: 0.0, text: '我通常不会给Omni模型直接写提示词'},
  {t: 3.4, text: '而是反复和 Gemini 对话'},
  {t: 6.4, text: '产生一套视频生成提示词'},
  {t: 8.8, text: '例如我会从不同的角度进行约束'},
  {t: 11.3, text: '例如世界观和故事背景层面'},
  {t: 14.0, text: '这条片子的时间跨度'},
  {t: 15.9, text: '每个镜头都有哪些特殊的时代背景'},
  {t: 18.9, text: '不同的镜头分别应用'},
  {t: 20.7, text: '什么样的画面风格'},
  {t: 22.1, text: '同时剪辑节奏和声音'},
  {t: 24.1, text: '设计也会一同定义'},
  {t: 25.8, text: '跨模态的约束往往能让AI'},
  {t: 28.5, text: '产出不同于平均水平的内容'},
  {t: 30.6, text: '在内容不再稀缺的今天'},
  {t: 33.1, text: '足够多的约束意味着独特性'},
  {t: 35.4, text: '也能让一条视频脱颖而出'},
];

export const FPS = 30;
export const DURATION_S = 38.2;
export const DURATION_FRAMES = Math.round(DURATION_S * FPS);

/** Scene boundaries in frames, matching the reference's cuts. */
export const CUT = {
  introEnd: 114, // 3.80s  -> Gemini book
  spreadEnd: 232, // 7.73s -> closed cover
  coverEnd: 264, // 8.80s -> lifting cover
  liftEnd: 291, // 9.70s -> open popup book
  popupEnd: 723, // 24.10s -> compare
  compareEnd: 993, // 33.10s -> scattered close
  end: DURATION_FRAMES,
};
