/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Features2x2 from "./Features2x2";
import { Flex } from "@aws-amplify/ui-react";
export default function Features(props) {
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
      {...getOverrideProps(overrides, "Features")}
      {...rest}
    >
      <Features2x2
        display="flex"
        gap="0"
        direction="column"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="40px 160px 40px 160px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Features2x2")}
      ></Features2x2>
    </Flex>
  );
}
