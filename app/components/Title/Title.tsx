import { TitleProps } from './Title.props';
import styles from './Title.module.css';

export const Title = ({ tag: Tag, children }: TitleProps): JSX.Element => {
  return <Tag className={styles[Tag]}>{children}</Tag>;
};
