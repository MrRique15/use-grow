import React from "react";
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function BottomTab() {
  const navigation = useNavigation();

  function gotoTasks() {
    navigation.navigate('TasksUser');
  }

  function gotoHome() {
    navigation.navigate('HomeUser');
  }

  function gotoProfile() {
    navigation.navigate('ProfileUser');
  }

  return (
    <Animatable.View style={styles.bottomTab}>
      <TouchableOpacity style={styles.circleArea}>
        <Ionicons name="settings" size={24} color="#2F2F2F" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleArea}>
        <MaterialCommunityIcons name="food-fork-drink" size={30} color="#2F2F2F" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleArea} onPress={gotoHome}>
        <MaterialIcons name="house" size={30} color="#2F2F2F" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleArea} onPress={gotoTasks}>
        <FontAwesome5 name="tasks" size={30} color="#2F2F2F" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.circleArea} onPress={gotoProfile}>
        <MaterialIcons name="person" size={30} color="#2F2F2F" />
      </TouchableOpacity>
    </Animatable.View>
  )
}

const styles = {
  bottomTab: {
    backgroundColor: '#abaab1',
    height: '5%',
    width: '85%',
    position: 'absolute',
    bottom: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    overflow: 'hidden'
  },
  circleArea: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: 'transparent',
    width: '9%',
    height: "100%",
    borderRadius: 10,
    margin: '5%',
  },
}