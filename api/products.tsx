import { API } from '@/app/api';
import { ProductModel } from '@/interfaces/product.interface';

export async function getProducts(products: string): Promise<ProductModel[] | null> {
    const res = await fetch(API.product.find, {
        next: { revalidate: 10 },
        method: 'POST',
        body: JSON.stringify({ category: products, limit: 10 }),
        headers: new Headers({ 'content-type': 'application/json' }),
    });
    if (!res.ok) return null;

    return res.json();
}
