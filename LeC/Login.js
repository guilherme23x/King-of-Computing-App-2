import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={require('../Imagens/logo.png')} />
      <Text
        style={{
          marginLeft: '10%',
          fontSize: 30,
          fontFamily: 'Jost_900Black',
          marginTop: '30%',
        }}>
        {' '}
        Bem - Vindo !{' '}
      </Text>
      <Text
        style={{
          marginLeft: '10%',
          fontSize: 20,
          fontFamily: 'Jost_900Black',
          top: 10,
          color: 'grey',
        }}>
        {' '}
        Logue para continuar{' '}
      </Text>
      <Text
        style={{
          marginTop: '10%',
          marginLeft: '10%',
          fontSize: 18,
          fontFamily: 'bold',
        }}>
        {' '}
        CPF{' '}
      </Text>
      <TextInput
        style={{
          left: '10%',
          width: '80%',
          fontSize: 18,
          top: '2%',
          borderBottomColor: '#000000',
          borderBottomWidth: 2,
        }}></TextInput>
      <Text
        style={{
          marginTop: '10%',
          marginLeft: '10%',
          fontSize: 18,
          fontFamily: 'bold',
        }}>
        {' '}
        Senha{' '}
      </Text>
      <TextInput
        style={{
          left: '10%',
          width: '80%',
          fontSize: 18,
          top: '2%',
          borderBottomColor: '#000000',
          borderBottomWidth: 2,
        }}></TextInput>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{ alignItems: 'center', marginTop: 50, borderRadius: 25 }}>
        <Text
          style={{
            fontSize: 20,
            borderRadius: 10,
            textAlign: 'center',
            backgroundColor: 'black',
            width: '70%',
            alignItems: 'center',
            height: 50,
            color: 'white',
            padding: '3%',
          }}>
          Entrar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Cadastro')}
        style={{ alignItems: 'center', marginTop: 20, borderRadius: 25 }}>
        <Text
          style={{
            fontSize: 20,
            borderRadius: 10,
            textAlign: 'center',
            backgroundColor: '#243835',
            width: '70%',
            alignItems: 'center',
            height: 50,
            color: 'white',
            padding: '3%',
          }}>
          Cadastra-se
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Esqueceu')}
        style={{ top: '3%' }}>
        <Text
          style={{
            textAlign: 'center',
            top: '3%',
            fontSize: 20,
            fontFamily: 'bold',
            color: 'grey',
          }}>
          {' '}
          Esqueci minha senha
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#b5e1d7',
    paddingBottom: '150%',
    flex: 1,
  },
  imagem: {
    top: '20%',
    justifyContent: 'center',
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
