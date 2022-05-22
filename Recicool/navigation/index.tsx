/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import Home from "../screens/HomeScreen";
import PointsScreen from "../screens/PointsScreen";
import { HttpService } from "../services/http.service";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
//import EventEmitter from "sm-event-emitter";
import { Provider, useSelector, useDispatch } from "react-redux";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import MenuScreen from "../screens/MenuScreen";
import MyCommentsScreen from "../screens/MyCommentsScreen";
import SearchScreen from "../screens/SearchScreen";
import DescarteScreen from "../screens/DescarteScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const dispatch = useDispatch();

  const authToken = useSelector((s: any) => s?.user?.token);
  const isOnLoginPage = useSelector((s: any) => s?.user?.isOnLoginPage);

  return (
    <Stack.Navigator>
      {authToken ? (
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      ) : isOnLoginPage ? (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      ) : (
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      )}

      {/* <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        /> */}
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}> */}
      {/* <Stack.Screen name="Modal" component={ModalScreen} /> */}
      {/* </Stack.Group> */}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const isOnDescartePage = useSelector((s: any) => s?.user?.isOnDescartePage);

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={PointsScreen}
        options={{
          title: "Pontuação",
          tabBarIcon: ({ color }) => <TabBarIcon name="dollar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabSearch"
        component={SearchScreen}
        options={{
          title: "Pesquisa",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabComment"
        component={MyCommentsScreen}
        options={{
          title: "Comentário",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="comment" color={color} />
          ),
        }}
      />
      {isOnDescartePage ? (
        <BottomTab.Screen
          name="TabMenu"
          component={MenuScreen}
          options={{
            title: "Menu",
            tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
          }}
        />
      ) : (
        <BottomTab.Screen
          name="DescarteScreen"
          component={DescarteScreen}
          options={{
            title: "Menu",
            tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} />,
          }}
        />
      )}
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
function doLogout(): any {
  throw new Error("Function not implemented.");
}
