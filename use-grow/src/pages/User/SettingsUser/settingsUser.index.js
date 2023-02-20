import React, { useCallback, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert,
    Switch,
} from "react-native";
import BottomTab from "../../../components/bottomTab";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { Entypo, AntDesign } from '@expo/vector-icons';

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

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [headerShown, setHeaderShown] = useState(true);

    function toogleHeader() {
        setHeaderShown(!headerShown);
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.settingsTitleView}>
                    <Text style={styles.settingsTitle}>Configurações</Text>
                </View>

                

                <TouchableOpacity style={styles.settingsItemList}>
                    <Entypo name="shopping-cart" size={24} color="black" />
                    <Text style={styles.settingsItemText}>Gerenciar Assinatura</Text>
                </TouchableOpacity>

                <View style={styles.settingsItemList}>
                    <Switch
                        trackColor={{false: '#767577', true: '#767577'}}
                        thumbColor={isEnabled ? '#3e3e3e' : '#f4f3f4'}
                        ios_backgroundColor="#767577"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={styles.settingsItemText}>{isEnabled? 'Tema Escuro': 'Tema Claro'}</Text>
                </View>

                <TouchableOpacity style={styles.settingsItemList}>
                    <Entypo name="help" size={24} color="black" />
                    <Text style={styles.settingsItemText}>Suporte</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingsItemList} onPress={() => [navigation.navigate('SignIn')]}>
                    <Entypo name="log-out" size={24} color="red" />
                    <Text style={styles.settingsItemText}>Sair</Text>
                </TouchableOpacity>

                
            </View>
            
            <BottomTab/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(80,215, 195, 1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainView: {
        width: '90%',
        height: '80%',
        alignItems: 'center',
    },
    settingsTitleView: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    settingsTitle:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    settingsItemList: {
        width: '100%',
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    settingsItemText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
    }
});