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
  useNavigateAction,
} from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function GetStartedCustomer(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Happy Howard Student Girl": {},
        Customer: {},
        "Find college student black owned businesses on near Howard University":
          {},
        "If you are in need of a quality product or service any you reside near the illustrious Howard University, then look no further. HUEntrepenuer Network is the application for you. We are able to connect you with students business owners that will help you get a quality experience for a fraction of the price.":
          {},
        "Main Body": {},
        Button: {},
        "Type Lock Up": {},
        GetStartedCustomer: {},
      },
      variantValues: { colorMode: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: "/createbusiness",
  });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="1440px"
      height="870px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="160px 240px 160px 240px"
      backgroundColor="rgba(252,233,233,1)"
      display="flex"
      {...getOverrideProps(overrides, "GetStartedCustomer")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Type Lock Up")}
      >
        <Image
          width="350px"
          height="350px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://drive.google.com/file/d/1unv9hCkikmnuoe21hvaacZ6uyfTQHiIm/view?usp=sharing"
          {...getOverrideProps(overrides, "Happy Howard Student Girl")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="700"
          color="rgba(149,4,4,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Customer"
          {...getOverrideProps(overrides, "Customer")}
        ></Text>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Main Body")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Find college student black owned businesses on near Howard University"
            {...getOverrideProps(
              overrides,
              "Find college student black owned businesses on near Howard University"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="If you are in need of a quality product or service any you reside near the illustrious Howard University, then look no further. HUEntrepenuer Network is the application for you. We are able to connect you with students business owners that will help you get a quality experience for a fraction of the price."
            {...getOverrideProps(
              overrides,
              "If you are in need of a quality product or service any you reside near the illustrious Howard University, then look no further. HUEntrepenuer Network is the application for you. We are able to connect you with students business owners that will help you get a quality experience for a fraction of the price."
            )}
          ></Text>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Get started"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}