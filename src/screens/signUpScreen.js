import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignUpScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!username || !password) {
      Alert.alert('Erro', 'Preencha usuário e senha');
      return;
    }
    try {
      await AsyncStorage.setItem('user', JSON.stringify({ username, password }));
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
        { text: 'Ok', onPress: () => navigation.navigate('Login') }
      ]);
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar.');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Usuário</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Digite seu usuário"
        style={styles.input}
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        secureTextEntry
        style={styles.input}
      />
      <Button title="Cadastrar" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  label: { marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 5 }
});

