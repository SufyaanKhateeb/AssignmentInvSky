import React from "react";
import { Text as RNText } from "react-native";

const Text = (props: any) => {
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
