import React from "react";
import { FlatList } from "react-native";

import { IPost, Post } from "../../organisms/Post";

import { styles } from "../../../pages/Feed/styles";

type PostsProps = {
  data: IPost[];
}

export function Posts({ data }: PostsProps) {
  return (
    <FlatList
      data={data}
      style={styles.posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(post) => post.id}
      renderItem={({ item }) => (
        <Post data={item} />
      )}
    />
  );
}
