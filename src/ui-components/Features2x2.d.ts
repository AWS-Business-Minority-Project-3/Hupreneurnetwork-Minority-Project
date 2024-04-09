/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type Features2x2OverridesProps = {
    Features2x2?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13629766592"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 13629766593"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37429766594"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039424113"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39424114?: MyIconProps;
    "Shop Student Clothing Brands"?: PrimitiveOverrideProps<TextProps>;
    "Support Black owned clothing brands around Howard Universities campus to find the coolest new clothes, shoes, and accessories."?: PrimitiveOverrideProps<TextProps>;
    "Frame 37329766597"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039424116"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39424117?: MyIconProps;
    "Get Hair Services"?: PrimitiveOverrideProps<TextProps>;
    "You are able to get anything from a haircut to getting braids and installs from reliable student entrepreneurs. There are plenty of reviews and testimonies that you can hear from students."?: PrimitiveOverrideProps<TextProps>;
    "Frame 393"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 37429766601"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039403233"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39403234?: MyIconProps;
    "Get Your Nails Done"?: PrimitiveOverrideProps<TextProps>;
    "Level up your look with a fresh set of nails or lashes from the best techs in the game!"?: PrimitiveOverrideProps<TextProps>;
    "Frame 37329766604"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43039424110"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon39424111?: MyIconProps;
    "Get Plates of Food"?: PrimitiveOverrideProps<TextProps>;
    "If you are hungry and looking for a home cooked meal then ordering from our cooking entrepreneurs is the way to go."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Features2x2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Features2x2OverridesProps | undefined | null;
}>;
export default function Features2x2(props: Features2x2Props): React.ReactElement;
