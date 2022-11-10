import { ImageBackground, Dimensions, View } from "react-native";
import React, { useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button, Text } from "react-native-rapi-ui";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Scanner = (): React.ReactElement => {
  const [isScanned, setIsScanned] = useState<boolean>(false);
  const [participent_name, setParticipent_name] = useState<string>("");

  const registerParticipent = async () => {
    setParticipent_name('');
    setIsScanned((prev) => !prev);
  };

  return (
    <ImageBackground
      source={require("../assets/Mesh.png")}
      style={{ width: "100%", height: "100%" }}
    >
      {!isScanned && (
        <BarCodeScanner
          style={{
            top: 45,
            height: 400,
            width: SCREEN_WIDTH,
          }}
          onBarCodeScanned={(data) => {
            if (data) {
              console.log(data.data);
              setIsScanned((prev) => !prev);
              setParticipent_name(JSON.parse(data.data).name);
            }
          }}
        />
      )}

      {participent_name ? (
        <>
          <View
            style={{
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 24,
              }}
            >
              Name: {participent_name}
            </Text>
            <Button
              text={"Submit"}
              color={"#9F7AEA"}
              textStyle={{ color: "white" }}
              style={{
                borderRadius: 4,
                borderColor: "black",
                borderWidth: 1,
                marginTop: 32,
              }}
              onPress={registerParticipent}
            />
          </View>
        </>
      ) : null}
    </ImageBackground>
  );
};

export default Scanner;
