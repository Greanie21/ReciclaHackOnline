import { Button, Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function Home({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <View style={styles.containerUpperButtons}>
        <View style={styles.upperButtons}>
          <View style={styles.imageContainer}>{/* Imagem */}</View>
          <Button title="Perfil"></Button>
        </View>
        <View style={styles.upperButtons}>
          <View style={styles.imageContainer}>{/* Imagem */}</View>
          <Button title="Pontos"></Button>
        </View>
        <View style={styles.upperButtons}>
          <View style={styles.imageContainer}>{/* Imagem */}</View>
          <Button title="Suas Dicas"></Button>
        </View>
      </View>
      <View style={styles.findContainer}>
        <Text>Encontre a cooperativa mais próxima:</Text>
        <View style={styles.findImage}>{/* Imagem */}</View>
        <Text>Veja todas as cooperativas</Text>
      </View>
      <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  findImage: {
    width: "100%",
    height: "50%",
    paddingHorizontal: 1,
    paddingVertical: 1,
    backgroundColor: "red",
  },
});
