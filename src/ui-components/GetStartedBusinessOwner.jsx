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
export default function GetStartedBusinessOwner(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Male Business Owner": {},
        "Business Owner": {},
        "Build up your brand and gain a great community!": {},
        "HUEntrepenuer Network is a great way to grow your small business. We offer opportunities to connect with Howard students that will help give you a community of supporters.":
          {},
        "Main Body": {},
        Button: {},
        "Type Lock Up": {},
        GetStartedBusinessOwner: {},
      },
      variantValues: { colorMode: "dark" },
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
      height="715px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="160px 240px 160px 240px"
      backgroundColor="rgba(77,0,0,1)"
      display="flex"
      {...getOverrideProps(overrides, "GetStartedBusinessOwner")}
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
          width="346px"
          height="337px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://howardpreneurnetworkac918fdfec654a55b833b713884171652-main.s3.amazonaws.com/public/images/bookstore.jpg?AWSAccessKeyId=ASIASF63XTHUFIEAYAHF&Expires=1712366896&Signature=2UAs5T5Sqo6vdQchbncszzcqcsg%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQDC4ejGpxSSFH%2BPfl8PBJwDanlvpc1NjtawTmAab%2F4gOwIgbzjGo%2FA8mXD%2BGsMAtH3MV0TWOXsJU7BFWxe59cxU6OEqzQQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxNTAyNDc4MDc0NjQiDKNH4Myq4nO0bNchBiqhBDs0cGPekolhbLJiijZnMYEBztvDm%2Fj6vBr6B5Ra7HSj%2FtVgvFBgQlCj5YxI2086%2FPXjq9bw7mEnv4vspEdIsLOHBM2dCLHt9d7WnFMTWDmdTdBoHgGTi5j9KM31c7fUoAl7kWKG4yd3BHn2EUOVw2cy%2FjvKZT7vb34vZVk38%2BbG7ri4Tduer6QBe16xvCCqpO6pYieIzaclplMKYjX9ZtaJHNlKqzAFzSfMQi0NfSJiBApf7zKCJK4lcDzSj5BVnQ7pAlSBsglfWYZ3lqbSk4CthBCs%2BkyrKUlBa5dS9vDuFRXQnuqk9FaMmdgvsFp07BXuxWrKVdpDnHQUcCu%2BdJCpLULoBWmO9imNo495rHQLXcH1ocDIPcp8p%2BzTXJAuOQJrfZ6dotClGMV9TGa15xlGS%2Fg44ocnOvgr%2FPW3vlylGkMnm7WA7RC1vd2TKIIPZYwkQH%2F5xx6Rh2Gy6Bcw0mrRmaebaiOCpIUa%2BQ8jaBNPdbN61CiUmEvoZUU4Cq9FQoz%2FDxguNh2fH7GliM7GU83gj23KKwsbfQhbUnwAXNF4EJtLgfnGLd%2FX%2BgG5BohBuALxtY2dadscTf2YlmkNXU9Znxo%2FpU%2BZ4kmJpeV6xMDvGcaEtsGMDM7rkNKhwP%2BRw7P3ZwzOZ8dwnwgKhfoYKK9LsJsBfvrO1EmTncAyDdh1KswmPa0h5T1IWFCf0IJtwjEL%2BsAgnTUfxLOuAPj%2BUjwrMMy9wrAGOoUCua5Q8o6QK7WZe5C6lIIFc2S0%2FFTecCCuuMeOLld06V9gkeROq%2BTQ6nPqE5nfHTrx37JMfX5baFIWU6be8libVkDYPxx9tP%2FYAL70QWPqCOZITca6%2BUuLbiWtLqElW1BDlEs7OR2guNmJls9nyQqdIqIghQXqyw2r9iZ%2BJoEzxl9bNhPlr2mO7REJeAnajaT5zBNmLyHulX%2BXcqAlc2NJoXuKHxn8CPRMmua%2BBy%2BhCaZQLq4JynFbLvIqoaPYCi7iwnoQmQ9CpBKpa0g1Ng52xajWo9BGWlUaJoFf1ZJ9PdG5GDIhGlAuWkF4CfSdQxhS6N%2FlWh3OfaOpigHx5o4Y7f5Ip5Ls"
          {...getOverrideProps(overrides, "Male Business Owner")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="700"
          color="rgba(184,206,249,1)"
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
          children="Business Owner"
          {...getOverrideProps(overrides, "Business Owner")}
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
            color="rgba(255,255,255,1)"
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
            children="Build up your brand and gain a great community!"
            {...getOverrideProps(
              overrides,
              "Build up your brand and gain a great community!"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
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
            children="HUEntrepenuer Network is a great way to grow your small business. We offer opportunities to connect with Howard students that will help give you a community of supporters."
            {...getOverrideProps(
              overrides,
              "HUEntrepenuer Network is a great way to grow your small business. We offer opportunities to connect with Howard students that will help give you a community of supporters."
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
