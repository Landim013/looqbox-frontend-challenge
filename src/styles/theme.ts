export const theme = {
  colors: {
    primary: '#1677ff',
    background: '#03040cff',
    // background: '#FFF',
    text: '#ebe8e8ff',
    ash: '#4fc3f7',
    brock: '#a1887f',
    misty: '#dbbc3dff',
  },
  spacing: (factor: number) => `${factor * 8}px`,
} as const;

export type ThemeType = typeof theme;
