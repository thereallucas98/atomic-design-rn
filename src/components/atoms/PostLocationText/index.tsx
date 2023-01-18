import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

type PostLocationTextProps = TextProps & {
  value: string;
};

export function PostLocationText({ value, ...rest }: PostLocationTextProps) {
  return (
    <Text {...rest} style={styles.postLocation}>
      {value}
    </Text>
  );
}
