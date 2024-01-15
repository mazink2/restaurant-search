import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CategoryItem from "./src/components/CategoryItem";
import { useState } from "react";

export default function App() {
  const [term, setTerm] = useState("Burger");

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
      <Search />
      <FlatList
        data={commonCategories}
        renderItem={({ item, index }) => {
          const { name, img } = item;

          return (
            <CategoryItem
              name={name}
              imageUrl={img}
              index={index}
              lastItem={index === commonCategories.length - 1}
              active={item.name === term}
              handlePress={() => setTerm(name)}
            />
          )
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
