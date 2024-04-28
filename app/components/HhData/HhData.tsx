'use client';
import { Card } from '..';
import { HhDataProps } from './HhData.props';
import styles from './HhData.module.css';
import RateIcon from './rate.svg';
import { priceRuIntl } from '@/helpers/helpers';

export const HhData = ({
    count,
    juniorSalary,
    middleSalary,
    seniorSalary,
}: HhDataProps): JSX.Element => {
    return (
        <div className={styles.hh}>
            <Card className={styles.count}>
                <div className={styles.title}>Всего вакансий</div>
                <div className={styles.countValue}>{count}</div>
            </Card>

            <Card className={styles.salary}>
                <div>
                    <div className={styles.title}>Начальный</div>
                    <div className={styles.salaryValue}>{priceRuIntl(juniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>

                <div>
                    <div className={styles.title}>Средний</div>
                    <div className={styles.salaryValue}>{priceRuIntl(middleSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                        <RateIcon />
                    </div>
                </div>

                <div>
                    <div className={styles.title}>Профессионал</div>
                    <div className={styles.salaryValue}>{priceRuIntl(seniorSalary)}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                        <RateIcon className={styles.filled} />
                    </div>
                </div>
            </Card>
        </div>
    );
};
