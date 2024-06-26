import cn from 'classnames';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import styles from './ButtonIcon.module.css';

export const ButtonIcon = ({
    appearence,
    icon,
    className,
    ...props
}: ButtonIconProps): JSX.Element => {
    const Icon = icons[icon];

    return (
        <button {...props} className={cn(styles.button, className, styles[appearence])}>
            <Icon />
        </button>
    );
};
