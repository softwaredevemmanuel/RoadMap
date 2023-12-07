import React from "react";
import { Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const HText = (props) => {
  const { fontWeight, fontSize, color, textStyle, children } = props;

  function weightProp() {
    return fontWeight === "medium"
      ? "GeneralSansMedium"
      : fontWeight === "semibold"
      ? "GeneralSansSemibold"
      : "GeneralSans";
  }

  function sizeProp() {
    return fontSize === "10"
      ? 10
      : fontSize === "14"
      ? 14
      : fontSize === "16"
      ? 16
      : fontSize === "18"
      ? 18
      : fontSize === "20"
      ? 20
      : fontSize === "22"
      ? 22
      : fontSize === "24"
      ? 24
      : 12;
  }

  return (
    <Text
      style={[
        {
          fontFamily: weightProp(),
          fontSize: RFValue(sizeProp()),
          color: color ? color : "#1F1F1F",
        },
        textStyle,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default HText;
