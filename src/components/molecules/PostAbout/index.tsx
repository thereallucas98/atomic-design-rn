import React from "react";
import { Image, ImageProps, Text, View } from "react-native";

import { styles } from "../../../pages/Feed/styles";

interface PostAboutProps {
  avatar: ImageProps;
  likes: string;
}

export function PostAbout({ avatar, likes }: PostAboutProps) {
  return (
    <View style={styles.postAbout}>
      <Image source={avatar} style={styles.lastLiked} />
      <Text style={styles.likes}>{likes}</Text>
    </View>
  );
}
