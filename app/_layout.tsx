import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/* O componente Stack gerencia a navegação nativa do app */}
      <Stack
        screenOptions={{
          headerShown: false, // Esconde a barra de topo padrão por enquanto
          contentStyle: { backgroundColor: "#FAFAFC" }, // Cor de fundo padrão do app
        }}
      >
        {/* Define a tela inicial explicitamente */}
        <Stack.Screen name="index" />
        <Stack.Screen
          name="details"
          options={{ title: "Detalhes da Tarefa" }}
        />
      </Stack>

      {/* Garante que os ícones da barra de status do celular (bateria, hora) fiquem visíveis */}
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
