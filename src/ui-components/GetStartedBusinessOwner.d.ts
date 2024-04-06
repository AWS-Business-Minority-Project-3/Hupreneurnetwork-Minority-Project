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
export declare type GetStartedBusinessOwnerOverridesProps = {
    GetStartedBusinessOwner?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Male Business Owner"?: PrimitiveOverrideProps<ImageProps>;
    "Business Owner"?: PrimitiveOverrideProps<TextProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Build up your brand and gain a great community!"?: PrimitiveOverrideProps<TextProps>;
    "HUEntrepenuer Network is a great way to grow your small business. We offer opportunities to connect with Howard students that will help give you a community of supporters."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type GetStartedBusinessOwnerProps = React.PropsWithChildren<Partial<FlexProps> & {
    colorMode?: "dark";
} & {
    overrides?: GetStartedBusinessOwnerOverridesProps | undefined | null;
}>;
export default function GetStartedBusinessOwner(props: GetStartedBusinessOwnerProps): React.ReactElement;
