import { Link } from "expo-router";
import { useState } from "react";
import { Button, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyList from "../../src/components/EmptyList/EmptyList";
import ItemList from "../../src/components/ItemList";
import styles from "../style";
const DATA = [
  {
    id: "1",
    title: "Detalhe 1",
    description: "Descrição detalhada do Item 1",
    done: false,
  },
  {
    id: "2",
    title: "Detalhe 2",
    description: "Descrição detalhada do Item 2",
    done: true,
  },
  {
    id: "3",
    title: "Detalhe 3",
    description: "Descrição detalhada do Item 3",
    done: false,
  },
];

export default function DetailsPage() {
  const [data, setData] = useState(DATA);
  const addItem = () => {
    const newItem = {
      id: (data.length + 1).toString(),
      title: `Detalhe ${data.length + 1}`,
      description: `Descrição detalhada do Item ${data.length + 1}`,
      done: false,
    };
    setData([...data, newItem]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Detalhes do Item</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={EmptyList}
        renderItem={({ item }) => <ItemList item={item} />}
      />
      <Button title="Adicionar Detalhe Exemplo" onPress={addItem} />
      <Link href="/" asChild>
        <Text style={styles.subtitle}>Voltar para Home</Text>
      </Link>
    </SafeAreaView>
  );
}
