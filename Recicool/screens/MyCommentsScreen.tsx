import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function MyCommentsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Meus comentários</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
