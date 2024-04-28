/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { KeyboardEvent, useEffect, useState, ForwardedRef, forwardRef, useRef } from 'react';
import cn from 'classnames';
import StarIcon from './star.svg';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';

export const Rating = forwardRef(
    (
        { isEditable = false, rating, setRating, error, tabIndex, ...props }: RatingProps,
        ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
        const [ratingArray, setRatingArray] = useState<JSX.Element[]>(() =>
            new Array(5).fill(<></>)
        );
        const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

        useEffect(() => {
            constructRating(rating);
        }, [rating, tabIndex]);

        const onclick = (i: number) => {
            if (!isEditable || !setRating) {
                return;
            }

            setRating(i);
        };

        const changeDisplay = (i: number) => {
            if (!isEditable) {
                return;
            }

            constructRating(i);
        };

        const computedFocus = (r: number, i: number): number => {
            if (!isEditable) {
                return -1;
            }

            if (!rating && i === 0) {
                return tabIndex ?? 0;
            }

            if (r === i + 1) {
                return tabIndex ?? 0;
            }

            return -1;
        };

        const constructRating = (currentRating: number) => {
            const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
                <span
                    aria-invalid={error ? true : false}
                    aria-label={isEditable ? 'Укажите рейтинг' : 'рейтинг ' + rating}
                    aria-valuemax={5}
                    aria-valuemin={1}
                    aria-valuenow={rating}
                    className={cn(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable,
                    })}
                    key={i}
                    // ref={(r) => ratingArrayRef.current?.push(r)}
                    role={isEditable ? 'slider' : ''}
                    tabIndex={computedFocus(rating, i)}
                    onClick={() => onclick(i + 1)}
                    onKeyDown={handleKey}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                >
                    <StarIcon />
                </span>
            ));

            setRatingArray(updatedArray);
        };

        const handleKey = (evt: KeyboardEvent) => {
            if (!isEditable || !setRating) {
                return;
            }

            if (evt.code === 'ArrowRight' || evt.code === 'ArrowUp') {
                if (!rating) {
                    setRating(1);
                } else {
                    evt.preventDefault();
                    setRating(rating < 5 ? rating + 1 : 5);
                }

                ratingArrayRef.current[rating]?.focus();
            }

            if (evt.code === 'ArrowLeft' || evt.code === 'ArrowDown') {
                evt.preventDefault();
                setRating(rating > 1 ? rating - 1 : 1);
                ratingArrayRef.current[rating - 2]?.focus();
            }
        };

        return (
            <div
                {...props}
                className={cn(styles.ratingWrapper, {
                    [styles.error]: error,
                })}
                ref={ref}
            >
                {ratingArray.map((r, i) => (
                    <span key={i}>{r}</span>
                ))}

                {error && (
                    <span className={styles.errorMessage} role='alert'>
                        {error.message}
                    </span>
                )}
            </div>
        );
    }
);
