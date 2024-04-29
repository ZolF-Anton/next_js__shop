'use client';
import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';

export const Textarea = forwardRef(
    (
        { error, className, ...props }: TextareaProps,
        ref: ForwardedRef<HTMLTextAreaElement>
    ): JSX.Element => {
        return (
            <div className={cn(styles.textareaWrapper, className)}>
                <textarea
                    {...props}
                    className={cn(styles.textarea, {
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
//Line that matters!!!
Textarea.displayName = 'TextareaRef';
