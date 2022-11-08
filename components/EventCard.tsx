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
            uri: img_url,
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
        <Text>{desc}</Text>
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
