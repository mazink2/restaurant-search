import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import { useState } from "react";
import Categories from "./src/components/Categories";
import Restaurants from "./src/components/Restaurants";

export default function App() {
  // const [term, setTerm] = useState("Burger");
  const [term, setTerm] = useState("");

  const commonCategories = [
    {
      name: "Burger",
      img: require("./src/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      img: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      img: require("./src/assets/images/cake.png"),
    },
    {
      name: "Drinks",
      img: require("./src/assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      img: require("./src/assets/images/steak.png"),
    },
    {
      name: "Pasta",
      img: require("./src/assets/images/pasta.png"),
    },
  ]

  return (
    <View style={styles.container}>
      <Header />
      <Search
        setTerm={setTerm}
      />
      <Categories
        categories={commonCategories}
        term={term}
        setTerm={setTerm}
      />
      <Restaurants term={term} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
