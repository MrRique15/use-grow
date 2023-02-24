import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import BottomTab from "../../../components/bottomTab";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import { userProfileData } from "../../../assets/data";
import { Divider } from 'react-native-elements';

export default function ProfileUser() {

  const [userData, setUserData] = useState(userProfileData);

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

          <Text style={styles.userNameTitle}>{userData.name}</Text>

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
        <Text style={styles.personalInfoItens}>Nome: {userData.name}</Text>
        <Text style={styles.personalInfoItens}>Idade: {userData.age} anos</Text>
        <Text style={styles.personalInfoItens}>Peso: {userData.weight} kg</Text>
        <Text style={styles.personalInfoItens}>Estatura: {userData.height} m</Text>
        <Text style={styles.personalInfoItens}>Objetivos: {userData.goal}</Text>

        <Text style={styles.personalInfoItens}>Exercicios Concluidos: {userData.finishedExercices}</Text>
        <Text style={styles.personalInfoItens}>Dias Utilizando: {userData.daysCount} dias</Text>

        <Text style={styles.personalInfoItens}>Assinatura: Plano {userData.subscription}</Text>
        <Divider style={{ backgroundColor: 'black' }} />
      </View>



      <BottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(80,215, 195, 1)',
    alignItems: 'center',
  },

  header: {
    height: '40%',
    width: '100%',
    alignItems: 'center',
    paddingTop: '10%',
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    backgroundColor: '#abaab1',
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
    backgroundColor: '#abaab1',
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
    color: '#2F2F2F',
    fontSize: 14,
    fontWeight: 'bold'
  },
  personalInfoTitleLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#2F2F2F'
  },


  personalInfo: {
    height: '73%',
    width: '95%',
    alignItems: 'flex-start',
    paddingTop: '5%',
    paddingLeft: '5%',
    marginTop: '3%',
    borderWidth: 1,
    borderColor: '#2F2F2F',
    borderRadius: 30,
  },

  personalInfoItens: {
    color: '#000',
    fontSize: 18,
    width: '95%',
    marginBottom: '2%',
    padding: '2%',
    borderColor: '#000',
  },
});