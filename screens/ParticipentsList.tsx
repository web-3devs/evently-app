import { View, Text, ImageBackground, ScrollView } from "react-native";
import React from "react";
import ParticipentListItem from "../components/ParticipentListItem";
import { TextInput } from "react-native-rapi-ui";
import { Feather } from "@expo/vector-icons";
import { useStateValue } from "../context/ParticipentContext";
const ParticipentsList = () => {
  const [{ participents }, dispatch] = useStateValue();
  return (
    <ImageBackground
      source={require("../assets/Mesh.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <TextInput
        containerStyle={{ marginVertical: 10, marginHorizontal: 10 }}
        placeholder="Search Participent"
        placeholderTextColor="black"
        borderColor={"black"}
        borderRadius={4}
        borderWidth={1}
        autoCapitalize="none"
        leftContent={<Feather name="search" size={20} color="grey" />}
        // rightContent={<Text style={{ color: "grey" }}>Total:80</Text>}
        autoCorrect={false}
        keyboardType="default"
      />
      <ScrollView
        style={{
          flexGrow: 1,
          padding: 10,
        }}
      >
        {participents.map((item: any) => {
          return item.participants.map((p: any) => {
            return (
              <ParticipentListItem
                key={p.id}
                name={p.name}
                email={p.email}
                p_id={p.id}
              />
            );
          });
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default ParticipentsList;
