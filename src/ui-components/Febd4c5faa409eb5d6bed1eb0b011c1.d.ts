/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type Febd4c5faa409eb5d6bed1eb0b011c1OverridesProps = {
    Febd4c5faa409eb5d6bed1eb0b011c1?: PrimitiveOverrideProps<ViewProps>;
    "83febd4c-5faa-409e-b5d6-bed1eb0b011c 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type Febd4c5faa409eb5d6bed1eb0b011c1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Febd4c5faa409eb5d6bed1eb0b011c1OverridesProps | undefined | null;
}>;
export default function Febd4c5faa409eb5d6bed1eb0b011c1(props: Febd4c5faa409eb5d6bed1eb0b011c1Props): React.ReactElement;
