import { MotionProps } from 'framer-motion';
import { ButtonHTMLAttributes, DetailedHTMLProps, LegacyRef, ReactNode } from 'react';

export interface ButtonProps
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    appearence: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
    ref?: LegacyRef<HTMLButtonElement> | undefined;
}
