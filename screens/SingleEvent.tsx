import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Scanner from "./Scanner";
import ParticipentsList from "./ParticipentsList";
const Tab = createMaterialTopTabNavigator();

export default function SingleEvent(): React.ReactElement {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: "800" },
        tabBarItemStyle: { height: 50 },
        tabBarActiveTintColor: "black",
        tabBarIndicatorStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Scanner}
        options={{
          tabBarLabel: "Scanner",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ParticipentsList}
        options={{
          tabBarLabel: "Participents (80)",
        }}
      />
    </Tab.Navigator>
  );
}
