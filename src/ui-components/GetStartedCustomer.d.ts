/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GetStartedCustomerOverridesProps = {
    GetStartedCustomer?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Happy Howard Student Girl"?: PrimitiveOverrideProps<ImageProps>;
    Customer?: PrimitiveOverrideProps<TextProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Find college student black owned businesses on near Howard University"?: PrimitiveOverrideProps<TextProps>;
    "If you are in need of a quality product or service any you reside near the illustrious Howard University, then look no further. HUEntrepenuer Network is the application for you. We are able to connect you with students business owners that will help you get a quality experience for a fraction of the price."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type GetStartedCustomerProps = React.PropsWithChildren<Partial<FlexProps> & {
    colorMode?: "Default";
} & {
    overrides?: GetStartedCustomerOverridesProps | undefined | null;
}>;
export default function GetStartedCustomer(props: GetStartedCustomerProps): React.ReactElement;
