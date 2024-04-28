import { getPage } from '@/api/page';
import s from './page.module.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMenu } from '@/api/menu';
import { TopLevelCategory } from '@/interfaces/page.interface';

export const metadata: Metadata = {
    title: 'Search Page',
    description: 'Search Search Search Search',
    keywords: ['Next js', 'SSR', 'ZolF', 'Search'],
};

export async function generateStaticParams() {
    const firstCategory = TopLevelCategory.Courses;
    const menu = await getMenu(firstCategory);
    return [{ search: menu }];
}

export default async function PageSearch({ params }: { params: { search: string } }) {
    //const page = await getPage(params.alias);
    //if (!page) notFound();
    return (
        <>
            <div className={s.news}>Search PAGE c alias {params.search}</div>
            {/* <div>Search PAGE {page.title} ##</div> */}
        </>
    );
}
