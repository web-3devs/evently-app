import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button } from "react-native-rapi-ui";
import { AntDesign } from '@expo/vector-icons';

const ParticipentListItem = (): React.ReactElement => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginVertical: 5,
        paddingVertical: 10,
        borderRadius: 4,
        borderColor: "black",
        borderWidth: 1,
      }}
    >
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Avatar
          source={{
            uri: "https://viveksuthar.me/static/media/Pic.5cc5bb4227ecb7c226ae.webp",
          }}
          size="md"
        />
        <View style={{ marginHorizontal: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>Vivek Suthar</Text>
          <Text style={{ fontSize: 12, fontWeight: "400", color: 'gray' }}>
            sutharvivek18@gmail.com
          </Text>
        </View>
      </View>
      <AntDesign name="checkcircle" size={36} color="#38E54D" />
    </View>
  );
};

export default ParticipentListItem;

const styles = StyleSheet.create({});
