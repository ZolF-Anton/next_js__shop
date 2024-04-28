import { API } from '@/app/api';
import { TopPageModel } from '@/interfaces/page.interface';

export async function getPage(alias: string): Promise<TopPageModel | null> {
    //throw new Error('ошибка из getPage');
    await new Promise((res) =>
        setTimeout(() => {
            res('');
        }, 1500)
    );
    const res = await fetch(API.topPage.byAlias + alias, {
        next: { revalidate: 10 },
        method: 'GET',
        //body: JSON.stringify({ alias }),
        //headers: new Headers({ 'content-type': 'application/json' }),
    });
    if (!res.ok) return null;
    return res.json();
}
