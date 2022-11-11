import { ImageBackground, Dimensions, View, ToastAndroid } from "react-native";
import React, { useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button, Text } from "react-native-rapi-ui";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Scanner = (): React.ReactElement => {
  const [isScanned, setIsScanned] = useState<boolean>(false);
  const [participent_name, setParticipent_name] = useState<string>("");
  const [p_id, setP_id] = useState<string>("");
  const registerParticipent = async () => {
    if (p_id.length > 0) {
      let headersList = {
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        participent_id: p_id,
      });

      let response = await fetch(
        "https://eventli.vercel.app/api/markAttandence",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );
      console.log(response.status);

      if (response.status === 406) {
        ToastAndroid.show("Already andar hai tu", ToastAndroid.SHORT);
        setParticipent_name("");
        setIsScanned((prev) => !prev);
        return;
      }
      if (response.ok) {
        ToastAndroid.show("Succesfully checkedin", ToastAndroid.SHORT);
        setParticipent_name("");
        setIsScanned((prev) => !prev);
        return;
      }
    }
  };

  return (
    <ImageBackground
      source={require("../assets/Mesh.png")}
      style={{ width: "100%", height: "100%" }}
    >
      {!isScanned && (
        <BarCodeScanner
          style={{
            top: 50,
            height: 460,
            width: SCREEN_WIDTH,
          }}
          onBarCodeScanned={(data) => {
            if (data) {
              console.log(data.data);
              setIsScanned((prev) => !prev);
              setParticipent_name(JSON.parse(data.data).name);
              setP_id(JSON.parse(data.data).participent_id);
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
