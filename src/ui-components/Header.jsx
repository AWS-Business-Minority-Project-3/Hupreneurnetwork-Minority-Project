/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Header(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "HUprenuer Network": {},
        "Helping student businesses achieve success!": {},
        div39795608: {},
        div39795607: {},
        Header: {},
      },
      variantValues: { colorMode: "dark" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      height="569px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="160px 240px 160px 240px"
      backgroundColor="rgba(77,0,0,1)"
      display="flex"
      {...getOverrideProps(overrides, "Header")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "div39795607")}
      >
        <View
          width="1140px"
          height="422px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "div39795608")}
        >
          <Text
            fontFamily="Inter"
            fontSize="96px"
            fontWeight="700"
            color="rgba(184,206,249,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="1173.17px"
            height="96.38px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="calc(50% - 48.19px - 78.21px)"
            left="calc(50% - 586.59px - -17.23px)"
            transformOrigin="top left"
            transform="rotate(0.46deg)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="HUprenuer Network"
            {...getOverrideProps(overrides, "HUprenuer Network")}
          ></Text>
          <Text
            fontFamily="Manrope"
            fontSize="32px"
            fontWeight="200"
            color="rgba(255,255,255,1)"
            lineHeight="75px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="calc(50% - 37.5px - -38px)"
            left="calc(50% - 325px - -17px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Helping student businesses achieve success!"
            {...getOverrideProps(
              overrides,
              "Helping student businesses achieve success!"
            )}
          ></Text>
        </View>
      </Flex>
    </Flex>
  );
}
