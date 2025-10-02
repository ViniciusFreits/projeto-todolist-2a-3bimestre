import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "./assets/icon_todo_list.png";
import { useState } from "react";
import btnAdd from "./assets/plus.png";
import { FlashList } from "@shopify/flash-list/dist";
import trash from "./assets/excluir.png";
export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([])

  const handleAdd = () => {
    //Alert.alert(tarefa);
    setTarefas([tarefa, ...tarefas])
    setTarefa("");
  };

  const handleExcluir = (item) => {
    setTarefas(tarefas.filter((oldItem) => oldItem !== item));
  };

  const renderItem = ({ item }) =>
    <View style={styles.viewItem}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => handleExcluir(item)}>
        <Image style={styles.trash} source={trash} alt="botão de excluir"></Image>
      </TouchableOpacity>
    </View>

  //Já importei o Flashlis e agora tem que usar

  return (
    <View style={styles.container}>
      <View >
        <Image source={logo} style={styles.logo} />
        <Text>Todo List</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Entre com a tarefa"
          value={tarefa}
          onChangeText={setTarefa}
        />
        <TouchableOpacity onPress={handleAdd}>
          <Image source={btnAdd} style={styles.btnAdd} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTarefas}>
        <FlashList
          data={tarefas}
          renderItem={renderItem} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  logo: {
    height: 128,
    width: 128,
  },
  btnAdd: {
    width: 32,
    height: 32,
  },
  viewInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  viewTarefas: {
    flex: 1,
    width: "100%"
  },
  trash: {
    width: 32,
    height: 32,
  },
  viewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  }
});
