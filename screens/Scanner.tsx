import {
  ImageBackground,
  Dimensions,
  View,
  ToastAndroid,
  Vibration,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button, Text } from "react-native-rapi-ui";
const { width: SCREEN_WIDTH } = Dimensions.get("window");
import Checkin from "../utils/checkin";
const Scanner = (): React.ReactElement => {
  const [isScanned, setIsScanned] = useState<boolean>(false);
  const [participent_name, setParticipent_name] = useState<string>("");
  const [p_id, setP_id] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [isloading, setIsloading] = useState(false);
  const registerParticipent = async () => {
    try {
      setIsloading(true);
      const result = await Checkin(p_id);
      if (result === 406) {
        ToastAndroid.show("Already Registered", ToastAndroid.SHORT);
        Vibration.vibrate(500);
        setParticipent_name("");
        setP_id("");
        setIsScanned((prev) => !prev);
        return;
      }
      if (result === 200) {
        ToastAndroid.show("Succesfully Checkedin", ToastAndroid.SHORT);
        Vibration.vibrate();
        setParticipent_name("");
        setP_id("");
        setIsScanned((prev) => !prev);
        return;
      }
    } catch (err) {
      ToastAndroid.show("Something Went Wrong,Try Again", ToastAndroid.SHORT);
      setParticipent_name("");
      setP_id("");
      setIsScanned((prev) => !prev);
    } finally {
      setIsloading((prev) => !prev);
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
              setMail(JSON.parse(data.data)?.email);
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
            <Text
              style={{
                marginVertical: 10,
                fontSize: 20,
              }}
            >
              Email: {mail}
            </Text>
            <TouchableOpacity
              disabled={isloading}
              onPress={registerParticipent}
            >
              <View
                style={{
                  backgroundColor: "#9F7AEA",
                  borderRadius: 4,
                  borderColor: "black",
                  borderWidth: 1,
                  marginTop: 32,
                  paddingVertical: 10,
                }}
              >
                {isloading ? (
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
        </>
      ) : null}
    </ImageBackground>
  );
};

export default Scanner;
