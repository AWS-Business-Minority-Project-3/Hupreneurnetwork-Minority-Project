/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function BusinessProfileCard(props) {
  const { business, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: "/CreateBusinessProfile",
  });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="unset"
      height="981px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="24px 273px 24px 273px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "BusinessProfileCard")}
      {...rest}
    >
      <Image
        width="160px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={business?.businessImagePath}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        padding="0px 0px 0px 0px"
        width="459.83px"
        height="73px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 5")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="459.83px"
          height="73px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 140228450")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="459.83px"
            height="29px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Business Name"
            {...getOverrideProps(overrides, "Business Name")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="408.17px"
            height="35px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="38px"
            left="25.83px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={business?.name}
            {...getOverrideProps(overrides, "Sally\u2019s Cooking")}
          ></Text>
        </View>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="459.83px"
        height="88px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 3")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="459.83px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Phone Number"
          {...getOverrideProps(overrides, "Phone Number")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="408.17px"
          height="50px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="38px"
          left="26.69px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={business?.phone}
          {...getOverrideProps(overrides, "(123)456-7890")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="459.83px"
        height="70px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 4")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="459.83px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Email"
          {...getOverrideProps(overrides, "Email")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="408.17px"
          height="35px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="35px"
          left="25.83px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={business?.email}
          {...getOverrideProps(overrides, "Sallys@gmail.com")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="558px"
        height="73px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 6")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="558px"
          height="73px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 140238463")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="459.83px"
            height="29px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="calc(50% - 14.5px - 22px)"
            left="calc(50% - 229.92px - 16.36px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Address"
            {...getOverrideProps(overrides, "Address")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="20px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="558px"
            height="35px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="38px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={business?.address}
            {...getOverrideProps(
              overrides,
              "1234 Sherman Ave. Washington, D.C. 20001"
            )}
          ></Text>
        </View>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="502.89px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 7")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="459.83px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="8.1px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Website"
          {...getOverrideProps(overrides, "Website")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="502.89px"
          height="35px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="29px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={business?.website}
          {...getOverrideProps(overrides, "www.SallysCooking.com")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="459.83px"
        height="70px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 8")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="459.83px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Business Category"
          {...getOverrideProps(overrides, "Business Category")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="408.17px"
          height="35px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="35px"
          left="25.83px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={business?.category}
          {...getOverrideProps(overrides, "Food")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="459.83px"
        height="70px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 9")}
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="459.83px"
          height="29px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Business Description"
          {...getOverrideProps(overrides, "Business Description")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="408.17px"
          height="35px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="35px"
          left="25.83px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={business?.description}
          {...getOverrideProps(overrides, "Soul Food Plates")}
        ></Text>
      </Flex>
      <Button
        width="200px"
        height="unset"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Edit Profile"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
