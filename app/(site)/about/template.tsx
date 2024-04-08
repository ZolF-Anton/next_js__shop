import s from './page.module.css';

export default function AboutTemplate({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<div className={s.template}>{children}</div>
		</div>
	);
}
