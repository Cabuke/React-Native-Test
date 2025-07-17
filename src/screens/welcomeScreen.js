import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen({ route, navigation }) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a), {username}!</Text>
      <Button title="Sair" onPress={() => navigation.replace('Initial')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20 }
});
