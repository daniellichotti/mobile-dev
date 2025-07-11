import { ThermometerColdIcon, ThermometerHotIcon, TrashIcon } from "phosphor-react-native";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

/*
Lista de Tarefas (ToDo)
Crie um componente simples onde o usuário digita uma tarefa e adiciona à lista como um objeto. A lista deve ser exibida na tela com FlatList e deve conter urgencia e data que foi adicionada. 
opcional:
Adicionar botão para remover tarefas. 
Marcar tarefas como concluídas.
*/

export function ToDo() {
  const [itens, setItens] = useState([])
  const [cont, setCont] = useState(3)
  const [urgencia, setUrgencia] = useState(false)
  const [task, setTask] = useState('')

  function adicionarItem(task) {
    if (task === '') {
      alert('Insira uma task')
    } else {
      setItens(itens => [...itens, { id: cont + 1, task: task, urgency: urgencia, date: new Date() }])
      setCont(cont + 1)
      setTask('')
    }
  }

  function deletarItem(id) {
    setItens(itens => itens.filter(item => item.id != id))
  }

  function alternarEstado() {
    setUrgencia(!urgencia)

    return urgencia
  }

  function alternarUrgencia(id) {
    setItens(prevItens =>
      prevItens.map(item =>
        item.id === id ? { ...item, urgency: !item.urgency } : item
      )
    )
  }


  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Digite sua task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Adicionar Task" onPress={() => adicionarItem(task)} />
      <FlatList
        data={itens}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.task}>{item.task}</Text>
            <View style={styles.info}>
              <TouchableOpacity onPress={() => alternarUrgencia(item.id)}>
                {item.urgency ? (
                  <ThermometerHotIcon color="red" size={28} />
                ) : (
                  <ThermometerColdIcon color="blue" size={28} />
                )}
              </TouchableOpacity>
              <Text>{item.date.toString().slice(0, 15)}</Text>
            </View>
            <TouchableOpacity onPress={() => deletarItem(item.id)}>
              <TrashIcon size={32} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    width: '100%',
    height: '100%',
    backgroundColor: '#b0b0b0',
    gap: 20
  },
  input: {
    borderColor: '#c6c6c6',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10
  },
  card: {
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#c6c6c6',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 50,
    backgroundColor: '#ddd'
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  task: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
