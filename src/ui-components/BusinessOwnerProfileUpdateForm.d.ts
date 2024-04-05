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
export declare type BusinessOwnerProfileUpdateFormInputValues = {};
export declare type BusinessOwnerProfileUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessOwnerProfileUpdateFormOverridesProps = {
    BusinessOwnerProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type BusinessOwnerProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessOwnerProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    businessOwnerProfile?: any;
    onSubmit?: (fields: BusinessOwnerProfileUpdateFormInputValues) => BusinessOwnerProfileUpdateFormInputValues;
    onSuccess?: (fields: BusinessOwnerProfileUpdateFormInputValues) => void;
    onError?: (fields: BusinessOwnerProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessOwnerProfileUpdateFormInputValues) => BusinessOwnerProfileUpdateFormInputValues;
    onValidate?: BusinessOwnerProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessOwnerProfileUpdateForm(props: BusinessOwnerProfileUpdateFormProps): React.ReactElement;
