import Login from "./screens/Login";
import { ThemeProvider } from "react-native-rapi-ui";
import Events from "./screens/AllEvents";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import SingleEvent from "./screens/SingleEvent";
import { Image } from "react-native";
const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme="light">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Events}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SingleEvent"
            component={SingleEvent}
            options={{
              headerShown: true,
              title: "",
              headerLeft: () => {
                return (
                  <Image
                    source={require("./assets/logo.png")}
                    style={{ height: 40, width: 120 }}
                  />
                );
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
