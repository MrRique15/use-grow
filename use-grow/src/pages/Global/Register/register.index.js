import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  async function gotoSignin() {
    navigation.navigate('SignIn');
    setSelected(0);
  }
  async function getBackToChoose() {
    setSelected(0);
  }
  async function changeToUser() {
    setSelected(1);
  }
  async function changeToCompany() {
    setSelected(2);
  }

  async function finishUserRegister() {
    console.log(email);
    console.log(password);
    console.log(passwordConfirm);
    console.log(cpf);
    console.log(name);
    navigation.navigate('SignIn');
    setSelected(0);
  }

  async function finishCompanyRegister() {
    console.log(email);
    console.log(password);
    console.log(passwordConfirm);
    console.log(cnpj);
    console.log(name);
    navigation.navigate('SignIn');
    setSelected(0);
  }

  if (selected == 0) {
    return (
      <View style={styles.container}>

        <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Escolha o estilo de sua conta</Text>
          <View style={styles.logoContainer}>
            <Animatable.Image
              animation='bounceIn'
              source={require('../../../assets/registericon.png')}
              style={{ width: '20%' }}
              resizeMode="contain"
            />
          </View>
        </Animatable.View>

        <Animatable.View animation='fadeInUp' style={styles.containerFormMin}>

          <Text style={styles.title}>Escolher o tipo de sua conta define como será seu perfil dentro do Aplicativo.</Text>

          <Text style={styles.description}>Um estilo de conta comum, voltada aos usuários cotidianos que treinam em academias.</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={changeToUser}
          >
            <Text style={styles.buttonText}>Atleta</Text>
          </TouchableOpacity>

          <Text style={styles.description}>Um estilo de conta voltada à empresas que irão fornecer produtos aos nosso usuários.</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={changeToCompany}
          >
            <Text style={styles.buttonText}>Anunciante</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonGotoSignin}
            onPress={gotoSignin}
          >
            <Text style={styles.gotoSigninText}>Voltar</Text>
          </TouchableOpacity>

        </Animatable.View>

      </View>
    );
  } else if (selected == 1) {
    return (
      <View style={styles.container}>

        <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Olá, conclua seu cadastro!</Text>
        </Animatable.View>

        <Animatable.View animation='fadeInUp' style={styles.containerForm}>
          <ScrollView>
            <Text style={styles.title}>Nome</Text>
            <TextInput
              placeholder="insira seu nome"
              style={styles.input}
              onChangeText={(text) => setName(text.toUpperCase())}
            />

            <Text style={styles.title}>Email</Text>
            <TextInput
              placeholder="insira seu e-mail"
              style={styles.input}
              onChangeText={(text) => setEmail(text.toLowerCase())}
            />

            <Text style={styles.title}>CPF (apenas números)</Text>
            <TextInput
              placeholder="insira seu cpf"
              style={styles.input}
              onChangeText={(text) => setCpf(text.toLowerCase())}
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput
              placeholder="insira sua senha"
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
            />

            <Text style={styles.title}>Confirmar Senha</Text>
            <TextInput
              placeholder="repita sua senha"
              style={styles.input}
              onChangeText={(text) => setPasswordConfirm(text)}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={finishUserRegister}
            >
              <Text style={styles.buttonText}>Finalizar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonGotoSignin}
              onPress={getBackToChoose}
            >
              <Text style={styles.gotoSigninText}>Cancelar</Text>
            </TouchableOpacity>
          </ScrollView>

        </Animatable.View>

      </View>
    );
  } else if (selected == 2) {
    return (
      <View style={styles.container}>

        <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
          <Text style={styles.message}>Olá, conclua seu cadastro como Anunciante!</Text>
        </Animatable.View>

        <Animatable.View animation='fadeInUp' style={styles.containerForm}>
          <ScrollView style={{width: '100%'}}>
            <Text style={styles.title}>Nome da Empresa</Text>
            <TextInput
              placeholder="insira seu nome"
              style={styles.input}
              onChangeText={(text) => setName(text.toUpperCase())}
            />

            <Text style={styles.title}>Email</Text>
            <TextInput
              placeholder="insira seu e-mail"
              style={styles.input}
              onChangeText={(text) => setEmail(text.toLowerCase())}
            />

            <Text style={styles.title}>CNPJ (apenas números)</Text>
            <TextInput
              placeholder="insira seu cpf"
              style={styles.input}
              onChangeText={(text) => setCpf(text.toLowerCase())}
            />

            <Text style={styles.title}>Senha</Text>
            <TextInput
              placeholder="insira sua senha"
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
            />

            <Text style={styles.title}>Confirmar Senha</Text>
            <TextInput
              placeholder="repita sua senha"
              style={styles.input}
              onChangeText={(text) => setPasswordConfirm(text)}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={finishCompanyRegister}
            >
              <Text style={styles.buttonText}>Finalizar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonGotoSignin}
              onPress={getBackToChoose}
            >
              <Text style={styles.gotoSigninText}>Cancelar</Text>
            </TouchableOpacity>
          </ScrollView>

        </Animatable.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38A69D',
  },
  logoContainer: {
    flex: 1,
    marginTop: '30%',
    backgroundColor: '#38A69D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    padding: '5%',
  },
  message: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  containerFormMin: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    marginTop: '15%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  description: {
    fontSize: 15,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#38A69D',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.40,
    shadowRadius: 1.94,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonGotoSignin: {
    marginTop: 20,
    marginBottom: 30,
    alignSelf: 'center',
  },
  gotoSigninText: {
    color: '#a1a1a1',
  },
});