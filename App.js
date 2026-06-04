import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState([]);

  const pendingTasks = useMemo(
    () => tasks.filter((task) => !task.completed).length,
    [tasks]
  );

  const addTask = () => {
    const trimmedTitle = taskTitle.trim();
    if (!trimmedTitle) {
      return;
    }

    setTasks((currentTasks) => [
      {
        id: Date.now().toString(),
        title: trimmedTitle,
        completed: false,
      },
      ...currentTasks,
    ]);
    setTaskTitle('');
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <Text style={styles.subtitle}>Pendentes: {pendingTasks}</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Digite uma tarefa"
          value={taskTitle}
          onChangeText={setTaskTitle}
          onSubmitEditing={addTask}
          style={styles.input}
          returnKeyType="done"
        />
        <Pressable onPress={addTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </Pressable>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma tarefa cadastrada.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.taskRow}>
            <Pressable onPress={() => toggleTask(item.id)} style={styles.taskMain}>
              <View style={[styles.checkbox, item.completed && styles.checkboxDone]} />
              <Text style={[styles.taskText, item.completed && styles.taskTextDone]}>
                {item.title}
              </Text>
            </Pressable>
            <Pressable onPress={() => removeTask(item.id)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remover</Text>
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 16,
  },
  form: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  addButton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  taskRow: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 8,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskMain: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
    marginRight: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#6b7280',
    marginRight: 8,
  },
  checkboxDone: {
    backgroundColor: '#22c55e',
    borderColor: '#22c55e',
  },
  taskText: {
    fontSize: 16,
    color: '#111827',
    flexShrink: 1,
  },
  taskTextDone: {
    color: '#6b7280',
    textDecorationLine: 'line-through',
  },
  removeButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fee2e2',
    borderRadius: 6,
  },
  removeButtonText: {
    color: '#dc2626',
    fontWeight: '600',
  },
  emptyText: {
    textAlign: 'center',
    color: '#6b7280',
    marginTop: 24,
  },
});
