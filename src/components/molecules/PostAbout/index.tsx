import React from "react";
import { ImageProps, View } from "react-native";

import { PostLikedText } from "../../atoms/PostLikedText";
import { PostLikedAvatar } from "../../atoms/PostLikedAvatar";

import { styles } from "./styles";

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
