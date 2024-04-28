//'use client';
import { FunctionComponent, KeyboardEvent, useRef, useState } from 'react';
import cn from 'classnames';
import { LayoutProps } from './LayoutHeart.props';
// import { AppContextProvider, IAppContext } from '../contex/app.context';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { Footer } from '../Footer/Footer';
import styles from './LayoutHeart.module.css';
// import { Up } from '../components';

const LayoutHeart = ({ children }: LayoutProps): React.JSX.Element => {
    //const bodyRef = useRef<HTMLDivElement>(null);
    //const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);

    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code === 'Space' || key.code === ' Enter') {
            key.preventDefault();
            //bodyRef.current?.focus();
        }

        //setIsSkipLinkDisplayed(false);
    };

    return (
        <>
            {/* <AppContextProvider firstCategory={props.firstCategory} menu={props.menu}> */}
            <div className={styles.wrapper}>
                <a
                    className={cn(styles.skipLink, {
                        [styles.displayed]: true,
                        //[styles.displayed]: isSkipLinkDisplayed,
                    })}
                    tabIndex={0}
                    //onFocus={() => setIsSkipLinkDisplayed(true)}
                    //onKeyDown={skipContentAction}
                >
                    К содержанию
                </a>

                <Header className={styles.header} />
                <Sidebar className={styles.sidebar} />
                <main
                    className={styles.body}
                    //ref={bodyRef}
                    role='main'
                    tabIndex={0}
                >
                    {children}
                </main>
                <Footer className={styles.footer} />
                {/* <Up /> */}
            </div>
            {/* </AppContextProvider> */}
        </>
    );
};

// export const withLayout = <T extends Record<string, unknown> & IAppContext>(
// 	Component: FunctionComponent<T>
// ) => {
// 	return function withLayoutComponent(props: T): JSX.Element {
// 		return (
// 			<AppContextProvider firstCategory={props.firstCategory} menu={props.menu}>
// 				<Layout>
// 					<Component {...props} />
// 				</Layout>
// 			</AppContextProvider>
// 		);
// 	};
// };
export default LayoutHeart;
