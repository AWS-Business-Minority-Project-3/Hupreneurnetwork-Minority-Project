/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GetStartedCustomerProps } from "./GetStartedCustomer";
import { CustomersStartProps } from "./CustomersStart";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type CustomerOverridesProps = {
    Customer?: PrimitiveOverrideProps<FlexProps>;
    "Get Started - Customer"?: GetStartedCustomerProps;
    " Customers - Start"?: CustomersStartProps;
} & EscapeHatchProps;
export declare type CustomerProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CustomerOverridesProps | undefined | null;
}>;
export default function Customer(props: CustomerProps): React.ReactElement;
