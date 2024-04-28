import { firstLevelMenu } from '@/helpers/helpers';

// Generate segments for [type]

export async function generateStaticParams() {
    //const firstCategory = TopLevelCategory.Courses;

    //const menu = await getMenu(firstCategory);
    // return [{ type: 'courses' }, { type: 'services' }, { type: 'books' }, { type: 'products' }];
    // console.info('###########===layout___gSP props:::', props);
    return firstLevelMenu.flatMap((item) => item.route).map((category) => ({ type: category }));
}

export default function Layout({
    params,
    children,
}: {
    params: { type: string[] | string };
    children: React.ReactNode;
}) {
    return children;
}
