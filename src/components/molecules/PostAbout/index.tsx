import React from "react";
import { ImageProps, View } from "react-native";

import { PostLikedText } from "../../atoms/PostLikedText";
import { styles } from "../../../pages/Feed/styles";
import { PostLikedAvatar } from "../../atoms/PostLikedAvatar";

interface PostAboutProps {
  avatar: ImageProps;
  likes: string;
}

export function PostAbout({ avatar, likes }: PostAboutProps) {
  return (
    <View style={styles.postAbout}>
      <PostLikedAvatar source={avatar} />
      <PostLikedText value={likes} />
    </View>
  );
}
