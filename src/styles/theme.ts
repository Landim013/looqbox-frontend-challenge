export const theme = {
  colors: {
    primary: '#1677ff',
    background: '#f5f5f5',
    text: '#333',
  },
  spacing: (factor: number) => `${factor * 8}px`,
} as const;

export type ThemeType = typeof theme;
