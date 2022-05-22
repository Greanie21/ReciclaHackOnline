import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import { Text, View } from "../components/Themed";
import { VViewContainer } from "../components/v-view-container/v-view-container.component";
import { isOnLoginPage } from "../ducks/user";

export default function SignUpScreen() {
  const dispatch = useDispatch();
  function goBackToLogin() {
    dispatch(isOnLoginPage());
  }
  return (
    <VViewContainer>
      <View style={styles.cadastro}>
        <View style={styles.tipoCadastro}>
          <View style={styles.tipoBox}>
            <TouchableOpacity style={styles.tipo} activeOpacity={0.75}>
              <Text style={styles.tipoTitle}>Sou uma pessoa física</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tipoBox}>
            <TouchableOpacity style={styles.tipo} activeOpacity={0.75}>
              <Text style={styles.tipoTitle}>Sou uma empresa</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tipoBox}>
            <TouchableOpacity style={styles.tipo} activeOpacity={0.75}>
              <Text style={styles.tipoTitle}>Sou uma cooporativa</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.cadastroButton}
          activeOpacity={0.5}
          onPress={() => goBackToLogin()}
        >
          <Text style={styles.JtemcadastroLogin}>Já tem cadastro? Login</Text>
        </TouchableOpacity>
      </View>
    </VViewContainer>
  );
}

const styles = StyleSheet.create({
  cadastro: {
    paddingTop: 84,
    paddingLeft: 24,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tipoCadastro: {
    height: "50%",
    justifyContent: "space-around",
  },
  tipoBox: {},
  tipo: {
    width: 300,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#275AE4",
    alignItems: "center",
    justifyContent: "center",
  },
  tipoTitle: {
    fontSize: 23,
    color: "#FDFFFC",
  },
  cadastroButton: {},
  JtemcadastroLogin: {
    color: "#142C6C",
  },
});
