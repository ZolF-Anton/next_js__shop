import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode;
  tag: 'h1' | 'h2' | 'h3';
}
