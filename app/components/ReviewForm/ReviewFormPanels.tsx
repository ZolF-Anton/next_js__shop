'use client';
import cn from 'classnames';
import { ReviewFormPanelsProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import { useEffect, useState } from 'react';

export const ReviewFormPanels = ({ error, setError }: ReviewFormPanelsProps): JSX.Element => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsSuccess((prev) => prev && false);
        }, 7500);
    }, [isSuccess]);

    return (
        <>
            {isSuccess && (
                <div className={cn(styles.panel, styles.success)} role='alert'>
                    <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                    <div className={styles.successDescription}>
                        Спасибо, ваш отзыв будет опубликован после проверки.
                    </div>

                    <button
                        aria-label='Закрыть оповещение'
                        className={styles.close}
                        onClick={() => setIsSuccess(false)}
                    >
                        <CloseIcon style={{ cursor: 'pointer' }} />
                    </button>
                </div>
            )}

            {error && (
                <div className={cn(styles.panel, styles.error)} role='alert'>
                    Что-то пошло не так, обновите страницу
                    <button
                        aria-label='Закрыть оповещение'
                        className={styles.close}
                        onClick={() => setError('')}
                    >
                        <CloseIcon style={{ cursor: 'pointer' }} />
                    </button>
                </div>
            )}
        </>
    );
};
