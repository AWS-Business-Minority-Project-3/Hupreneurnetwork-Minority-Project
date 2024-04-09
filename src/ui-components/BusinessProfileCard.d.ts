/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type BusinessProfileCardOverridesProps = {
    BusinessProfileCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Group 5"?: PrimitiveOverrideProps<FlexProps>;
    "Group 140228450"?: PrimitiveOverrideProps<ViewProps>;
    "Business Name"?: PrimitiveOverrideProps<TextProps>;
    "Sally\u2019s Cooking"?: PrimitiveOverrideProps<TextProps>;
    "Group 3"?: PrimitiveOverrideProps<FlexProps>;
    "Phone Number"?: PrimitiveOverrideProps<TextProps>;
    "(123)456-7890"?: PrimitiveOverrideProps<TextProps>;
    "Group 4"?: PrimitiveOverrideProps<FlexProps>;
    Email?: PrimitiveOverrideProps<TextProps>;
    "Sallys@gmail.com"?: PrimitiveOverrideProps<TextProps>;
    "Group 6"?: PrimitiveOverrideProps<FlexProps>;
    "Group 140238463"?: PrimitiveOverrideProps<ViewProps>;
    Address?: PrimitiveOverrideProps<TextProps>;
    "1234 Sherman Ave. Washington, D.C. 20001"?: PrimitiveOverrideProps<TextProps>;
    "Group 7"?: PrimitiveOverrideProps<FlexProps>;
    Website?: PrimitiveOverrideProps<TextProps>;
    "www.SallysCooking.com"?: PrimitiveOverrideProps<TextProps>;
    "Group 8"?: PrimitiveOverrideProps<FlexProps>;
    "Business Category"?: PrimitiveOverrideProps<TextProps>;
    Food?: PrimitiveOverrideProps<TextProps>;
    "Group 9"?: PrimitiveOverrideProps<FlexProps>;
    "Business Description"?: PrimitiveOverrideProps<TextProps>;
    "Soul Food Plates"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type BusinessProfileCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    business?: any;
} & {
    overrides?: BusinessProfileCardOverridesProps | undefined | null;
}>;
export default function BusinessProfileCard(props: BusinessProfileCardProps): React.ReactElement;
