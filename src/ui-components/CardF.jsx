/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Divider,
  Flex,
  Icon,
  Image,
  Rating,
  Text,
  View,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function CardF(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="960px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardF")}
    >
      <Image
        width="320px"
        height="366px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="24px"
        direction="column"
        width="640px"
        grow="1"
        basis="640px"
        height="366px"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Classic Long Sleeve T-Shirt"
          {...getOverrideProps(overrides, "Classic Long Sleeve T-Shirt")}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          width="247px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Ratings")}
        >
          <Rating
            display="flex"
            shrink="0"
            height="36px"
            size="large"
            {...getOverrideProps(overrides, "Rating")}
          ></Rating>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            textDecoration="underline"
            width="19px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="72"
            {...getOverrideProps(overrides, "72")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          width="197px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Tags")}
        >
          <Badge
            fontSize="12px"
            lineHeight="12px"
            padding="6px 8px 6px 8px"
            display="flex"
            shrink="0"
            height="24px"
            fontFamily="Inter"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            textAlign="left"
            direction="column"
            justifyContent="flex-start"
            size="small"
            variation="default"
            children="New"
            {...getOverrideProps(overrides, "Badgechz")}
          ></Badge>
          <Badge
            fontSize="12px"
            lineHeight="12px"
            padding="6px 8px 6px 8px"
            display="flex"
            shrink="0"
            height="24px"
            fontFamily="Inter"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            textAlign="left"
            direction="column"
            justifyContent="flex-start"
            size="small"
            variation="default"
            children="Classic"
            {...getOverrideProps(overrides, "Badgezob")}
          ></Badge>
          <Badge
            fontSize="12px"
            lineHeight="12px"
            padding="6px 8px 6px 8px"
            display="flex"
            shrink="0"
            height="24px"
            fontFamily="Inter"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            textAlign="left"
            direction="column"
            justifyContent="flex-start"
            size="small"
            variation="default"
            children="Modern"
            {...getOverrideProps(overrides, "Badgecmb")}
          ></Badge>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Information about this product."
          {...getOverrideProps(overrides, "Information about this product.")}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Quote")}
        >
          <MyIcon
            shrink="0"
            type="chat"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            width="536px"
            grow="1"
            basis="536px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="“This is a quote.“"
            {...getOverrideProps(overrides, "\u201CThis is a quote.\u201C")}
          ></Text>
        </Flex>
        <Divider
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="32px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          width="286px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Features")}
        >
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Featurebwz")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Iconnda")}
            >
              <Icon
                width="17.58984375px"
                height="13.4100341796875px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.4100341796875,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(67,168,84,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vectorjgq")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Fast"
              {...getOverrideProps(overrides, "Fast")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Featureltp")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Iconftq")}
            >
              <Icon
                width="17.58984375px"
                height="13.4100341796875px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.4100341796875,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(67,168,84,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vectorgje")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Fun"
              {...getOverrideProps(overrides, "Fun")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Featuresfb")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Iconzvw")}
            >
              <Icon
                width="17.58984375px"
                height="13.4100341796875px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.4100341796875,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(67,168,84,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vectoraio")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Flirty"
              {...getOverrideProps(overrides, "Flirty")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
