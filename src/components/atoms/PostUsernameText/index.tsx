import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

type PostUsernameTextProps = TextProps & {
  value: string;
};

export function PostUsernameText({ value, ...rest }: PostUsernameTextProps) {
  return (
    <Text {...rest} style={styles.postUsername}>
      {value}
    </Text>
  );
}
