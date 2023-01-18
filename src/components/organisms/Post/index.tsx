import React from "react";
import { ImageProps, Text, View } from "react-native";

import { PostPhoto } from "../../atoms/PostPhoto";
import { PostHeader } from "../../molecules/PostHeader";
import { styles } from "../../../pages/Feed/styles";
import { PostOptions } from "../../molecules/PostOptions";
import { PostAbout } from "../../molecules/PostAbout";
import { PostDescription } from "../../atoms/PostDescription";

export type Profile = {
  id: string;
  name: string;
  avatar: ImageProps;
};

export type IPost = {
  id: string;
  likes: string;
  username: string;
  location: string;
  cover: ImageProps;
  description: string;
  lastLiked: Profile;
};

interface PostProps {
  data: IPost;
}

export function Post({ data }: PostProps) {
  return (
    <View style={styles.post}>
      <PostHeader username={data.username} location={data.location} />

      <PostPhoto source={data.cover} />

      <View style={styles.postFooter}>
        <PostOptions />
        <PostAbout avatar={data.lastLiked.avatar} likes={data.likes} />
        <PostDescription value={data.description} />
      </View>
    </View>
  );
}
