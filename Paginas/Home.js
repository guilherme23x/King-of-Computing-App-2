import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation,
} from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Usuario')}>
        <Ionicons
          name="ios-people"
          size={42}
          color="black"
          style={styles.perfil}
        />
      </TouchableOpacity>
      <Text style={styles.titulo}>Olá, Guilherme</Text>
      <View style={styles.columnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Agendamento')}
          style={styles.button}>
          <Ionicons name="calendar" size={60} color="black" />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Agendamento</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Melhorias')}
          style={styles.button}>
          <Ionicons name="desktop" size={60} color="black" />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Melhorias</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.columnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Info')}
          style={styles.button}>
          <Ionicons name="information-circle" size={60} color="black" />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Informações</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('SobreCadastro')}
        style={styles.button}>
          <Ionicons name="person" size={60} color="black" />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#b5e1d7',
    flex: 1,
  },
  perfil: {
    top: '60%',
    left: '10%',
  },
  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    top: '15%',
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: '50%',
  },
  button: {
    width: '48%',
    height: '95%',
    borderRadius: 20,
    backgroundColor: '#6faead',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '-55%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
  },
});
