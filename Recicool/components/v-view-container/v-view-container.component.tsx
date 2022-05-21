import * as React from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ViewContainerProps = {
  options?: any;
  children?: any;
  backgroundColor?: any;
  tabBar?: any;
};

export function VViewContainer({
  options,
  children,
  backgroundColor,
  tabBar,
}: ViewContainerProps) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View
        style={[
          {
            flex: 1,
            backgroundColor: backgroundColor ? backgroundColor : "#BFFFB0",
          },
        ]}
      >
        {children}
        {tabBar ? (
          <SafeAreaView edges={["bottom"]}>
            <View style={{ height: 60 }} />
          </SafeAreaView>
        ) : null}
      </View>
    </>
  );
}
