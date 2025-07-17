import React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

export default function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Você já possui login?
      </Text>
      <View style={styles.buttons}>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Button title="Cadastrar" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 18, marginBottom: 20 },
  buttons: { width: '100%', flexDirection: 'row', justifyContent: 'space-around', borderRadius: 5 }
});
