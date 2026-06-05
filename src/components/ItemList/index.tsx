import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ItemList({
  item,
}: {
  item: { title: string; description: string; done: boolean };
}) {
  return (
    <View style={styles.item}>
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    gap: 4,
    shadowColor: "#000",
    shadowOffset: { width: 20, height: 20 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  textContainer: {
    gap: 4,
    minHeight: 60,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  itemDescription: {
    fontSize: 14,
    color: "#8E8E93",
  },
});
