import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  TextInput,
  Alert,
} from "react-native";

const { width, height } = Dimensions.get('screen')

export default function modalEditExercise(props) {

  let taskData = props.dataTasks[props.exerciseId];

  function finalEditingTask() {
    if (taskData.title == '' || taskData.description == '') {
      Alert.alert('Erro', 'Insira um titulo e uma descrição para o exercício');
      return;
    }
    props.setDataTasks(props.dataTasks.map((item, index) => {
      if (index == props.exerciseId) {
        return taskData;
      }
      return item;
    }));
    props.setEditModalVisible(false);
    props.setExerciseId(null);
    
  }

  function removeTask() {
    props.setDataTasks(props.dataTasks.filter((item, index) => index !== props.exerciseId));
    props.setEditModalVisible(false);
  }

  return (
    <Modal
      transparent={true}
      visible={props.editModalVisible}
      onRequestClose={() => { props.setEditModalVisible(false) }}
    >
      <KeyboardAvoidingView style={styles.modalViewAvoid} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView style={styles.scrollModalView} alignItems={'center'} justifyContent={'center'}>
          <View style={styles.modalView}>
            <View style={styles.headerModal}>
              <Text style={styles.editModalTitle}>Edite seu Exercício</Text>

            </View>

            <View style={styles.taskViewEdit}  >
              <TextInput
                style={styles.inputTextTitle}
                onChangeText={(e) => { taskData.title = e }}
                placeholder='Título'
                placeholderTextColor='lightgray'
              >
                {taskData.title}
              </TextInput>
              <TextInput
                style={styles.inputTextDescription}
                multiline={true}
                onChangeText={(e) => { taskData.description = e }}
                placeholder='Descrição'
                placeholderTextColor='lightgray'
              >
                {taskData.description}
              </TextInput>

              <View style={styles.buttonViews}>
                <TouchableOpacity style={styles.buttonRemoveTask} onPress={() => { removeTask() }}>
                  <Text style={styles.buttonRemoveTaskText}>Remover</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonConfirmEdit} onPress={() => finalEditingTask()}>
                  <Text style={styles.bbuttonConfirmEditText}>Confirmar</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalViewAvoid: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  scrollModalView: {
    width: "100%",
    height: "100%",
  },
  modalView: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: 'center',
    width: width * 0.8,
    height: height * 0.3,
    borderRadius: 20,
  },
  headerModal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  editModalTitle: {
    color: '#000000',
    fontSize: 20,
    marginBottom: '1%',
  },

  taskViewEdit: {
    width: '90%',
    height: '75%',
    alignItems: 'center',
    backgroundColor: '#38A69D',
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputTextTitle: {
    width: '80%',
    height: '20%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: '5%',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 17,
  },
  inputTextDescription: {
    width: '80%',
    height: '20%',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: '5%',
    textAlign: 'center',
    paddingTop: '2%',
    fontSize: 14,
  },
  buttonConfirmEdit: {
    backgroundColor: '#05FF00',
    width: '36%',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5%',
    marginBottom: '4%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3,
    elevation: 5,
  },
  bbuttonConfirmEditText: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
  },
  buttonRemoveTask: {
    backgroundColor: '#FF0000',
    width: '36%',
    height: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonRemoveTaskText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },

  buttonViews: {
    marginTop: '3%',
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})