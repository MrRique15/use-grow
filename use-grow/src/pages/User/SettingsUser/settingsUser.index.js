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

const userProfileData = {
  "name": "Fulano",
  "surename": "de tal",
  "age": 20,
  "weight": 75.8,
  "height": 1.80,
  "goal": "Emagrecer",
  "finishedExercices": 235,
  "daysCount": 43,
  "subscription": "Premium"
}

export default function SettingsUser() {

  const navigation = useNavigation();
  const [userData, setUserData] = useState(userProfileData);

  const [headerShown, setHeaderShown] = useState(true);

  function toogleHeader() {
    setHeaderShown(!headerShown);
  }

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(80,215, 195, 1)',
    alignItems: 'center',
  },
});