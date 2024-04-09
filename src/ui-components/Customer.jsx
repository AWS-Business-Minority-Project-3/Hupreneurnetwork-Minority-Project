/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import GetStartedCustomer from "./GetStartedCustomer";
import CustomersStart from "./CustomersStart";
import { Flex } from "@aws-amplify/ui-react";
export default function Customer(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Customer")}
      {...rest}
    >
      <GetStartedCustomer
        display="flex"
        gap="10px"
        direction="column"
        width="1440px"
        height="765px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="160px 240px 160px 240px"
        backgroundColor="rgba(252,233,233,1)"
        colorMode="Default"
        {...getOverrideProps(overrides, "Get Started - Customer")}
      ></GetStartedCustomer>
      <CustomersStart
        display="flex"
        gap="0"
        direction="row"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        mode="Light"
        {...getOverrideProps(overrides, " Customers - Start")}
      ></CustomersStart>
    </Flex>
  );
}
