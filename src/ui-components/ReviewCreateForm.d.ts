/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReviewCreateFormInputValues = {
    userId?: string;
    title?: string;
    date?: string;
    reviewText?: string;
};
export declare type ReviewCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    reviewText?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewCreateFormOverridesProps = {
    ReviewCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    reviewText?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReviewCreateFormProps = React.PropsWithChildren<{
    overrides?: ReviewCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReviewCreateFormInputValues) => ReviewCreateFormInputValues;
    onSuccess?: (fields: ReviewCreateFormInputValues) => void;
    onError?: (fields: ReviewCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReviewCreateFormInputValues) => ReviewCreateFormInputValues;
    onValidate?: ReviewCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReviewCreateForm(props: ReviewCreateFormProps): React.ReactElement;
