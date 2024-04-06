import { HtagProps } from './Htag.props';
import s from './Htag.module.css';
import cn from 'classnames';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={s.h1}>{children}</h1>;
		case 'h2':
			return <h2 className={s.h2}>{children}</h2>;
		case 'h3':
			return <h3 className={s.h3}>{children}</h3>;
		case 'h4':
			return <h4 className={s.h4}>{children}</h4>;

		default:
			return <h5 className={s.h_error}>Wrong tag for Htag :{tag}</h5>;
	}
};
