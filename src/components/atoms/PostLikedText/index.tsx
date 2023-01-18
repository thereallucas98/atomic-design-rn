import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "./styles";

type PostLikedTextProps = TextProps & {
  value: string;
};

export function PostLikedText({ value, ...rest }: PostLikedTextProps) {
  return (
    <Text {...rest} style={styles.likes}>
      {value}
    </Text>
  );
}
