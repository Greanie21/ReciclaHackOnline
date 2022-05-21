import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";

import { Text, View } from "../components/Themed";
import { VViewContainer } from "../components/v-view-container/v-view-container.component";
import { doLogin } from "../ducks/user";

const styles = StyleSheet.create({
  containerTitle: {
    paddingTop: 84,
    paddingLeft: 24,
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
  },
  emailInput: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  forgottenPasswordContainer: {
    marginLeft: 210,
  },
  forgottenPassword: {
    fontFamily: "Source Sans 3",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 19,
    color: "#000000",
  },
  loginBox: {
    borderRadius: 11,
    width: 300,
    height: 39,
    marginTop: 25,
    marginLeft: 20,
    backgroundColor: "#28611A",
  },
  loginText: {
    margin: "6.19 7.75",
    width: 6.44,
    height: 2.56,
    color: "#fdfffc",
    fontFamily: "Source Sans 3, sans-serif",
    fontSize: 1.5,
    lineHeight: 1.76,
    textAlign: "center",
    textAlignVertical: "center",
  },
  orContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  line1: {
    borderWidth: 1,
    borderColor: "#16340F",
    flex: 2,
    height: 0,
    marginTop: 10,
  },
  orTextContainer: {
    flex: 1,
    alignItems: "center",
  },
  orText: {
    fontFamily: "Source Sans 3, sans-serif",
    fontSize: 22,
    lineHeight: 31,
    display: "flex",
    alignItems: "center",
    textAlign: "center",

    color: "#28611A",
  },
  line2: {
    flex: 2,
    borderWidth: 1,
    borderColor: "#16340F",
    height: 0,
    marginTop: 10,
  },
  containerSocial: {
    flexDirection: "row",
  },
  socialButton: {
    borderRadius: 11,
    width: 146,
    marginTop: 25,
    marginHorizontal: 30,
    backgroundColor: "#28611A",
  },
  containerCreateAccount: {
    marginTop: 50,
    alignItems: "center",
  },
});

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function tryDoLogin() {
    doLogin({ email, password });
  }

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
        <View style={styles.loginBox}>
          <Button
            title="Login"
            color={"white"}
            onPress={() => tryDoLogin}
          ></Button>
        </View>
      </View>
      <View style={styles.orContainer}>
        <View style={styles.line1}></View>
        <View style={styles.orTextContainer}>
          <Text style={styles.orText}>ou</Text>
        </View>
        <View style={styles.line2}></View>
      </View>
      <View style={styles.containerSocial}>
        <View style={styles.socialButton}>
          <Button title="Facebook" color={"white"}></Button>
        </View>
        <View style={styles.socialButton}>
          <Button title="Google" color={"white"}></Button>
        </View>
      </View>
      <View style={styles.containerCreateAccount}>
        <Button title="Não tem login? Crie uma conta" color={"black"}></Button>
      </View>
    </VViewContainer>
  );
}
