import React from "react";
import { Text as RNText } from "react-native";
import { TextStyle } from "react-native";
import { ReactNode } from "react";

type propsType = {
  style?: TextStyle;
  children?: ReactNode;
};

const Text = (props: propsType) => {
  return (
    <RNText
      {...props}
      style={{
        fontFamily: "Poppins-Regular",
        color: "black",
        // paddingTop: 4,
        ...props.style,
      }}
    >
      {props.children}
    </RNText>
  );
};

export default Text;
