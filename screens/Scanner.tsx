import { ImageBackground, Dimensions } from "react-native";
import React, { useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const Scanner = (): React.ReactElement => {
  const [isScanned, setIsScanned] = useState(false);
  return (
    <ImageBackground
      source={require("../assets/Mesh.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <BarCodeScanner
        style={{
          top: 45,
          height: isScanned ? 0 : 400,
          width: SCREEN_WIDTH,
        }}
        onBarCodeScanned={(data) => {
          if (data) {
            console.log(data.data);
            setIsScanned(true);
            alert(JSON.parse(data.data).name);
          }
        }}
      />
    </ImageBackground>
  );
};

export default Scanner;
