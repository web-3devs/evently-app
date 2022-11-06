import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
  ToastAndroid,
} from "react-native";

import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  themeColor,
  TopNav,
} from "react-native-rapi-ui";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <Layout>
        <TopNav
          leftContent={
            <Image
              source={require("../assets/logo.png")}
              style={{ height: 40, width: 120 }}
            />
          }
        />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: themeColor.white100,
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                height: 220,
                width: 220,
              }}
              source={require("../assets/mob.png")}
            />
          </View>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 20,
              paddingBottom: 20,
              backgroundColor: themeColor.white,
            }}
          >
            <Text
              fontWeight="bold"
              style={{
                alignSelf: "center",
                padding: 30,
              }}
              size="h3"
            >
              Login
            </Text>

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
              disabled={loading}
            />
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
}
