import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

type PostDescriptionProps = TextProps & {
  value: string;
};

export function PostDescription({ value, ...rest }: PostDescriptionProps) {
  return (
    <Text {...rest} style={styles.description}>
      {value}
    </Text>
  );
}
