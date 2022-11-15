import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
  Vibration,
} from "react-native";
import React, { useEffect, useState } from "react";
import ParticipentListItem from "../components/ParticipentListItem";
import { TextInput } from "react-native-rapi-ui";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { useStateValue } from "../context/ParticipentContext";
import Checkin from "../utils/checkin";
const { height: SCREEN_HEIGHT } = Dimensions.get("screen");
const ParticipentsList = () => {
  const [{ participents }, dispatch] = useStateValue();
  const [p_name, setP_name] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [pid, setPid] = useState<string>("");
  const [pmail, setPmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTexT, setSearchTexT] = useState<string>("XXXAAAAA");
  const [res, setRes] = useState<any>(null);
  const [allParticipents, setAllParticipents] = useState<[]>(
    participents[0].participants
  );

  const findParticipent = () => {
    searchTexT.toLowerCase();
    allParticipents.map((item: any) => {
      if (item.name.includes(searchTexT)) {
        setRes(item);
      }
    });
  };

  useEffect(() => {
    findParticipent();
  }, [searchTexT]);
  const registerParticipent = async () => {
    try {
      setIsLoading(true);
      setSearchTexT("");
      const result = await Checkin(pid);
      if (result === 406) {
        ToastAndroid.show("Already Registered", ToastAndroid.SHORT);
        Vibration.vibrate(500);
        setP_name("");
        setIsLoading(false);
        setIsOpen((prev) => !prev);
        return;
      }
      if (result === 200) {
        ToastAndroid.show("Succesfully Checkedin", ToastAndroid.SHORT);
        Vibration.vibrate();
        setP_name("");
        setIsLoading(false);
        setIsOpen((prev) => !prev);
        return;
      }
    } catch (error) {}
  };

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
                fontSize: 22,
                marginTop: 45,
                fontWeight: "700",
              }}
            >
              Name:{p_name}
            </Text>
            <Text
              style={{
                fontSize: 22,
                marginHorizontal: 15,
                fontWeight: "700",
              }}
            >
              Email:{pmail}
            </Text>

            <TouchableOpacity
              disabled={isLoading}
              style={{
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
              }}
              onPress={registerParticipent}
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
        leftContent={<Feather name="search" size={20} color="grey" />}
        clearButtonMode="always"
        rightContent={
          searchTexT.length > 0 ? (
            <EvilIcons
              name="close"
              size={24}
              onTouchEndCapture={() => {
                
                setSearchTexT("");
              }}
            />
          ) : null
        }
        autoCorrect={false}
        keyboardType="default"
        onChangeText={(text) => {
          setSearchTexT(text);
        }}
      />
      {res && searchTexT.length > 0 ? (
        <View
          style={{
            paddingHorizontal: 15,
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        >
          <ParticipentListItem
            key={res.id}
            name={res.name}
            email={res.email}
            p_id={res.id}
            showSheet={setIsOpen}
            setP_name={setP_name}
            setpid={setPid}
            setmail={setPmail}
          />
        </View>
      ) : null}
      <ScrollView
        style={{
          flexGrow: 1,
          padding: 10,
          paddingBottom: 50,
        }}
      >
        {allParticipents.map((p: any) => {
          return (
            <ParticipentListItem
              key={p.id}
              name={p.name}
              email={p.email}
              p_id={p.id}
              showSheet={setIsOpen}
              setP_name={setP_name}
              setpid={setPid}
              setmail={setPmail}
            />
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default ParticipentsList;
