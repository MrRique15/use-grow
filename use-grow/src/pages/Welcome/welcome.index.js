import React from "react";
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  return( 
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Animatable.Image
          animation='flipInY'
          source={require('../../assets/logo.png')}
          style={{ width:'100%' }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation='fadeInUp' style={styles.formContainer}>
        <Text style={styles.title}>Otimize sua rotina de treinos Apply&Grow</Text>
        <Text style={styles.text}>Acesse e conheça os benefícios</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38A69D',
  },
  logoContainer: {
    flex: 2,
    backgroundColor: '#38A69D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#38A69D',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  }
});