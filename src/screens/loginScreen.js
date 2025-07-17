import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const json = await AsyncStorage.getItem('user');
      const user = json ? JSON.parse(json) : null;
      if (user && user.username === username && user.password === password) {
        navigation.replace('Welcome', { username });
      } else {
        Alert.alert('Erro', 'Usuário ou senha inválidos');
      }
    } catch {
      Alert.alert('Erro', 'Não foi possível ler dados.');
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
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  label: { marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 5 }
});
