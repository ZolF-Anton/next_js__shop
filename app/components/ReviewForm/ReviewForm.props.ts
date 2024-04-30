import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';
import { UseFormReset } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

export interface ReviewFormProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    productId: string;
    isOpened: boolean;
}
export interface ReviewFormPanelsProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    error: string;
    setError: Dispatch<SetStateAction<string>>;
}
