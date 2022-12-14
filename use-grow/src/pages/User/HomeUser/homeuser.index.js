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
import { useNavigation } from "@react-navigation/native";
import BottomTab from "../../../components/bottomTab";
import dataItens from "../../../assets/data";
import { FontAwesome5 } from '@expo/vector-icons';
const dataItensLocal = dataItens();

export default function HomeUser() {
  const navigation = useNavigation();
  const [data, setData] = useState(dataItensLocal);
  const [searchText, setSearchText] = useState("");

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
          <Animatable.View delay={600} animation={item.id % 2 == 0 ? 'fadeInLeft' : 'fadeInRight'} style={styles.itemContainer} key={item.id}>
            <View style={styles.itemDisplayView}>
              <View style={styles.imageItemView}>
                <Image source={item.image} style={styles.imageItem}></Image>
              </View>
              <View style={styles.itemItens}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <View style={styles.itemPriceView}>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                  <TouchableOpacity style={styles.itemButton}>
                    <Text style={styles.itemButtonText}>Comprar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animatable.View>
        ))}
      </ScrollView>

      <BottomTab />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38A69D',
    alignContent: 'center'
  },


  headerHome: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
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
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: '6%',
  },
  input: {
    borderColor: '#7CFC00',
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 10,
    color: '#000',
    backgroundColor: '#FFF',
    height: '20%',
    width: '50%',
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
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginBottom: '3%',
    marginLeft: '28%',
    marginRight: '2%',
    bottom: 0,
  },
  itemButton: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: '#7CFC00',
    width: '30%',
    height: "70%",
    borderRadius: 10,
    marginRight: "10%",
    alignSelf: 'flex-end',
  },
  itemButtonText: {
    fontSize: 13,
    fontWeight: 'bold'
  },
});