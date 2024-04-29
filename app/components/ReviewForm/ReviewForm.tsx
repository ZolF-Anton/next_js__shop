'use client';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';

import { Button, Input, Rating, Textarea } from '..';
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';

import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import { API } from '@/app/api';
import { useEffect, useState } from 'react';
import { ReviewFormPanels } from './ReviewFormPanels';

type RatingType = 0 | 2 | 1 | 3 | 4 | 5;

export const ReviewForm = ({
    productId,
    isOpened,
    className,
    ...props
}: ReviewFormProps): JSX.Element => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset,
        clearErrors,
    } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setTimeout(() => {
            setIsSuccess((prev) => prev && false);
        }, 7500);
    }, [isSuccess]);

    const onSubmit = async (formData: IReviewForm) => {
        try {
            await fetch(API.review.createDemo, {
                // next: { revalidate: 10 },
                method: 'POST',
                body: JSON.stringify({
                    ...formData,
                    productId,
                }),
                headers: new Headers({ 'content-type': 'application/json' }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    setError('Что-то пошло не так');
                    throw new Error('Something went wrong');
                })
                .then((responseJson: IReviewSentResponse) => {
                    // Do something with the response
                    setIsSuccess(true);
                    reset();
                    console.log('responseJson:::', responseJson);
                })
                .catch((error) => {
                    setError('Что-то пошло не так');
                    console.log('fetch error:::', error);
                });
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div {...props} className={cn(styles.reviewForm, className)}>
                <Input
                    aria-invalid={errors.name ? true : false}
                    error={errors.name}
                    placeholder='Имя'
                    tabIndex={isOpened ? 0 : -1}
                    {...register('name', { required: { value: true, message: 'Заполните имя' } })}
                />
                <Input
                    aria-invalid={errors.title ? true : false}
                    className={styles.title}
                    error={errors.title}
                    placeholder='Заголовок отзыва'
                    tabIndex={isOpened ? 0 : -1}
                    {...register('title', {
                        required: { value: true, message: 'Заполните заголовок' },
                    })}
                />

                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name='rating'
                        render={({ field }) => (
                            <Rating
                                isEditable
                                error={errors.rating}
                                rating={field.value as RatingType}
                                ref={field.ref}
                                setRating={field.onChange}
                                tabIndex={isOpened ? 0 : -1}
                            />
                        )}
                        rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
                    />
                </div>

                <Textarea
                    aria-invalid={errors.description ? true : false}
                    aria-label='Текст отзыва'
                    className={styles.description}
                    placeholder='Текст отзыва'
                    tabIndex={isOpened ? 0 : -1}
                    {...register('description', {
                        required: { value: true, message: 'Заполните описание' },
                    })}
                    error={errors.description}
                />

                <div className={styles.submit}>
                    <Button
                        appearence='primary'
                        tabIndex={isOpened ? 0 : -1}
                        onClick={() => clearErrors()}
                    >
                        Отправить
                    </Button>
                    <span className={styles.info}>
                        * Перед публикацией отзыв пройдет предварительную модерацию и проверку
                    </span>
                </div>
            </div>
            <ReviewFormPanels error={error} setError={setError} />
        </form>
    );
};
