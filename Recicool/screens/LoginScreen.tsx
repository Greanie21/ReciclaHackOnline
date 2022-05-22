import React, { useState } from "react";
import { Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { VViewContainer } from "../components/v-view-container/v-view-container.component";
import { doLogin, doLoginSuccess } from "../ducks/user";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function tryDoLogin() {
    doLogin({ email, password });
    //doLoginSuccess(true));
  }

  return (
    <VViewContainer>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.contentContainer}>
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
            <TouchableOpacity
              style={styles.forgottenPassword}
              activeOpacity={0.5}
            >
              <Text style={styles.forgottenPasswordText}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginBox}>
            <TouchableOpacity
              style={styles.loginButton}
              activeOpacity={0.75}
              onPress={() => tryDoLogin()}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
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
          <View style={styles.socialBox}>
            <TouchableOpacity style={styles.socialButton} activeOpacity={0.75}>
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBox}>
            <TouchableOpacity style={styles.socialButton} activeOpacity={0.75}>
              <Text style={styles.socialText}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerCreateAccount}>
          <TouchableOpacity
            style={styles.createAccountButton}
            activeOpacity={0.5}
          >
            <Text style={styles.createAccountText}>
              Não tem login? Crie uma conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </VViewContainer>
  );
}

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
    color: "#142C6C",
  },
  contentContainer: {
    marginTop: 100,
    height: 500,
    justifyContent: "space-around",
  },
  containerData: {
    paddingLeft: 30,
  },
  emailInput: {
    height: 40,
    width: 300,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  forgottenPasswordContainer: {
    marginLeft: 175,
  },
  forgottenPassword: {},
  forgottenPasswordText: {
    fontFamily: "Source Sans 3",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 19,
    color: "#142C6C",
  },
  loginBox: {
    marginTop: 25,
    marginLeft: 20,
  },
  loginButton: {
    backgroundColor: "#142C6C",
    borderRadius: 11,
    width: 300,
    height: 39,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontFamily: "Source Sans 3",
    fontStyle: "normal",
    color: "#FDFFFC",
    fontSize: 24,
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
  socialBox: {
    marginTop: 25,
    marginHorizontal: 30,
  },
  socialButton: {
    backgroundColor: "#275AE4",
    borderRadius: 11,
    width: 146,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  socialText: {
    color: "#FDFFFC",
    fontSize: 16,
  },
  containerCreateAccount: {
    marginTop: 50,
    alignItems: "center",
  },
  createAccountButton: {},
  createAccountText: {
    color: "#142C6C",
    fontSize: 14,
  },
});
