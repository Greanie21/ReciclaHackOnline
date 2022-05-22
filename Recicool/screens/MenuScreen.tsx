import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";

import { View } from "../components/Themed";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <List.Section title="Accordions">
          <List.Accordion
            title="Uncontrolled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
  },
  containerUpperButtons: {
    flexDirection: "row",
  },
  upperButtons: {
    flex: 1,
    backgroundColor: "#C1FFD7",
    margin: 20,
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: "red",
    padding: 10,
  },
  findContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  findImageContainer: {
    width: 300,
    height: 300,
  },
  findImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
  bottomContainer: {
    marginBottom: 5,
  },
});
