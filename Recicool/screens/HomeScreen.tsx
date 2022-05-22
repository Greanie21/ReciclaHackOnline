import React from "react";
import { Image, ScrollView } from "react-native";
import { Button, Pressable, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/images/logo.png")} />
        </View>
        <View style={styles.containerUpperButtons}>
          <TouchableOpacity style={styles.upperButtons}>
            <View style={styles.imageContainer}>{/* Imagem */}</View>
            <Text>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.upperButtons}>
            <View style={styles.imageContainer}>{/* Imagem */}</View>
            <Text>Pontos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.upperButtons}>
            <View style={styles.imageContainer}>{/* Imagem */}</View>
            <Text>Suas Dicas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.findContainer}>
          <Text>Encontre a cooperativa mais próxima:</Text>

          <View style={styles.findImageContainer}>
            <Image
              style={styles.findImage}
              source={require("../assets/images/mapa.jpeg")}
            />
          </View>
          <Text>Veja todas as cooperativas</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text>Conheça as empresas cadastradas:</Text>

          <View style={styles.containerUpperButtons}>
            <View style={styles.upperButtons}>
              <View style={styles.imageContainer}>{/* Imagem */}</View>
            </View>
            <View style={styles.upperButtons}>
              <View style={styles.imageContainer}>{/* Imagem */}</View>
            </View>
            <View style={styles.upperButtons}>
              <View style={styles.imageContainer}>{/* Imagem */}</View>
            </View>
          </View>
        </View>
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
