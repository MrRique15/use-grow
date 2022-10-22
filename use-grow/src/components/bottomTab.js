import React from "react";
import { 
    MaterialIcons,
    FontAwesome5,
    MaterialCommunityIcons,
    Ionicons,
} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function BottomTab() {
    const navigation = useNavigation();

    function gotoTasks() {
        navigation.navigate('TasksUser');
    }

    function gotoHome() {
        navigation.navigate('HomeUser');
    }

    return(
        <Animatable.View delay={50} animation='slideInUp' style={styles.bottomTab}>
            <TouchableOpacity style={styles.circleArea}>
                <Ionicons name="settings" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleArea}>
                <MaterialCommunityIcons name="food-fork-drink" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleArea} onPress={gotoHome}>
                <MaterialIcons name="house" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleArea} onPress={gotoTasks}>
                <FontAwesome5 name="tasks" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleArea}>
                <MaterialIcons name="person" size={30} color="black" />
            </TouchableOpacity>
        </Animatable.View>
    )
}

const styles = {
    bottomTab: {
        backgroundColor: 'gray',
        height: '6%',
        width: '85%',
        position: 'absolute',
        bottom: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignSelf:'center',
        overflow:'hidden'
    },
    circleArea:{
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        padding: 3,
        backgroundColor: 'transparent',
        width: '9%',
        height:"100%",
        borderRadius: 10,
        margin: '5%',
    },
}