import React from "react";
import {
    Modal,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Alert,
    Image,
    Linking,
} from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function ModalProductInfo(props) {

    let product = props.product

    async function openStorePage(url) {
        const isSupported = await Linking.canOpenURL(url)
        isSupported ? await Linking.openURL(url) : Alert.alert("Aviso", "Não foi possível abrir a página da loja.")
    }

    function handleCloseModal() {
        props.setProduct(null);
        props.setModalVisible(false);
    }

    return (
        <Modal
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={() => { props.setModalVisible(false) }}
        >
            <View style={styles.mainView}>
                <View style={styles.productViewBack} >
                    <View style={styles.modalView}>
                        <View style={styles.headerModal}>
                            <Text style={styles.modalTitle}>Informações do produto</Text>
                            <TouchableOpacity style={styles.closeButton} onPress={() => { handleCloseModal() }}>
                                <Entypo name="cross" size={40} color="#f15050" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.productImageView}>
                            <Image source={product.image} style={styles.imageProduct} />
                        </View>
                        <View style={styles.infoMain}>
                            <ScrollView styles={styles.infoScroll} alignItems={'flex-start'} justifyContent={'flex-start'}  >
                                <View style={{ height: 30, width: '100%' }} />
                                <Text style={styles.infoTitle}>{product.title}</Text>
                                <Text style={styles.infoDescription}>{product.description}</Text>
                                {product.promoCode ? <Text style={styles.infoDiscount}>Código promocional: {product.promoCode}</Text> : null}
                                <Text style={styles.infoPrice}>R$ {product.price}</Text>
                                <View style={{ height: 30, width: '100%' }} />
                            </ScrollView>
                        </View>
                        <TouchableOpacity style={styles.openStoreTouch} onPress={() => {openStorePage(product.storeUrl)}}>
                            <Text style={styles.openStoreText}>Visitar Loja</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    productViewBack: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: 'center',
    },
    modalView: {
        backgroundColor: "#FFF",
        width: '90%',
        height: '90%',
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    headerModal: {
        width: '100%',
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    modalTitle: {
        color: '#000000',
        fontSize: 20,
        marginBottom: '1%',
    },
    closeButton: {
        position: 'absolute',
        right: 0,
        marginRight: '1%',
        marginBottom: '8%',
    },
    productImageView: {
        width: 320,
        height: 320,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.55,
        shadowRadius: 5.94,
        elevation: 5,
    },
    imageProduct: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        borderRadius: 30,
    },
    infoMain: {
        height: '40%',
        width: '90%',
        paddingLeft: '5%',
    },
    infoScroll: {
        width: '100%',
        height: '100%',
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    infoDescription: {
        fontSize: 16,
        marginTop: '5%',
        textAlign: 'justify',
        marginRight: '5%',
    },
    infoDiscount: {
        fontSize: 16,
        marginTop: '5%',
        color: '#f15050',
        fontWeight: 'bold',
    },
    infoPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: '5%',
        color: '#000',
    },
    openStoreTouch: {
        width: '80%',
        height: '5%',
        backgroundColor: '#28d756',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: '2%',
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 5,
        },
        shadowOpacity: 0.55,
        shadowRadius: 5.94,
        elevation: 5,
    },
    openStoreText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
})