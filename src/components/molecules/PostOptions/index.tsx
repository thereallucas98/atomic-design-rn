import React from "react";
import { View } from "react-native";

import {
  MessengerIcon,
  FavoriteIcon,
  CommentIcon,
  SaveIcon,
} from "../../../global/styles/icons";

import { IconButton } from "../../atoms/IconButton";

import { styles } from "./styles";

export function PostOptions() {
  return (
    <View style={styles.postOptions}>
      <View style={styles.postOptionsSide}>
        <IconButton icon={FavoriteIcon} />
        <IconButton icon={CommentIcon} />
        <IconButton icon={MessengerIcon} />
      </View>

      <SaveIcon />
    </View>
  );
}
