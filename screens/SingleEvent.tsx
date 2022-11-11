import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Scanner from "./Scanner";
import ParticipentsList from "./ParticipentsList";
import { useStateValue } from "../context/ParticipentContext";
const Tab = createMaterialTopTabNavigator();

export default function SingleEvent(): React.ReactElement {
  const [{ participents }] = useStateValue();
  console.log(participents[0].participants.length);
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: "800" },
        tabBarItemStyle: { height: 50 },
        tabBarActiveTintColor: "black",
        tabBarPressColor: "#9F7AEA",
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
          tabBarLabel: `Participents (${participents[0].participants.length})`,
        }}
      />
    </Tab.Navigator>
  );
}
