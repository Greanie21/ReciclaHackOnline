import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pontuação</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.pontosContainer}>
        <View style={styles.pontoContainer}>
          <View style={styles.imagemContainer}>
            <View style={styles.imagem}></View>
            <Text style={styles.textoImagem}>1 dica</Text>
          </View>
          <Text style={styles.textoSeparator}> = </Text>
          <View style={styles.moedaContainer}>
            <View style={styles.moeda}></View>
            <Text style={styles.textoMoeda}>1 ponto</Text>
          </View>
        </View>
        <View style={styles.pontoContainer}>
          <View style={styles.imagemContainer}>
            <View style={styles.imagem}></View>
            <Text style={styles.textoImagem}>1 curtida na sua dica</Text>
          </View>
          <Text style={styles.textoSeparator}> = </Text>
          <View style={styles.moedaContainer}>
            <View style={styles.moeda}></View>
            <Text style={styles.textoMoeda}>2 pontos</Text>
          </View>
        </View>
        <View style={styles.pontoContainer}>
          <View style={styles.imagemContainer}>
            <View style={styles.imagem}></View>
            <Text style={styles.textoImagem}>Convidar um amigo para o app</Text>
          </View>
          <Text style={styles.textoSeparator}> = </Text>
          <View style={styles.moedaContainer}>
            <View style={styles.moeda}></View>
            <Text style={styles.textoMoeda}>3 pontos</Text>
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
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 38,
    marginLeft: 20,
    color: '#142C6C'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  pontosContainer: {
    justifyContent: 'space-around',
    height: '70%',
  },
  pontoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 84,
    marginRight: 'auto'
  },
  imagemContainer: {
    alignItems: 'center',
  },
  imagem: {
    backgroundColor: 'red',
    height: 55,
    width: 60,
    padding: 30,
  },
  textoImagem: {
    fontSize: 20,
    width: 200,
    textAlign: 'center',
  },
  textoSeparator: {
    fontWeight: '400',
    fontSize: 30,
  },
  moedaContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    marginLeft: 20,
  },
  moeda: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: 60,
    height: 60,
    marginBottom: 5
  },
  textoMoeda: {
    fontSize: 20,
    
  },
});
