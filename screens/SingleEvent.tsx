import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  View,
  Image,
  ToastAndroid,
  ImageBackground,
  StyleSheet,
} from "react-native";

import { Layout, TopNav, Avatar } from "react-native-rapi-ui";

export default function SingleEvent({ navigation }: any) {
  return (
    <Layout>
      <TopNav
        leftContent={
          <Image
            source={require("../assets/logo.png")}
            style={{ height: 40, width: 120 }}
          />
        }
        rightContent={
          <Avatar
            source={{
              uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b7/b7852c68af3329586c71c59ab453ed930acc5335.jpg",
            }}
            size="md"
            shape="round"
          />
        }
        rightAction={() => {
          navigation.navigate("Profile");
        }}
      />
      <StatusBar style="dark" backgroundColor="white" />
      <ImageBackground
        source={require("../assets/Mesh.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 15,
            paddingVertical: 10,
            paddingBottom: 80,
          }}
        ></ScrollView>
      </ImageBackground>
    </Layout>
  );
}
