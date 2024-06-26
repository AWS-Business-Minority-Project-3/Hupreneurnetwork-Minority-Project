/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
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
export declare type BusinessOwnerProfileCreateFormInputValues = {};
export declare type BusinessOwnerProfileCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessOwnerProfileCreateFormOverridesProps = {
    BusinessOwnerProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type BusinessOwnerProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: BusinessOwnerProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BusinessOwnerProfileCreateFormInputValues) => BusinessOwnerProfileCreateFormInputValues;
    onSuccess?: (fields: BusinessOwnerProfileCreateFormInputValues) => void;
    onError?: (fields: BusinessOwnerProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessOwnerProfileCreateFormInputValues) => BusinessOwnerProfileCreateFormInputValues;
    onValidate?: BusinessOwnerProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessOwnerProfileCreateForm(props: BusinessOwnerProfileCreateFormProps): React.ReactElement;
