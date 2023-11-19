import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Agendamento({ navigation }) {
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
      <TouchableOpacity
        onPress={() => navigation.navigate('Consulta')}
        style={{ alignItems: 'center', marginTop: 50, borderRadius: 25 }}>
        <Text
          style={{
            fontSize: 20,
            borderRadius: 10,
            textAlign: 'center',
            backgroundColor: 'black',
            width: '85%',
            alignItems: 'center',
            height: 80,
            color: 'white',
            padding: '6%',
          }}>
          Agendar consulta
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Retirada')}
        style={{ alignItems: 'center', marginTop: 20, borderRadius: 25 }}>
        <Text
          style={{
            fontSize: 20,
            borderRadius: 10,
            textAlign: 'center',
            backgroundColor: 'black',
            width: '85%',
            alignItems: 'center',
            height: 80,
            color: 'white',
            padding: '6%',
          }}>
          Agendar retirada
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: '50%',
    backgroundColor: '#b5e1d7',
    flex: 1,
  },
  perfil: {
    bottom: '200%',
    left: '10%',
  },
});
