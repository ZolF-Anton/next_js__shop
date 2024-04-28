import { TopLevelCategory, TopLevelCategoryLow, TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';

export interface TopPageComponentProps extends Record<string, unknown> {
    currentCategory: TopLevelCategory | TopLevelCategoryLow;
    page: TopPageModel;
    products: ProductModel[];
}
