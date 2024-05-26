import { getPage } from '@/api/page';
import s from './page.module.css';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getMenu } from '@/api/menu';
import { TopLevelCategory, TopLevelCategoryLow } from '@/interfaces/page.interface';
import { firstLevelMenu } from '@/helpers/helpers';
import { TopPageComponent } from '@/app/components/TopPageComponent/TopPageComponent';
import { getProducts } from '@/api/products';

// export const metadata: Metadata = {
//     title: 'Products Page',
//     description: 'Products Products Products Products',
//     keywords: ['Next js', 'SSR', 'ZolF', 'Products'],
// };

// type Unarray<T> = T extends Array<infer U> ? U : T;

// type NestedPick<
//     T,
//     K extends keyof T | unknown,
//     KN extends keyof T,
//     KNK extends keyof Unarray<T[KN]>
// > = Pick<T, K> & {
//     [Key in KN]: T[KN] extends Array<infer U> ? Pick<U, KNK>[] : Pick<T[KN], KNK>;
// };

type MetaProps = {
    params: { alias: string; type: 'courses' | 'services' | 'books' | 'products' };
    searchParams: { [key: string]: string | string[] | undefined };
};
type GenStaticParmsProp = Pick<MetaProps, 'params'>;

export async function generateMetadata(
    { params, searchParams }: MetaProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    let arr = ['Next js', 'GenerateMetadata', 'SSR', 'ZolF'];
    let title = params.alias;
    let description = `${params.type}  for ${params.alias}`;

    return {
        title,
        description,
        keywords: arr,
    };
}

export async function generateStaticParams({ params }: GenStaticParmsProp) {
    console.log('generateStaticParams=====>>>>>>', params);
    const currentCategory = TopLevelCategoryLow[`${params.type}`];
    // const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
    const menu = await getMenu(currentCategory);

    return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })));
}

export default async function TopPage({ params }: GenStaticParmsProp) {
    const pageUp = firstLevelMenu.some((cat) => cat.route == params?.type);
    const page = await getPage(params.alias);
    const products = page && (await getProducts(page.category));

    if (!page || !pageUp) notFound();
    return (
        <>
            <TopPageComponent
                currentCategory={TopLevelCategoryLow[`${params.type}`]}
                page={page}
                products={products ? products : []}
            />

            <div className={s.courses}>Courses PAGE c alias {params.alias}</div>
            <div>Courses PAGE {page.title} ##</div>
        </>
    );
}
