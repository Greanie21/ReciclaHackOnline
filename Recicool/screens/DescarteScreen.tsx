import React from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { Text, View } from "../components/Themed";
import { isOnDescartePage } from "../ducks/user";

export default function DescarteScreen() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleConteiner}>
          <Text style={styles.title}>VIDRO</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.contentTitle}>Cacos de Vidro</Text>
          <Text style={styles.content}>
            O vidro é um material totalmente...
          </Text>
          <Text style={styles.contentTitle}>Dica !</Text>
          <Text style={styles.content}>
            Junte os cacos de vidro e coloque-os no meio de uma folha de papel
            ou jornal que já iria ser descartada. Embrulhe com cuidado para
            garantir que nada irá cair para fora.
          </Text>
          <Text style={styles.contentMessage}>
            Entre em contato com uma cooperativa que faça a reciclagem do
            material!
          </Text>
          <Text style={styles.contentTip}>Essa dica foi utíl?</Text>
        </View>
        <View style={styles.commentContainer}>
          <Text style={styles.commentTitle}>
            Têm uma dica para dar? Comente aqui!
          </Text>
          <TextInput
            style={styles.comment}
            placeholder="Dica"
            multiline={true}
          ></TextInput>
        </View>
        <TouchableOpacity onPress={() => dispatch(isOnDescartePage(false))}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 84,
  },
  titleConteiner: {
    backgroundColor: "#142C6C",
    justifyContent: "center",
    height: 47,
    paddingLeft: 24,
    marginBottom: 25,
  },
  title: {
    fontWeight: "500",
    color: "#fff",
    fontSize: 30,
  },
  contentContainer: {
    backgroundColor: "#142C6C",
    width: 325,
    marginHorizontal: 35,
    paddingTop: 40,
    paddingLeft: 20,
    paddingBottom: 25,
    borderRadius: 36,
    marginBottom: 15,
  },
  contentTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "500",
  },
  content: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 10,
    width: 260,
  },
  contentMessage: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 10,
    width: 260,
    textDecorationLine: "underline",
  },
  contentTip: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 10,
    width: 260,
  },
  commentContainer: {
    backgroundColor: "#C1FFD7",
    width: 325,
    minHeight: 110,
    marginHorizontal: 35,
    borderRadius: 36,
    paddingVertical: 15,
  },
  commentTitle: {
    color: "#142C6C",
    alignSelf: "center",
    marginBottom: 15,
  },
  comment: {
    width: "80%",
    marginLeft: 25,
    color: "#142C6C",
  },
});
