import React from "react";
import { View } from "react-native";

import { ProfileIcon } from "../../../global/styles/icons";

import { styles } from "../../../pages/Feed/styles";

import { PostAvatar } from "../../atoms/PostAvatar";
import { PostUsernameText } from "../../atoms/PostUsernameText";
import { PostLocationText } from "../../atoms/PostLocationText";

interface PostHeaderProps {
  username: string;
  location: string;
}

export function PostHeader({ username, location }: PostHeaderProps) {
  return (
    <View style={styles.postHeader}>
      <PostAvatar source={ProfileIcon} />
      <View>
        <PostUsernameText value={username} />
        <PostLocationText value={location} />
      </View>
    </View>
  );
}
