import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function Cadastro({navigation}) {
  return (
    <View style={styles.container}>
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
        Cadastre-se para continuar{' '}
      </Text>
      <Text
        style={{
          marginTop: '10%',
          marginLeft: '10%',
          fontSize: 18,
          fontFamily: 'bold',
        }}>
        {' '}
        Nome Completo{' '}
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
      <TouchableOpacity onPress={() => navigation.navigate('Home')}
        style={{ alignItems: 'center', top: 50, borderRadius: 30 }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#b5e1d7',
    flex: 1,
  },
});
