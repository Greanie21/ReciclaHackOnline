import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import { Text, View } from "../components/Themed";
import { VViewContainer } from "../components/v-view-container/v-view-container.component";

const styles = StyleSheet.create({
  containerTitle: {
    paddingTop: 84,
    paddingLeft: 24,
    backgroundColor: "#BFFFB0",
  },
  title: {
    fontFamily: "Source Sans 3",
    fontStyle: "normal",
    fontSize: 36,
    lineHeight: 51,
    color: "#28611A",
  },
  containerData: {
    paddingTop: 210,
    paddingLeft: 30,
    backgroundColor: "#BFFFB0",
  },
  emailInput: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  forgottenPasswordContainer: {
    //position: absolute,
    paddingLeft: 186,
    backgroundColor: "#BFFFB0",
    //paddingTop: 73,
  },
  forgottenPassword: {
    fontFamily: "Source Sans 3",
    fontStyle: "normal",
    //fontWeight: 357,
    fontSize: 13,
    lineHeight: 19,
    /* identical to box height */

    color: "#000000",
  },
});

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <VViewContainer>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.containerData}>
        <TextInput
          style={styles.emailInput}
          placeholder={"Email"}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.emailInput}
          placeholder={"Senha"}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <View style={styles.forgottenPasswordContainer}>
          <Text>Esqueci minha senha</Text>
        </View>
      </View>
    </VViewContainer>
  );
}
