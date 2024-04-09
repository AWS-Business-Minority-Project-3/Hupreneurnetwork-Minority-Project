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
          src="https://howardpreneurnetworkac918fdfec654a55b833b713884171652-main.s3.amazonaws.com/public/images/cookout.jpg?AWSAccessKeyId=ASIASF63XTHUDMM7ET4A&Expires=1712406129&Signature=01uJ409f0N6Sxhcuj3OILMTpSP4%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQD%2Bz1P0jlfb3sZSE9YrKnwxSIgLtNBQD4jx%2Bt3EwkzIHgIhALAAyaBt3Jbj5jBXr%2FZLrZgXXRJ7iBywDKBwC8VdJXHOKs0ECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTUwMjQ3ODA3NDY0IgypYDtqwWYhojQm%2FrQqoQQ93ssySTS%2B5X2Oa38f6ztoDvi0dM0bwz6TYxGwd%2F86ftGEBddd%2FPnR1abz%2FpKLBDHe7KDucq%2BLVvEQpQKBJ3rbrUPjqqPNWBVOLRneTBjRxaxS4yR%2B5DXtd5h2Bxw7ZrasggLm%2BaSP7iX6Voxpijs5HJYTR5CntdMF90kur35zP5AGxzACgsxY1K0Cm3S74PAan5R0NdvINvSIUn5y7p1iiKG%2BclS%2BVbJb31kXSRalYi6%2BQJ2gCMIB2Rnw1z65fi0jZrjwUFV2gYy8x49lTNSxTdts1sRTe9yVCr%2FLVkjj8Em%2BiNbQ7Fv5PUjKxFOmn2Nl9znOM8RzDDoDj%2F2gpHLPllxMy%2Bbi6jIxOoHqTNigqoE903UhCfH0qPBRp%2BimBv6o%2Bw4xI5IahjgQyinCRNApcntFf6YzfzIFfUJtzU%2BEzK0hxN06m2xXanNgHohdxc6okE4CZqqDbw5DeFWtvDzfwIStjNON%2BQlxCaAJOi7BDro%2BjjN4mJkPZAwjTNEL9UGWnFtJXiEaNXwOoDZdLJ4xGYuchwoYpaY9gTSG8jbtDtWobycWp%2FTc%2B%2Bn%2FHd6SciD8TwOb2tAp0TR6TCnyEN5QvU1bysuICRJkDUaeqSd0PxNGZvtges7Ro%2FbErrXhM5SIompJglbeB3cOQvQyimzCOQtKHqTkOM0IK17imkbmHzPlxzDUYMmARnwZ7f7lOeUQ0oxwYFuEUfjTJ9HMgzesyDDS98SwBjqEAiXS0Wm%2BO2mFmd4xXfK1am%2FBfRKRmxmnQiy45usKXPB5AcIFvrSIdKPT5Fc2Ux44dykaAWTbszYzT6gwQPRKOi7jhuXqU5oZEGYOvTzA2xoEMkGOTx97zyn2s2nQCTug3CLUX%2FaNQor15mj3nS2i4Dowgw9IADxg2vnu2gmMoY%2Bk1acIjRXdUuz74Mq%2FMaOimC0Pq3OHtOCHQWSux18CUTRkHf9MqDO3jD7HtG8SFhcBFoW%2FqhcEHU%2FL6%2FSJwZzLNwJefgA8ZOYWIF8SvSPRW%2B0yqXJZnN1KOsBzq35g0IUZI88r1riV%2FuFtjlhC5Sk5euTdIst%2FG%2FxR0TtfJLWx%2Bf%2BrR%2BYJ"
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
