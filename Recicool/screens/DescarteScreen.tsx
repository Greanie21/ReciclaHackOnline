import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function DescarteScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Descarte</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
