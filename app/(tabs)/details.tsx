import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function DetailsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Item</Text>
      <Link href="/" asChild>
        <Text style={styles.subtitle}>Voltar para Home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFC",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1E",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#8E8E93",
    textAlign: "center",
  },
});
