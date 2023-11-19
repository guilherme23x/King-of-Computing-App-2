import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';

export default function Retirada({ navigation }) {
  const [selectedDate, setSelectedDate] = useState('');
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
          marginLeft: '10%',
          fontSize: 34,
          fontFamily: 'Jost_900Black',
          marginTop: '30%',
          fontWeight: 'bold',
        }}>
        {' '}
        Agendar retirada{' '}
      </Text>
      <Text
        style={{
          marginTop: '10%',
          marginLeft: '10%',
          fontSize: 18,
          fontFamily: 'bold',
        }}>
        {' '}
        Motivo{' '}
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
        Data{' '}
      </Text>
      <DatePicker
        style={{ marginLeft: '10%', width: '80%' }}
        date={selectedDate}
        mode="date"
        placeholder="Selecione uma data"
        format="YYYY-MM-DD"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        customStyles={{
          dateInput: {
            borderBottomColor: '#000000',
            borderBottomWidth: 2,
          },
        }}
        onDateChange={(date) => setSelectedDate(date)}
      />
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
          Agendar
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
