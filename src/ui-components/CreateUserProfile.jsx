/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createBusiness } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import MyIcon from "./MyIcon";
import {
  Button,
  Flex,
  Image,
  SwitchField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
const client = generateClient();
export default function CreateUserProfile(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldThreeNineFourTwoFourOneFourFourValue,
    setTextFieldThreeNineFourTwoFourOneFourFourValue,
  ] = useState("");
  const buttonOnClick = async () => {
    await client.graphql({
      query: createBusiness.replaceAll("__typename", ""),
      variables: {
        input: {
          name: textFieldThreeNineFourTwoFourOneFourFourValue,
        },
      },
    });
  };
  return (
    <View
      width="696px"
      height="728px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CreateUserProfile")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="696px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0px"
        left="0px"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create User Profile"
            {...getOverrideProps(overrides, "Create User Profle")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Upload Image"
            {...getOverrideProps(overrides, "Upload Image")}
          ></Text>
        </Flex>
        <View
          width="unset"
          height="512px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="232px"
            height="unset"
            label="First Name"
            placeholder="Jane"
            justifyContent="flex-start"
            position="absolute"
            top="0px"
            left="0px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeNineFourTwoFourOneFourFourValue}
            onChange={(event) => {
              setTextFieldThreeNineFourTwoFourOneFourFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField39424144")}
          ></TextField>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            position="absolute"
            top="0px"
            left="324px"
            padding="0px 1px 0px 1px"
            {...getOverrideProps(overrides, "Frame 437")}
          >
            <TextField
              width="280px"
              height="unset"
              label="Last Name"
              placeholder="Doe"
              justifyContent="flex-start"
              shrink="0"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField29766922")}
            ></TextField>
          </Flex>
          <TextField
            width="648px"
            height="unset"
            label="Email"
            placeholder="example@domain.com"
            position="absolute"
            top="93px"
            left="0px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            width="648px"
            height="unset"
            label="Birthday"
            placeholder="01/01/2000"
            position="absolute"
            top="186px"
            left="0px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField29766924")}
          ></TextField>
          <TextField
            width="648px"
            height="unset"
            label="Gender"
            placeholder="Female"
            position="absolute"
            top="279px"
            left="0px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField3968846")}
          ></TextField>
          <SwitchField
            width="201px"
            height="46px"
            label="Business Owner"
            position="absolute"
            top="372px"
            left="0px"
            size="default"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="start"
            {...getOverrideProps(overrides, "SwitchField")}
          ></SwitchField>
          <Button
            width="unset"
            height="unset"
            position="absolute"
            top="451px"
            left="9px"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </View>
      </Flex>
    </View>
  );
}
