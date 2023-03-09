import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import * as Animatable from 'react-native-animatable';
import BottomTab from "../../../components/bottomTab";
import { dataProducts } from "../../../assets/data";
import { FontAwesome5 } from '@expo/vector-icons';
const dataItensLocal = dataProducts;
import ModalProductInfo from "../../../components/modalProductInfo";

export default function HomeUser() {
  const [data, setData] = useState(dataItensLocal);
  const [searchText, setSearchText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (searchText === "") {
      setData(dataItensLocal);
    } else {
      setData(
        dataItensLocal.filter(
          (item) =>
            item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      )
    }
  }, [searchText]);

  function openProductInfo(item){
    setProduct(item);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>

      <View style={styles.headerHome}>
        <Text style={styles.headerTitle}>Encontre os melhores produtos</Text>
        <TextInput
          placeholder="Filtre por nome"
          placeholderTextColor="gray"
          style={styles.input}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      <ScrollView>
        {data.map((item) => (
          <Animatable.View 
            delay={600} 
            animation={item.id % 2 == 0 ? 'fadeInLeft' : 'fadeInRight'} 
            style={styles.itemContainer} 
            key={item.id}
          >
            <View style={styles.itemDisplayView}>
              <View style={styles.imageItemView}>
                <Image source={item.image} style={styles.imageItem}></Image>
              </View>
              <View style={styles.itemItens}>
                <Text style={styles.itemTitle}>
                  {item.title.length > 27 ? '' + item.title.slice(0, 27) + '...' : item.title}
                </Text>
                <View style={styles.itemPriceView}>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                  <TouchableOpacity 
                    style={styles.itemButton}
                    onPress={() => openProductInfo(item)}
                  >
                    <FontAwesome5 name="plus" size={14} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animatable.View>
        ))}
        <View style={{width: '100%', height: 150}}/>
      </ScrollView>

      <BottomTab />
      
      {
        modalVisible && 
        <ModalProductInfo 
          setProduct={setProduct} 
          product={product} 
          setModalVisible={setModalVisible} 
          modalVisible={modalVisible} 
        />
      }
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
    height: '15%',
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
    shadowRadius: 3.94,
    elevation: 5,
    marginBottom: '1%',
  },
  headerTitle: {
    fontSize: 18,
    color: '#2F2F2F',
    fontWeight: 'bold',
    marginTop: '10%',
  },
  input: {
    borderColor: 'rgba(80,215, 195, 1)',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    color: '#000',
    backgroundColor: '#FFF',
    height: '21%',
    width: '60%',
    textAlign: 'center',
  },


  itemContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 20,
    width: "95%",
    height: 100,
    alignSelf: 'center',
    display: 'flex',
    shadowRadius: 7,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  itemDisplayView: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
  },
  imageItemView: {
    marginLeft: '2%',
    marginRight: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '26%',
    height: '90%',
    overflow: 'hidden',
    bottom: 0,
    borderRadius: 20,
  },
  imageItem: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  itemItens: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: '3%',
  },
  itemPriceView: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 0,
    marginTop: '6%',
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginBottom: '3%',
    marginLeft: '28%',
    marginRight: '4%',
    bottom: 0,
    
  },
  itemButton: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: 'rgba(100,205, 155, 1)',
    width: 40,
    height: 24,
    borderRadius: 10,
    marginRight: "10%",
    alignSelf: 'flex-end',
    bottom: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 2.94,
    elevation: 5,
  },
  itemButtonText: {
    fontSize: 13,
    fontWeight: 'bold'
  },
});