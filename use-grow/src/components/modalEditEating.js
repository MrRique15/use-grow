import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Alert,
} from "react-native";
import { 
    Entypo,
} from '@expo/vector-icons';

export default function ModalEditEating(props) {

    const [eatingData, setEatingData] = useState(props.eatings[props.editingIndex])

    function finalEditingEating() {
        if (eatingData.name == '' ) {
            Alert.alert('Inválido', 'Insira um nome para a refeição');
            return;
        }
        props.setEatings(props.eatings.map((item, index) => {
            if (index == props.editingIndex) {
                return eatingData;
            }
            return item;
        }));
        props.setVisible(false);
        props.setEditingIndex(null);

    }

    function removeEating() {
        props.setEatings(props.eatings.filter((item, index) => index !== props.editingIndex));
        props.setVisible(false);
    }

    function removeFood(index) {
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
                        setEatingData({...eatingData, 
                            foods: eatingData.foods.filter((item, idx) => idx !== index)
                        })
                    }
                }
            ],
            { cancelable: false }
        );
    }

    function addNewFood(){
        setEatingData({...eatingData, 
            foods: [...eatingData.foods, {name: '', amount: ''}]
        })
    }
    return (
        <Modal
            transparent={true}
            visible={props.visible}
            onRequestClose={() => { props.setVisible(false) }}
        >
            <KeyboardAvoidingView style={styles.modalViewAvoid} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={styles.backModalView}>
                    <View style={styles.modalView}>
                        <View style={styles.headerModal}>
                            <Text style={styles.editModalTitle}>Edite sua refeição</Text>
                        </View>

                        <View style={styles.eatingViewEdit}  >
                            <TextInput
                                style={styles.inputTextTitle}
                                onChangeText={(e) => {setEatingData({ ...eatingData, name: e })}}
                                placeholder='Nome da refeição'
                                placeholderTextColor='lightgray'
                            >
                                {eatingData.name}
                            </TextInput>
                            {eatingData.foods.map((item, index) => {
                                return (
                                    <View style={styles.foodViewEdit} key={index}>
                                        <TextInput 
                                            style={styles.inputTextFoodName} 
                                            placeholder='Alimento' 
                                            placeholderTextColor='lightgray' 
                                            onChangeText={(e) => {setEatingData({...eatingData, 
                                                foods: eatingData.foods.map((food, idx) => {
                                                    if (idx == index) {
                                                        return {...food, name: e}
                                                    }
                                                    return food;
                                                })})}
                                            }
                                            value={item.name}
                                        />
                                        <Text style={{marginLeft: 5}}>-</Text>
                                        <TextInput 
                                            style={styles.inputTextFoodAmount} 
                                            placeholder='qtd'
                                            placeholderTextColor='lightgray' 
                                            onChangeText={(e) => {setEatingData({...eatingData, 
                                                foods: eatingData.foods.map((food, idx) => {
                                                    if (idx == index) {
                                                        return {...food, amount: e}
                                                    }
                                                    return food;
                                                })})}
                                            }
                                            value={item.amount}
                                        />
                                        <TouchableOpacity style={{marginLeft: 1, padding: 2}} onPress={() => {removeFood(index)}}>
                                            <Entypo name="cross" size={24} color="red" style={styles.iconViewIcon} />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}
                            {eatingData.foods.length < 10 && 
                                <TouchableOpacity style={styles.buttonAddFood} onPress={() => {addNewFood()}}>
                                    <Text style={styles.buttonAddFoodText}>Adicionar alimento</Text>
                                </TouchableOpacity>
                            }

                            <View style={styles.buttonViews}>
                                <TouchableOpacity style={styles.buttonRemoveTask} onPress={() => { removeEating() }}>
                                    <Text style={styles.buttonRemoveTaskText}>Remover</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonConfirmEdit} onPress={() => finalEditingEating()}>
                                    <Text style={styles.bbuttonConfirmEditText}>Confirmar</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
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
    backModalView: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: 'center',
        width: '80%',
        borderRadius: 20,
        padding: 10,
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

    eatingViewEdit: {
        width: '95%',
        alignItems: 'center',
        backgroundColor: 'rgba(80,215, 195, 1)',
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
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: '5%',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
        marginBottom: 10,
    },
    foodViewEdit: {
        width: '80%',
        height: 30,
        marginBottom: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputTextFoodName: {
        fontSize: 16,
        marginLeft: 5,
        backgroundColor: '#fff',
        padding: 2,
        borderRadius: 3,
        width: 130,
        textAlign: 'center',
    },
    inputTextFoodAmount: {
        fontSize: 16,
        marginLeft: 5,
        backgroundColor: '#fff',
        padding: 2,
        borderRadius: 3,
        width: 60,
        textAlign: 'center',
    },
    inputTextDescription: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: '5%',
        textAlign: 'center',
        paddingTop: '4%',
        fontSize: 14,
        
    },
    buttonConfirmEdit: {
        backgroundColor: '#63f268',
        width: '36%',
        height: 40,
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
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    bbuttonConfirmEditText: {
        color: '#4f4e55',
        fontSize: 13,
        fontWeight: 'bold',
    },
    buttonRemoveTask: {
        backgroundColor: '#f15050',
        width: '36%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '4%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    buttonRemoveTaskText: {
        color: '#000',
        fontSize: 13,
        fontWeight: 'bold',
    },

    buttonViews: {
        marginTop: '3%',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
})