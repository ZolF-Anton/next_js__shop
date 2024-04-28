import s from './page.module.css';

export default function AboutLayout({
    children,
    one,
    two,
}: {
    children: React.ReactNode;
    one: React.ReactNode;
    two: React.ReactNode;
}) {
    return (
        <div>
            <div style={{ border: '1px solid red' }}>
                {children}
                {one}
                {two}
            </div>
        </div>
    );
}
