import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { VViewContainer } from "../components/v-view-container/v-view-container.component";

export default function SignUpScreen() {
  return (
    <VViewContainer>
      <View style={cadastroStyles.cadastro}>
        <Text style={cadastroStyles.JtemcadastroLogin}>
          Já tem cadastro? Login
        </Text>
        <View style={cadastroStyles.Rectangle4} />
        <View style={cadastroStyles.Rectangle5} />
        <View style={cadastroStyles.Rectangle6} />
        <Text style={cadastroStyles.Souumaempresa}>Sou uma empresa</Text>
        <Text style={cadastroStyles.Souumapessoafsica}>
          Sou uma pessoa física
        </Text>
        <Text style={cadastroStyles.Souumacooperativa}>
          Sou uma cooperativa
        </Text>
      </View>
    </VViewContainer>
  );
}

const cadastroStyles = StyleSheet.create({
  cadastro: {
    width: 22.5,
    height: 40,
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: 0.06,
  },
  Rectangle1: {
    width: 22.5,
    height: 40,
    backgroundColor: "#bfffb0",
  },
  JtemcadastroLogin: {
    margin: "7.06 33.69",
    width: 8.31,
    height: 1.25,
    color: "#000000",
    fontFamily: "Source Sans 3, sans-serif",
    fontSize: 0.88,
    lineHeight: 1.03,
    textAlign: "center",
  },
  Rectangle4: {
    margin: "1.88 10.63",
    width: 18.75,
    height: 2.44,
    backgroundColor: "#28611a",
    borderColor: "transparent",
    borderWidth: 0.06,
    borderRadius: 0.69,
  },
  Rectangle5: {
    margin: "1.88 15.63",
    width: 18.75,
    height: 2.44,
    backgroundColor: "#28611a",
    borderColor: "transparent",
    borderWidth: 0.06,
    borderRadius: 0.69,
  },
  Rectangle6: {
    margin: "1.88 20.63",
    width: 18.75,
    height: 2.44,
    backgroundColor: "#28611a",
    borderColor: "transparent",
    borderWidth: 0.06,
    borderRadius: 0.69,
  },
  Souumaempresa: {
    margin: "4.13 15.56",
    width: 14.25,
    height: 2.56,
    color: "#fdfffc",
    fontFamily: "Source Sans 3, sans-serif",
    fontSize: 1.5,
    lineHeight: 1.76,
    textAlign: "center",
    textAlignVertical: "center",
  },
  Souumapessoafsica: {
    margin: "4.13 10.56",
    width: 14.25,
    height: 2.56,
    color: "#fdfffc",
    fontFamily: "Source Sans 3, sans-serif",
    fontSize: 1.5,
    lineHeight: 1.76,
    textAlign: "center",
    textAlignVertical: "center",
  },
  Souumacooperativa: {
    margin: "4.13 20.56",
    width: 14.25,
    height: 2.56,
    color: "#fdfffc",
    fontFamily: "Source Sans 3, sans-serif",
    fontSize: 1.5,
    lineHeight: 1.76,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
