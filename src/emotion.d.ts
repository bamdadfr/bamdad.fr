// emotion.d.ts
import '@emotion/react';
import {type MyTheme} from 'src/app/styles/theme';

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}
}
