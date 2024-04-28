import { getPage } from '@/api/page';
import s from './page.module.css';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getMenu } from '@/api/menu';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { firstLevelMenu } from '@/helpers/helpers';

type MetaProps = {
    params: { type: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
    { params, searchParams }: MetaProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    let arr = ['Next js', 'generateMetadata', 'SSR', 'ZolF', params.type];
    let title = `Generated Next JS ${params.type} page`;
    return {
        title,
        description: 'Generated Meta Data for ' + params.type,
        keywords: arr,
    };
}

// export async function generateStaticParams() {
//     //const firstCategory = TopLevelCategory.Courses;

//     //const menu = await getMenu(firstCategory);
//     return [{ type: 'courses' }, { type: 'services' }, { type: 'books' }, { type: 'products' }];

//     return firstLevelMenu.flatMap((item) => item.route).map((category) => ({ type: category }));
// }

export default async function PageCoursesMain({
    params,
}: {
    params: { type: string };
}): Promise<React.JSX.Element> {
    const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);

    if (!firstCategoryItem) notFound();

    console.log('**PageCoursesMain**', params);
    console.log(
        '**firstCategoryItem**',
        firstCategoryItem.id,
        firstCategoryItem.route,
        firstCategoryItem.name
    );
    return (
        <>
            <div className={s.courses_main}>
                <div className={s.courses_deep}>{params.type} MAIN PAGE </div>
            </div>
        </>
    );
}
