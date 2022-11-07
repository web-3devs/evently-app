import Login from "./screens/Login";
import { ThemeProvider } from "react-native-rapi-ui";
import Events from "./screens/AllEvents";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import SingleEvent from "./screens/SingleEvent";
const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme="light">
      {/* <Login /> */}
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
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SingleEvent"
            component={SingleEvent}
            options={{ headerShown: false, presentation: "card" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <AllEvents /> */}
    </ThemeProvider>
  );
}
