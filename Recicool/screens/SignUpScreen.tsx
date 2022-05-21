import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { VViewContainer } from "../components/v-view-container/v-view-container.component";

export default function SignUpScreen() {
  return (
    <VViewContainer>
      <View style={cadastroStyles.cadastro}>
        <View style={cadastroStyles.Rectangle1} />
        <View style={cadastroStyles.grid}>
          <View style={cadastroStyles.grid} />
          <View style={cadastroStyles.grid} />
          <View style={cadastroStyles.grid} />
          <View style={cadastroStyles.grid} />
          <View style={cadastroStyles.grid} />
          <View style={cadastroStyles.grid} />
          <View style={cadastroStyles.grid} />
          <View style={cadastroStyles.grid} />
          <View style={cadastroStyles.grid} />
          <View style={cadastroStyles.grid} />
        </View>
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
  grid: {
    display: "none",
    width: 22.5,
    height: 42.38,
  },
  grid: {
    margin: "0.63 0",
    width: 0.63,
    height: 41.75,
    backgroundColor: "rgba(236, 158, 158, 0.5)",
  },
  grid: {
    margin: "21.25 0",
    width: 0.63,
    height: 41.75,
    backgroundColor: "rgba(236, 158, 158, 0.5)",
  },
  grid: {
    margin: "10.94 0",
    width: 0.63,
    height: 41.75,
    backgroundColor: "rgba(236, 158, 158, 0.5)",
  },
  grid: {
    margin: "5.81 0",
    width: 0.63,
    height: 41.75,
    backgroundColor: "rgba(236, 158, 158, 0.5)",
  },
  grid: {
    margin: "16.13 0.63",
    width: 0.63,
    height: 41.75,
    backgroundColor: "rgba(236, 158, 158, 0.5)",
  },
  grid: {
    margin: "22.5 0.63",
    width: 0.63,
    height: 22.5,
    backgroundColor: "rgba(236, 158, 158, 0.5)",
  },
  grid: {
    margin: "22.5 38.75",
    width: 0.63,
    height: 22.5,
    backgroundColor: "rgba(236, 158, 158, 0.5)",
  },
  grid: {
    margin: "22.5 19.69",
    width: 0.63,
    height: 22.5,
    backgroundColor: "rgba(236, 158, 158, 0.5)",
  },
  grid: {
    margin: "22.5 10.13",
    width: 0.63,
    height: 22.5,
    backgroundColor: "rgba(236, 158, 158, 0.5)",
  },
  grid: {
    margin: "22.5 29.25",
    width: 0.63,
    height: 22.5,
    backgroundColor: "rgba(236, 158, 158, 0.5)",
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
