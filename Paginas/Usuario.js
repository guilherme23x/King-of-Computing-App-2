import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function Usuario({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Ionicons
          name="arrow-back-circle-outline"
          size={50}
          color="black"
          style={styles.perfil}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: 'bold',
          marginLeft: '10%',
          fontSize: 30,
          fontFamily: 'Jost_900Black',
          marginTop: '30%',
        }}>
        {' '}
        Sobre o usuário{' '}
      </Text>
      <Text
        style={{
          marginTop: '10%',
          marginLeft: '10%',
          fontSize: 18,
          fontFamily: 'bold',
        }}>
        {' '}
        Nome{' '}
      </Text>
      <Text
        style={{
          left: '10%',
          width: '80%',
          fontSize: 18,
          top: '2%',
          borderBottomColor: '#000000',
          borderBottomWidth: 2,
        }}>
        Guilherme Gomes da Silva
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
      <Text
        style={{
          left: '10%',
          width: '80%',
          fontSize: 18,
          top: '2%',
          borderBottomColor: '#000000',
          borderBottomWidth: 2,
        }}>
        25685721599
      </Text>
      <Text
        style={{
          marginTop: '10%',
          marginLeft: '10%',
          fontSize: 18,
          fontFamily: 'bold',
        }}>
        {' '}
        ID{' '}
      </Text>
      <Text
        style={{
          left: '10%',
          width: '80%',
          fontSize: 18,
          top: '2%',
          borderBottomColor: '#000000',
          borderBottomWidth: 2,
        }}>
        fgGWQK3g8848
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Editar')}
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
          Editar Informações
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
  perfil: {
    top: '60%',
    left: '10%',
  },
});
