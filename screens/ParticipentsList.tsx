import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import ParticipentListItem from "../components/ParticipentListItem";
import { TextInput } from "react-native-rapi-ui";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useStateValue } from "../context/ParticipentContext";
const { height: SCREEN_HEIGHT } = Dimensions.get("screen");
const ParticipentsList = () => {
  const [{ participents }, dispatch] = useStateValue();
  const [p_name, setP_name] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <ImageBackground
      source={require("../assets/Mesh.png")}
      style={{ width: "100%", height: "100%" }}
    >
      {isOpen ? (
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.25)",
            width: "100%",
            height: "100%",
            zIndex: 2,
          }}
        >
          <View
            style={{
              position: "absolute",
              bottom: 0,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              width: "100%",
              height: SCREEN_HEIGHT / 3,
              zIndex: 4,
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                position: "absolute",
                height: 28,
                width: "90%",
                alignSelf: "center",
                marginVertical: 5,
                justifyContent: "center",
                alignItems: "flex-end",
                borderRadius: 15,
              }}
            >
              <EvilIcons
                name="close"
                size={24}
                onTouchEndCapture={() => {
                  setIsOpen(false);
                }}
              />
            </View>
            <Text
              style={{
                marginHorizontal: 15,
                marginVertical: 45,
                fontSize: 22,
                fontWeight: "700",
              }}
            >
              Name:{p_name}
            </Text>
            <TouchableOpacity
              disabled={isLoading}
              style={{
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
              }}
              onPress={(e) => {}}
            >
              <View
                style={{
                  backgroundColor: "#9F7AEA",
                  borderRadius: 4,
                  width: 100,
                  borderColor: "black",
                  borderWidth: 1,
                  marginTop: 32,
                  paddingVertical: 10,
                }}
              >
                {isLoading ? (
                  <ActivityIndicator size={"small"} color={"black"} />
                ) : (
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "800",
                    }}
                  >
                    Submit
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}

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
                showSheet={setIsOpen}
                setP_name={setP_name}
              />
            );
          });
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default ParticipentsList;
