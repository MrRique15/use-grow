import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert
} from "react-native";
import BottomTab from "../../../components/bottomTab";
import { useNavigation } from "@react-navigation/native";
import { 
    Octicons, 
    FontAwesome5, 
    Entypo 
} from '@expo/vector-icons';
import ModalEditEating from "../../../components/modalEditEating";

import { userProfileData } from "../../../assets/data";
import { Divider } from 'react-native-elements';

export default function DietUser() {

    const navigation = useNavigation();
    const [userData, setUserData] = useState('');
    const [eatings, setEatings] = useState(userProfileData["eatings"]);
    const [modalVisible, setModalVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    function removeDietItem(index) {
        Alert.alert(
            "Remover item",
            "Deseja realmente remover este item?",
            [
                {
                    text: "Cancelar",
                    onPress: () => { },
                    style: "cancel"
                },
                {
                    text: "Sim", onPress: () => {
                        setEatings(eatings.filter((e, idx) => {
                            return idx !== index
                        }))
                    }
                }
            ],
            { cancelable: false }
        );
    }

    function editEatingItem(index) {
        setEditingIndex(index);
        setModalVisible(true);
    }

    function addEating() {
        setEatings([...eatings, {
            'name': 'Nova Refeição',
            'foods': []
        }])
    }

    useEffect(() => {
        console.log("Alterando refeições, salvar no BD")
    }, [eatings])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Acompanhe aqui sua dieta</Text>
            </View>

            <ScrollView style={styles.scroll}>
                {eatings.map((item, index) => {
                    return (
                        <View style={styles.eatingTime} key={index}>
                            <View style={styles.eatingTimeHeader}>
                                <Text style={styles.eatingTimeTitle}>{item.name}</Text>
                                <View style={styles.iconView}>
                                    <TouchableOpacity onPress={() => {editEatingItem(index)}}>
                                        <FontAwesome5 name="pencil-alt" size={18} color="black" style={styles.iconViewIcon} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => { removeDietItem(index) }}>
                                        <Entypo name="cross" size={25} color="red" style={styles.iconViewIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Divider style={styles.divider} />
                            </View>
                            {item.foods.map((foodItem, idx) => {
                                return (
                                    <View style={styles.foodItem} key={idx}>
                                        <Octicons name="dot-fill" size={16} color="black" />
                                        <Text style={styles.foodItemText}>{foodItem.name + ' - ' + foodItem.amount}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    )
                })}
                <TouchableOpacity style={styles.addEating} onPress={() => { addEating() }}>
                    <FontAwesome5 name="plus-square" size={24} color="black" />
                </TouchableOpacity>
                <View style={{height: 120, width: '100%'}}/>
            </ScrollView>
            <BottomTab />

            {modalVisible &&
                <ModalEditEating
                    visible={modalVisible}
                    setVisible={setModalVisible} 
                    eatings={eatings} 
                    setEatings={setEatings} 
                    editingIndex={editingIndex} 
                    setEditingIndex={setEditingIndex}
                />
            }
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
        width: '100%',
        height: 100,
        backgroundColor: '#abaab1',
        alignItems: 'center',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerTitle: {
        fontSize: 20,
        color: '#2F2F2F',
        marginTop: '15%',
        fontWeight: 'bold',
    },
    scroll: {
        width: '100%',
    },
    eatingTime: {
        backgroundColor: '#FFFFFF',
        width: '90%',
        padding: 15,
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
        elevation: 5,
    },
    foodItem: {
        marginTop: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    eatingTimeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconView: {
        marginLeft: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconViewIcon: {
        marginLeft: 10,
    },
    eatingTimeTitle: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 18,
    },
    divider: {
        backgroundColor: 'black',
        height: 1
    },
    foodItemText: {
        fontSize: 16,
        color: '#2F2F2F',
        marginLeft: 5,
    },
    addEating: {
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});