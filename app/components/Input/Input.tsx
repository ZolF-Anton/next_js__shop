/* eslint-disable react/display-name */
'use client';
import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { InputProps } from './Input.props';
import styles from './Input.module.css';

export const Input = forwardRef(
    (
        { error, className, ...props }: InputProps,
        ref: ForwardedRef<HTMLInputElement>
    ): JSX.Element => {
        return (
            <div className={cn(styles.inputWrapper, className)}>
                <input
                    {...props}
                    className={cn(styles.input, {
                        [styles.error]: error,
                    })}
                    ref={ref}
                />
                {error && (
                    <span className={styles.errorMessage} role='alert'>
                        {error.message}
                    </span>
                )}
            </div>
        );
    }
);
