import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-rapi-ui";

const ParticipentListItem = (): React.ReactElement => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        marginVertical: 5,
        paddingVertical: 15,
        borderRadius: 5,
        borderColor: "black",
        borderWidth: 1,
      }}
    >
      <Avatar
        source={{
          uri: "https://viveksuthar.me/static/media/Pic.5cc5bb4227ecb7c226ae.webp",
        }}
        size="md"
      />
      <View style={{ marginHorizontal: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>Vivek Suthar</Text>
        <Text style={{ fontSize: 16, fontWeight: "400" }}>
          sutharvivek18@gmail.com
        </Text>
      </View>
    </View>
  );
};

export default ParticipentListItem;

const styles = StyleSheet.create({});
