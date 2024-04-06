import { ButtonProps } from './Button.props';
import s from './Button.module.css';
import cn from 'classnames';

export const Button = ({
	appearence,
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(s.button, className, {
				[s.primary]: appearence == 'primary',
				[s.ghost]: appearence == 'ghost',
			})}
			{...props}
		>
			{children}
		</button>
	);
};
