/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, ImageProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type CreateBusProfileOverridesProps = {
    CreateBusProfile?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "Create User Profle"?: PrimitiveOverrideProps<TextProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    TextField40206696?: PrimitiveOverrideProps<TextFieldProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField3965783?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3965784?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40055948?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3965785?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40055982?: PrimitiveOverrideProps<TextFieldProps>;
    TextField40056023?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3965823?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CreateBusProfileProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CreateBusProfileOverridesProps | undefined | null;
}>;
export default function CreateBusProfile(props: CreateBusProfileProps): React.ReactElement;
