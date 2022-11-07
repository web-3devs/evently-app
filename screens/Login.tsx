import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  View,
  Image,
  ToastAndroid,
  ImageBackground,
} from "react-native";

import { Layout, Text, TextInput, Button, TopNav } from "react-native-rapi-ui";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    // if (!email) {
    //   ToastAndroid.show("Please enter email", ToastAndroid.SHORT);
    //   return;
    // }
    // if (!password) {
    //   ToastAndroid.show("Please enter password", ToastAndroid.SHORT);
    //   return;
    // }
    navigation.navigate("Home");
  };

  return (
    <Layout>
      <TopNav
        leftContent={
          <Image
            source={require("../assets/logo.png")}
            style={{ height: 40, width: 120 }}
          />
        }
      />
      <StatusBar style="dark" backgroundColor="white" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <ImageBackground
          source={require("../assets/Mesh.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                height: 220,
                width: 220,
              }}
              source={require("../assets/mob1.png")}
            />
          </View>

          <View
            style={{
              flex: 3,
              paddingHorizontal: 20,
              paddingBottom: 20,
            }}
          >
            <Text style={{ fontWeight: "700" }}>Email</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Enter your email"
              value={email}
              placeholderTextColor="black"
              borderColor={"black"}
              borderWidth={1}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />

            <Text style={{ marginTop: 15, fontWeight: "700" }}>Password</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Enter your password"
              value={password}
              placeholderTextColor="black"
              borderColor={"black"}
              borderWidth={1}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              text={loading ? "Loading" : "Login"}
              color={"white"}
              textStyle={{ color: "black" }}
              style={{
                borderColor: "black",
                borderWidth: 1,
                marginTop: 20,
                elevation: 4,
              }}
              onPress={handleLogin}
              disabled={loading}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </Layout>
  );
}
