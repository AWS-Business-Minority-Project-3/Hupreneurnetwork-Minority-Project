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
export declare type CustomerProfileCreateFormInputValues = {};
export declare type CustomerProfileCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerProfileCreateFormOverridesProps = {
    CustomerProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type CustomerProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: CustomerProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CustomerProfileCreateFormInputValues) => CustomerProfileCreateFormInputValues;
    onSuccess?: (fields: CustomerProfileCreateFormInputValues) => void;
    onError?: (fields: CustomerProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerProfileCreateFormInputValues) => CustomerProfileCreateFormInputValues;
    onValidate?: CustomerProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerProfileCreateForm(props: CustomerProfileCreateFormProps): React.ReactElement;
