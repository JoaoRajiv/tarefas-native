import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App Moderno</Text>
      <Link href="/details" asChild>
        <Text style={styles.subtitle}>Ir para Detalhes</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(40, 0, 72)",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fafafa",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    color: "#8E8E93",
    textAlign: "center",
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginTop: 16,
  },
});
