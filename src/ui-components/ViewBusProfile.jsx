/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import CreateBusProfile from "./CreateBusProfile";
import { Flex } from "@aws-amplify/ui-react";
export default function ViewBusProfile(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="796px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ViewBusProfile")}
      {...rest}
    >
      <CreateBusProfile
        display="flex"
        gap="16px"
        direction="column"
        width="844px"
        height="796px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Create Bus Profile")}
      ></CreateBusProfile>
    </Flex>
  );
}
