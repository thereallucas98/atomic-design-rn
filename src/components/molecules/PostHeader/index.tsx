import React from "react";
import { Image, Text, View } from "react-native";

import { ProfileIcon } from "../../../global/styles/icons";

import { styles } from "../../../pages/Feed/styles";

interface PostHeaderProps {
  username: string;
  location: string;
}

export function PostHeader({ username, location }: PostHeaderProps) {
  return (
    <View style={styles.postHeader}>
      <Image source={ProfileIcon} style={styles.postAvatar} />
      <View>
        <Text style={styles.postUsername}>{username}</Text>
        <Text style={styles.postLocation}>{location}</Text>
      </View>
    </View>
  );
}
