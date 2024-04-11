/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CreateUserProfileOverridesProps = {
    CreateUserProfile?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Create User Profle"?: PrimitiveOverrideProps<TextProps>;
    Forms?: PrimitiveOverrideProps<ViewProps>;
    TextField39424144?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    TextField29766922?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766923?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CreateUserProfileProps = React.PropsWithChildren<Partial<ViewProps> & {
    profile?: String;
} & {
    overrides?: CreateUserProfileOverridesProps | undefined | null;
}>;
export default function CreateUserProfile(props: CreateUserProfileProps): React.ReactElement;
