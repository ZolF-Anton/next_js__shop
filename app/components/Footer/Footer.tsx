import cn from 'classnames';
//import { format } from 'date-fns';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(styles.footer, className)} {...props}>
			<div>
				OwlTop © 2017 - {new Date().getUTCFullYear()} Все права защищены
			</div>

			<a href="#" target="_blank">
				Пользовательское соглашение
			</a>
			<a href="#" target="_blank">
				Политика конфиденциальности
			</a>
		</footer>
	);
};
