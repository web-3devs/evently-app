import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  View,
  Image,
  ToastAndroid,
  ImageBackground,
} from "react-native";

import {
  Layout,
  Text,
  TextInput,
  Button,
  TopNav,
  Avatar,
} from "react-native-rapi-ui";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function EventCard({ route, name, desc, img_url, date }: any) {
  return (
    <View
      style={{
        width: "100%",
        height: "auto",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: "black",
          borderBottomWidth: 1,
        }}
      >
        <Image
          source={{
            uri: "https://res.cloudinary.com/djkwixcg8/image/upload/v1666505377/oerxhzidqaocuafgbmtj.jpg",
          }}
          style={{
            height: 150,
            width: "100%",
            resizeMode: "cover",
            borderRadius: 5,
          }}
        />
      </View>
      <View style={{ justifyContent: "flex-end", width: "100%", padding: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="calendar" />
          <Text>25 Oct 2022</Text>
        </View>
        <Text>{name}</Text>
        <Text>Event Desc</Text>
      </View>
      <Button
        text="Start Check-in"
        color={"#805AD5"}
        rightContent={<Feather name="arrow-right" color={"white"} size={20} />}
        onPress={() => {
          route.navigate("SingleEvent");
        }}
        textStyle={{ color: "white" }}
        style={{
          alignSelf: "stretch",
          width: "100%",
          marginTop: 20,
          elevation: 10,
          borderRadius: 1,
        }}
      />
    </View>
  );
}
