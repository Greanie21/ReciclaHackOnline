import React from "react";
import { ScrollView, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Pesquisa</Text>
        <TextInput
          //style={styles.emailInput}
          placeholder={"Pesquisa"}
          //onChangeText={(text) => setEmail(text)}
          //value={email}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
