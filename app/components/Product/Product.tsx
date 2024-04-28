/* eslint-disable react/display-name */
'use client';
import Image from 'next/image';
import { ForwardedRef, forwardRef, Fragment, useRef, useState } from 'react';
//import { motion } from 'framer-motion';
import cn from 'classnames';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { Button, Card, Divider, Rating, Review, ReviewForm, Tag } from '..';
import { priceRuIntl, declOfNum } from '@/helpers/helpers';

export const Product = forwardRef(
    (
        { product, className, ...props }: ProductProps,
        ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
        const reviewRef = useRef<HTMLDivElement>(null);
        const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

        const scrollToReview = () => {
            setIsReviewOpened(true);
            reviewRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            reviewRef.current?.focus();
        };

        const variants = {
            visible: {
                opacity: 1,
                height: 'auto',
            },
            hidden: {
                opacity: 0,
                height: 0,
            },
        };

        return (
            <div className={className} {...props} ref={ref}>
                <Card className={styles.product}>
                    <div className={styles.logo}>
                        <Image alt={product.title} height={70} src={product.image} width={70} />
                    </div>

                    <div className={styles.title}>{product.title}</div>

                    <div className={styles.price}>
                        <span>
                            <span className='visuallyHidden'>Цена </span>
                            {priceRuIntl(product.price)}
                        </span>
                        {product.oldPrice && (
                            <Tag className={styles.oldPrice} color='green'>
                                <span>
                                    <span className='visuallyHidden'>Скидка</span>
                                    {priceRuIntl(product.price - product.oldPrice)}
                                </span>
                            </Tag>
                        )}
                    </div>
                    <div className={styles.credit}>
                        <span>
                            <span className='visuallyHidden'>Кредит </span>
                            {priceRuIntl(product.credit)}/<span className={styles.month}>мес</span>
                        </span>
                    </div>
                    <div className={styles.rating}>
                        <span>
                            <span className='visuallyHidden'>
                                {'Рейтинг ' + (product.reviewAvg ?? product.initialRating)}
                            </span>
                            <Rating rating={product.reviewAvg ?? product.initialRating} />
                        </span>
                    </div>

                    <div className={styles.tags}>
                        {product.categories.map((c) => (
                            <Tag className={styles.category} color='ghost' key={c}>
                                {c}
                            </Tag>
                        ))}
                    </div>

                    <div aria-hidden='true' className={styles.priceTitle}>
                        цена
                    </div>
                    <div aria-hidden='true' className={styles.creditTitle}>
                        кредит
                    </div>
                    <div className={styles.rateTitle}>
                        <a href='#ref' onClick={scrollToReview}>
                            {product.reviewCount}{' '}
                            {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                        </a>
                    </div>

                    <Divider className={styles.hr} />

                    <div className={styles.description}>{product.description}</div>

                    <div className={styles.feature}>
                        {product.characteristics.map((c) => (
                            <div className={styles.characteristics} key={c.name}>
                                <span className={styles.characteristicsName}>{c.name}</span>
                                <span className={styles.characteristicsDots}></span>
                                <span className={styles.characteristicsValue}>{c.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.advBlock}>
                        {product.advantages && (
                            <div className={styles.advantages}>
                                <div className={styles.advTitle}>Преимущества</div>
                                <div>{product.advantages}</div>
                            </div>
                        )}
                        {product.disadvantages && (
                            <div className={styles.disadvantages}>
                                <div className={styles.advTitle}>Недостатки</div>
                                <div>{product.disadvantages}</div>
                            </div>
                        )}
                    </div>

                    <Divider className={cn(styles.hr, styles.hr2)} />

                    <div className={styles.actions}>
                        <Button appearence='primary'>Узнать подробнее</Button>
                        <Button
                            appearence='ghost'
                            aria-expanded={isReviewOpened}
                            arrow={isReviewOpened ? 'down' : 'right'}
                            className={styles.reviewButton}
                            onClick={() => setIsReviewOpened(!isReviewOpened)}
                        >
                            Читать отзывы
                        </Button>
                    </div>
                </Card>

                <div
                // animate={isReviewOpened ? 'visible' : 'hidden'}
                // initial='hidden'
                // variants={variants}
                >
                    <Card
                        className={cn(styles.reviews)}
                        color='blue'
                        ref={reviewRef}
                        tabIndex={isReviewOpened ? 0 : -1}
                    >
                        {product.reviews.map((r) => (
                            <Fragment key={r._id}>
                                {/* <Review review={r} /> */}
                                <Divider />
                            </Fragment>
                        ))}
                        {/* <ReviewForm isOpened={isReviewOpened} productId={product._id} /> */}
                    </Card>
                </div>
            </div>
        );
    }
);
