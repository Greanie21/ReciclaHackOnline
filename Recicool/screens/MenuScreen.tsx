import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export default function MenuScreen() {
  const [open, setOpen] = useState(false);
  const [openT2, setOpenT2] = useState("");
  const [openT3, setOpenT3] = useState("");

  function goToPage(page: string) {
    //todo - função que vai para cada pagina final, ex:PET (garrafas e embalagens)
  }

  function renderT3(name: string) {
    return (
      <TouchableOpacity onPress={() => setOpenT3(name)}>
        <View style={styles.accordionContainerT3}>
          <View style={styles.containerTextT3}>
            <Text style={styles.fontT3}>{name}</Text>
          </View>
        </View>
        {openT3 === name ? <View>{preRenderT4(name)}</View> : null}
      </TouchableOpacity>
    );
  }

  function preRenderT4(name: string) {
    switch (name) {
      case "Plástico":
        return (
          <>
            {renderT4("PET (garrafas e embalagens)")}
            {renderT4("PEAD (tampas e embalagens)")}
            {renderT4("PVC (potes e embalagens)")}
            {renderT4("PEBD (sacolas e embalagens)")}
            {renderT4("PP (frascos e embalagens)")}
            {renderT4("PS (potes e frascos)")}
          </>
        );
      case "Papel e Papelão":
        return (
          <>
            {renderT4("Cadernos usados")}
            {renderT4("Caixa de pizza")}
          </>
        );
      case "Cartonados":
        return (
          <>
            {renderT4("Caixas com tampa")}
            {renderT4("Caixas sem tampa")}
          </>
        );
      case "Vidro":
        return (
          <>
            {renderT4("Garrafas de vidro")}
            {renderT4("Cacos de vidro")}
          </>
        );
      case "Metal":
        return (
          <>
            {renderT4("Latinhas de bebida")}
            {renderT4("Enlatados")}
          </>
        );
      case "Outros":
        return (
          <>
            {renderT4("Embalagens de remédio")}
            {renderT4("Pilhas e baterias")}
          </>
        );
      default:
        return null;
    }
  }

  function renderT4(name: string) {
    return (
      <TouchableOpacity onPress={() => goToPage(name)}>
        <View style={styles.accordionContainerT4}>
          <View style={styles.containerTextT4}>
            <Text style={styles.fontT4}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <TouchableOpacity>
            <View style={styles.containerTextT1}>
              <Text style={styles.fontT1}>Sobre</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <View>
              <View style={styles.accordionContainerT1}>
                <View style={styles.containerTextT1}>
                  <Text style={styles.fontT1}>Descarte</Text>
                </View>
              </View>
              {open ? (
                <View>
                  <TouchableOpacity onPress={() => setOpenT2("Recicláveis")}>
                    <View style={styles.accordionContainerT2}>
                      <View style={styles.containerTextT2}>
                        <Text style={styles.fontT2}>Recicláveis</Text>
                      </View>
                    </View>
                    {openT2 === "Recicláveis" ? (
                      <View>
                        {renderT3("Plástico")}
                        {renderT3("Papel e Papelão")}
                        {renderT3("Cartonados")}
                        {renderT3("Vidro")}
                        {renderT3("Metal")}
                        {renderT3("Outros")}
                      </View>
                    ) : null}
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setOpenT2("Não Recicláveis")}
                  >
                    <View style={styles.accordionContainerT2}>
                      <View style={styles.containerTextT2}>
                        <Text style={styles.fontT2}>Não Recicláveis</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setOpenT2("Orgânicos")}>
                    <View style={styles.accordionContainerT2}>
                      <View style={styles.containerTextT2}>
                        <Text style={styles.fontT2}>Orgânicos</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.containerTextT1}>
              <Text style={styles.fontT1}>Cooperativas</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.containerTextT1}>
              <Text style={styles.fontT1}>Empresas</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accordionContainerT1: {},
  containerTextT1: {
    borderWidth: 3,
  },
  fontT1: {
    fontSize: 30,
    alignSelf: "center",
  },
  accordionContainerT2: {
    marginLeft: 10,
  },
  containerTextT2: {
    borderWidth: 2,
  },
  fontT2: {
    fontSize: 25,
    alignSelf: "center",
  },
  accordionContainerT3: {
    marginLeft: 20,
  },
  containerTextT3: {
    borderWidth: 1,
  },
  fontT3: {
    fontSize: 20,
    alignSelf: "center",
  },
  accordionContainerT4: {
    marginLeft: 30,
  },
  containerTextT4: {
    borderWidth: 1,
  },
  fontT4: {
    fontSize: 15,
    alignSelf: "center",
  },
});
