export interface ProductCharacteristic {
    value: string;
    name: string;
}

export interface ReviewModel {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
}

export interface ProductModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    description: string;
    characteristics: ProductCharacteristic[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    image: string;
    initialRating: 0 | 1 | 2 | 3 | 4 | 5;
    reviews: ReviewModel[];
    reviewCount: number;
    reviewAvg?: 0 | 1 | 2 | 3 | 4 | 5;
    advantages?: string;
    disadvantages?: string;
}
