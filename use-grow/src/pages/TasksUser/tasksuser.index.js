import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import BottomTab from "../../components/bottomTab";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';

const tasks = [
  {
    id: 1,
    title: 'Domingo',
    exercices: [
      {
        id: 1,
        title: 'Flexao',
        description: '3x10',
        done: true
      },
      {
        id: 2,
        title: 'Supino',
        description: '3x12',
        done: false
      },
      {
        id: 3,
        title: 'Escada',
        description: '3x15',
        done: false
      },
    ]
  },
  {
    id: 2,
    title: 'Segunda',
    exercices: [
      {
        id: 1,
        title: 'Abdominal',
        description: '3x10',
        done: false
      },
      {
        id: 2,
        title: 'Corda',
        description: '3x12',
        done: false
      },
      {
        id: 3,
        title: 'Esteira',
        description: '3x15',
        done: false
      },
    ]
  },
  {
    id: 3,
    title: 'Terça',
    exercices: []
  }
]
const dinamicTasks = tasks;

export default function Tasks() {
  const navigation = useNavigation();
  const [daySelected, setDaySelected] = useState(1);
  const [dataTasks, setDataTasks] = useState(tasks);

  useEffect(() => {
    setDataTasks(dinamicTasks.filter((item) => item.id === daySelected));
  }, [daySelected]);

  return (
    <View style={styles.container}>

      <View style={styles.headerHome}>
        <Text style={styles.headerTitle}>Acompanhe seus exercícios</Text>
        <View style={styles.weekDaysHeader}>
          <TouchableOpacity style={styles.weekDaysHeaderItem}>
            <Text style={styles.weekDaysHeaderItemText}>Dom</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.weekDaysHeaderItem}>
            <Text style={styles.weekDaysHeaderItemText}>Seg</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.weekDaysHeaderItem}>
            <Text style={styles.weekDaysHeaderItemText}>Ter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.weekDaysHeaderItem}>
            <Text style={styles.weekDaysHeaderItemText}>Qua</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.weekDaysHeaderItem}>
            <Text style={styles.weekDaysHeaderItemText}>Qui</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.weekDaysHeaderItem}>
            <Text style={styles.weekDaysHeaderItemText}>Sex</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.weekDaysHeaderItem}>
            <Text style={styles.weekDaysHeaderItemText}>Sab</Text>
          </TouchableOpacity>
        </View>

      </View>

      <ScrollView>
        {dataTasks.map((item) => (
          <View style={styles.containerTasks} key={item.id}>
            <Text style={styles.titleTasks}>{item.title}</Text>
            {item.exercices.map((exercice) => (
              <View style={styles.containerExercice} key={item.exercices.id}>
                <View style={styles.containerExerciceTitle}>
                  <Text style={styles.titleExercice}>{exercice.title}</Text>
                  <Text style={styles.descriptionExercice}>{exercice.description}</Text>
                </View>
                <TouchableOpacity style={styles.containerExerciceButton}>
                  {(exercice.done) ? <FontAwesome5 name="check" size={24} color="green" /> : <FontAwesome5 name="times" size={24} color="red" />}
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity style={styles.containerExercice}>
              <FontAwesome5 name="plus-square" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <BottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38A69D',
    alignContent: 'center'
  },


  headerHome: {
    height: '20%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  headerTitle: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: '10%',
  },
  weekDaysHeader: {
    display: 'flex',
    flexDirection: 'row',
  },
  weekDaysHeaderItem: {
    margin: 5,
    height: '50%',
    width: '11%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  weekDaysHeaderItemText: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
  },


  containerTasks: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleTasks: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  containerExercice: {
    backgroundColor: '#fff',
    width: '90%',
    height: 70,
    margin: 10,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 5,
      height: 10,
    },
  },
  containerExerciceTitle: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleExercice: {

  },
  descriptionExercice: {

  },
  containerExerciceButton: {

  },
});