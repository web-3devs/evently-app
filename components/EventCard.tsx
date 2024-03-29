import React from "react";
import { View, Image } from "react-native";
import { Text, Button } from "react-native-rapi-ui";
import { Feather } from "@expo/vector-icons";

type EventCardProps = {
  route: any;
  id: string;
  name: string;
  desc: string;
  img_url: string;
};

export default function EventCard({
  route,
  id,
  name,
  desc,
  img_url,
}: EventCardProps): React.ReactElement {
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {/* <Text style={{ fontSize: 28, fontWeight: "900", marginVertical: 10 }}>
        Here's your latest event
      </Text> */}
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri:
              img_url ||
              "https://notes.webutvikling.org/static/283331d58b294ab05c1491be3436600e/5d2c5/nextjs.png",
          }}
          style={{
            height: 200,
            width: "100%",
            resizeMode: "contain",
            borderRadius: 5,
          }}
        />
      </View>
      <View style={{ justifyContent: "flex-end", width: "100%", padding: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 12,
          }}
        >
          <Feather name="calendar" style={{ fontSize: 24 }} />
          <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 4 }}>
            25 Oct 2022
          </Text>
        </View>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8 }}>
          {name || "NextJS Bootcamp"}
        </Text>
        <Text style={{ fontSize: 16, color: "gray", textAlign: "justify" }}>
          {desc ||
            "Learn all about NextJS and build 4 projects,code and deploy on vercel:The Platform by creators of NextJS to easily deploy and manage NextJS"}
        </Text>
      </View>
      <Button
        text="Start Check-in"
        color={"#805AD5"}
        rightContent={<Feather name="arrow-right" color={"white"} size={20} />}
        onPress={() => {
          route.navigate("SingleEvent", {
            event_id: id,
            event_name: name,
          });
        }}
        textStyle={{ color: "white" }}
        style={{
          position: "absolute",
          bottom: 130,
          minWidth: "100%",
          marginTop: 20,
          elevation: 4,
          borderRadius: 1,
        }}
      />
    </View>
  );
}
