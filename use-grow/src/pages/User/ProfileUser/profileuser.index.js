import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import BottomTab from "../../../components/bottomTab";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import { Divider } from 'react-native-elements';

export default function ProfileUser() {

  const navigation = useNavigation();

  const [headerShown, setHeaderShown] = useState(true);

  function toogleHeader() {
    setHeaderShown(!headerShown);
  }

  return (
    <View style={styles.container}>
      {headerShown == true ? (
        <View style={styles.header}>
          <View>
            <Ionicons name="person-circle-outline" size={150} color="#FFFFFF" />
          </View>

          <Text style={styles.userNameTitle}>Nome do Usuário</Text>

          <TouchableOpacity 
            style={styles.touchableLine} 
            onPress={() => {toogleHeader()}}
          >
            <View style={styles.pressableLine} />
          </TouchableOpacity>

        </View>
      ) : (
        <View style={styles.headerShort}>
          <TouchableOpacity 
            style={styles.touchableLineShort}
            onPress={() => {toogleHeader()}}
          >
            <View style={styles.pressableLine} />
          </TouchableOpacity>
        </View>
      )}


      <View style={styles.personalInfoTitle}>
        <View style={styles.personalInfoTitleLine} />
        <View style={{ width: '28%' }}>
          <Text style={styles.personalInfoTitleText}>Informações Pessoais</Text>
        </View>
        <View style={styles.personalInfoTitleLine} />
      </View>

      <View style={styles.personalInfo}>
        <Text>Nome</Text>
        <Text>Idade</Text>
        <Text>Peso</Text>
        <Text>Estatura</Text>
        <Text>Objetivos</Text>

        <Text>Exercicios Concluidos</Text>
        <Text>Dias Utilizando</Text>

        <Text>Assinatura</Text>
        <Divider style={{ backgroundColor: 'black' }} />
      </View>



      <BottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38A69D',
    alignItems: 'center',
  },

  header: {
    height: '40%',
    width: '100%',
    alignItems: 'center',
    paddingTop: '10%',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    backgroundColor: 'gray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1.45,
    shadowRadius: 3.94,
    elevation: 5,
  },
  userNameTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  touchableLine: {
    width: '100%',
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  touchableLineShort: {
    width: '100%',
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  pressableLine: {
    height: 2,
    backgroundColor: '#FFFFFF',
    width: '50%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.45,
    shadowRadius: 3.94,
    elevation: 5,
  },
  headerShort: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    paddingTop: '5%',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    backgroundColor: 'gray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1.45,
    shadowRadius: 3.94,
    elevation: 5,
  },


  personalInfoTitle: {
    height: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4%',
    width: '95%'
  },
  personalInfoTitleText: {
    width: '100%',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  personalInfoTitleLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#FFFFFF'
  },


  personalInfo: {
    height: '73%',
    width: '95%',
    alignItems: 'center',
    paddingTop: '3%',
    marginTop: '3%',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 30,
  },
});