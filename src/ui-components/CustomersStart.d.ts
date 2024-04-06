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
export declare type CustomersStartOverridesProps = {
    CustomersStart?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    Eyebrow?: PrimitiveOverrideProps<TextProps>;
    Heading?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "ce42115f-fae0-4187-a65f-788a0d521a4a 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CustomersStartProps = React.PropsWithChildren<Partial<FlexProps> & {
    mode?: "Light";
} & {
    overrides?: CustomersStartOverridesProps | undefined | null;
}>;
export default function CustomersStart(props: CustomersStartProps): React.ReactElement;
