import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions
} from "react-native";
import BottomTab from "../../../components/bottomTab";
import { FontAwesome5, Feather } from '@expo/vector-icons';
import ModalEditExercise from "../../../components/modalEditExercise";

const { width, height } = Dimensions.get('screen');

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
      title: 'Supino',
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
  const daysOfTheWeek = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
  const day = new Date().getDay();
  const [daySelected, setDaySelected] = useState(day);
  const [dataTasks, setDataTasks] = useState(tasksUser[daySelected]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [exerciseId, setExerciseId] = useState(null);

  function changeDay(dayInsert) {
    setDaySelected(dayInsert);
  }

  function addExercise() {
    setDataTasks([...dataTasks, {
      id: dataTasks.length + 1,
      title: 'Novo Exercicio ' + (dataTasks.length + 1),
      description: 'NxM',
      done: false
    }]);
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

  function editExercise(index) {
    setExerciseId(index);
    setEditModalVisible(true);
  }

  useEffect(() => {
    setDataTasks(tasksUser[daySelected]);
  }, [daySelected]);

  return (
    <View style={styles.container}>

      <View style={styles.headerHome}>
        <Text style={styles.headerTitle}>Exercícios para Hoje</Text>
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

      <Text style={styles.titleTasks}>{daysOfTheWeek[daySelected]}</Text>
      <ScrollView>
        <View style={styles.containerTasks}>
          {dataTasks.map((exercice,index) => (
            <View style={styles.containerExercice} key={exercice.title}>
              <View style={styles.containerExerciceTitle}>
                <Text style={styles.titleExercice}>{exercice.title.length > 14 ? '' + exercice.title.slice(0, 14) + '...' : exercice.title}</Text>
                <Text style={styles.descriptionExercice}>{exercice.description}</Text>
                <View style={styles.containerExerciceButtons}>
                  <TouchableOpacity onPress={() => { toogleExercise(exercice.id) }} style={{marginRight: '25%'}}>
                    {(exercice.done) ? <Feather name="check-square" size={26} color="lightgreen" /> : <Feather name="square" size={26} color="gray" />}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => { editExercise(index) }}>
                    <Feather name="edit" size={26} color="gray" />
                  </TouchableOpacity>
                </View>

              </View>

            </View>
          ))}
          <TouchableOpacity style={styles.containerExercice} onPress={() => { addExercise() }}>
            <FontAwesome5 name="plus-square" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      {editModalVisible && (
        <ModalEditExercise dataTasks={dataTasks} setDataTasks={setDataTasks} setEditModalVisible={setEditModalVisible} editModalVisible={editModalVisible} exerciseId={exerciseId} setExerciseId={setExerciseId}/>
      )}
      <BottomTab/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(80,215, 195, 1)',
    alignContent: 'center'
  },


  headerHome: {
    height: '17%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#abaab1',
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
    color: '#2F2F2F',
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
    backgroundColor: 'rgba(80,255, 195, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1
  },
  weekDaysHeaderItemText: {
    fontSize: 12,
    color: '#565d67',
    fontWeight: 'bold',
  },


  containerTasks: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  titleTasks: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F2F2F',
    marginTop: '2%',
  },
  containerExercice: {
    backgroundColor: '#fff',
    width: '90%',
    height: 70,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  containerExerciceTitle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '90%',
    height: '50%',
  },
  titleExercice: {
    width: '40%',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2F2F2F'
  },
  descriptionExercice: {
    fontSize: 16,
    width: '40%',
    textAlign: 'center',
  },
  containerExerciceButtons: {
    width: '20%',
    alignContent: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
})