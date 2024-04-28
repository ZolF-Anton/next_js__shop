import { API } from '@/app/api';
import { MenuItem } from '@/interfaces/menu.interfaces';

export async function getSearch(searchRequest: string): Promise<any> {
    const res = await fetch(API.topPage.find, {
        method: 'POST',
        body: JSON.stringify({ searchRequest }),
        headers: new Headers({ 'content-type': 'application/json' }),
        next: { revalidate: 10 },
    });
    // need to check status
    if (!res.ok) throw res;
    return res.json();
}
