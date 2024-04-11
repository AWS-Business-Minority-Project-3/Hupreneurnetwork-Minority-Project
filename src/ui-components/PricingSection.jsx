/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import MarketingPricing from "./MarketingPricing";
import { Flex } from "@aws-amplify/ui-react";
export default function PricingSection(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="80px 80px 80px 80px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PricingSection")}
      {...rest}
    >
      <MarketingPricing
        display="flex"
        gap="24px"
        direction="column"
        width="1440px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="48px 48px 48px 48px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "MarketingPricing")}
      ></MarketingPricing>
    </Flex>
  );
}
