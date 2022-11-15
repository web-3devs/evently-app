import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Avatar, Button } from "react-native-rapi-ui";
import { AntDesign } from "@expo/vector-icons";

type ParticipentListItemProps = {
  name: string;
  email: string;
  p_id: string;
  showSheet: any;
  setP_name: any;
  setpid: any;
  setmail: any;
};

const ParticipentListItem = ({
  name,
  email,
  p_id,
  showSheet,
  setP_name,
  setpid,
  setmail
}: ParticipentListItemProps): React.ReactElement => {
  const [seed, setSeed] = useState<number>(0);
  useEffect(() => {
    return setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <TouchableWithoutFeedback onPress={() => {
      showSheet((prev: any) => !prev);
      setP_name(name);
      setmail(email);
      setpid(p_id);
    }}>
      <View
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginVertical: 5,
          paddingVertical: 10,
          borderRadius: 4,
          borderColor: "black",
          borderWidth: 1,
        }}
       
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          {/* <Avatar
          source={{
            uri: `https://avatars.dicebear.com/api/human/${seed}.svg`,
          }}
          size="md"
        /> */}
          <View style={{ marginHorizontal: 8 }}>
            <Text style={{ fontSize: 17, fontWeight: "700" }}>{name}</Text>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "gray" }}>
              {email}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ParticipentListItem;

const styles = StyleSheet.create({});
