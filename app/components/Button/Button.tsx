import { ButtonProps } from './Button.props';
import s from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({
	appearence,
	arrow = 'none',
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
			{arrow != 'none' && (
				<span
					className={cn(s.arrow, {
						[s.down]: arrow == 'down',
					})}
				>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};
