import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SobreCadastro({ navigation }) {
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
        Cadastro do PC{' '}
      </Text>
      <Text
        style={{
          marginTop: '10%',
          marginLeft: '10%',
          fontSize: 18,
          fontFamily: 'bold',
          fontWeight: 'bold',
        }}>
        {' '}
        Processador{' '}
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
        I3 de 2º Geração
      </Text>
      <Text
        style={{
          marginTop: '10%',
          marginLeft: '10%',
          fontSize: 18,
          fontFamily: 'bold',
          fontWeight: 'bold',
        }}>
        {' '}
        Memória Ram{' '}
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
        3 GB
      </Text>
      <Text
        style={{
          marginTop: '10%',
          marginLeft: '10%',
          fontSize: 18,
          fontFamily: 'bold',
          fontWeight: 'bold',
        }}>
        {' '}
        HDD / SSd{' '}
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
        HD de 500GB
      </Text>
      <Text
        style={{
          marginTop: '10%',
          marginLeft: '10%',
          fontSize: 18,
          fontFamily: 'bold',
          fontWeight: 'bold',
        }}>
        {' '}
        Placa de vídeo{' '}
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
        No processador
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
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
          OK
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
