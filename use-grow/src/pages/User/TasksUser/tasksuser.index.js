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
import { FontAwesome5 } from '@expo/vector-icons';

const tasksUser = [
  [
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
  ],
  [
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
  ],
  [],
  [],
  [],
  [
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
  ],
  [],
]

export default function TasksUser() {
  const daysOgTheWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  const day = new Date().getDay();
  const navigation = useNavigation();
  const [daySelected, setDaySelected] = useState(day);
  const [dataTasks, setDataTasks] = useState(tasksUser[daySelected]);

  function changeDay(dayInsert) {
    setDaySelected(dayInsert);
  }

  function addExercise() {
    console.log('Adicionando exercício');
  }

  function toogleExercise(id) {
    if (day == daySelected) {
      setDataTasks(dataTasks.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      }));
      return;
    }
    Alert.alert('Atenção', 'Não é possível concluir exercícios de outros dias da semana.');
  }

  useEffect(() => {
    setDataTasks(tasksUser[daySelected]);
  }, [daySelected]);

  return (
    <View style={styles.container}>

      <View style={styles.headerHome}>
        <Text style={styles.headerTitle}>Acompanhe seus exercícios</Text>
        <View style={styles.weekDaysHeader}>
          <TouchableOpacity
            style={daySelected === 0 ? styles.weekDaysHeaderItemSelected : styles.weekDaysHeaderItem}
            onPress={() => { changeDay(0) }}
          >
            <Text style={styles.weekDaysHeaderItemText}>Dom</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={daySelected === 1 ? styles.weekDaysHeaderItemSelected : styles.weekDaysHeaderItem}
            onPress={() => { changeDay(1) }}
          >
            <Text style={styles.weekDaysHeaderItemText}>Seg</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={daySelected === 2 ? styles.weekDaysHeaderItemSelected : styles.weekDaysHeaderItem}
            onPress={() => { changeDay(2) }}
          >
            <Text style={styles.weekDaysHeaderItemText}>Ter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={daySelected === 3 ? styles.weekDaysHeaderItemSelected : styles.weekDaysHeaderItem}
            onPress={() => { changeDay(3) }}
          >
            <Text style={styles.weekDaysHeaderItemText}>Qua</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={daySelected === 4 ? styles.weekDaysHeaderItemSelected : styles.weekDaysHeaderItem}
            onPress={() => { changeDay(4) }}
          >
            <Text style={styles.weekDaysHeaderItemText}>Qui</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={daySelected === 5 ? styles.weekDaysHeaderItemSelected : styles.weekDaysHeaderItem}
            onPress={() => { changeDay(5) }}
          >
            <Text style={styles.weekDaysHeaderItemText}>Sex</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={daySelected === 6 ? styles.weekDaysHeaderItemSelected : styles.weekDaysHeaderItem}
            onPress={() => { changeDay(6) }}
          >
            <Text style={styles.weekDaysHeaderItemText}>Sab</Text>
          </TouchableOpacity>
        </View>

      </View>

      <Text style={styles.titleTasks}>{daysOgTheWeek[daySelected]}</Text>
      <ScrollView>
        <View style={styles.containerTasks}>
          {dataTasks.map((exercice) => (
            <View style={styles.containerExercice} key={exercice.title}>
              <View style={styles.containerExerciceTitle}>
                <Text style={styles.titleExercice}>{exercice.title}</Text>
                <Text style={styles.descriptionExercice}>{exercice.description}</Text>
              </View>
              <TouchableOpacity style={styles.containerExerciceButton} onPress={() => { toogleExercise(exercice.id) }}>
                {(exercice.done) ? <FontAwesome5 name="check" size={24} color="green" /> : <FontAwesome5 name="times" size={24} color="red" />}
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity style={styles.containerExercice} onPress={() => { addExercise() }}>
            <FontAwesome5 name="plus-square" size={24} color="black" />
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'gray',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.45,
    shadowRadius: 3.84,
    elevation: 5,
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
    marginTop: '2%',
  },
  weekDaysHeaderItem: {
    margin: 5,
    height: '50%',
    width: '11%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1
  },
  weekDaysHeaderItemSelected: {
    margin: 5,
    height: '52%',
    width: '12%',
    backgroundColor: '#38A69D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#39FF14',
    borderWidth: 2
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
    marginTop: '2%',
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