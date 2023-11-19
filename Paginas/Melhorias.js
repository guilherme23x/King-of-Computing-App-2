import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Ionicons } from '@expo/vector-icons';

export default function Melhorias({ navigation }) {
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
        onPress={() => navigation.navigate('Software')}
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
          Melhorar software
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Hardware')}
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
          Melhorar hardware
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
