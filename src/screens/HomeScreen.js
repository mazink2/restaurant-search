import { StatusBar, StyleSheet, Text, View } from 'react-native'
import Header from "../components/Header"
import Search from "../components/Search"
import Categories from "../components/Categories"
import Restaurants from "../components/Restaurants"
import { useState } from "react"

export default function HomeScreen() {
  const [term, setTerm] = useState("");

  const commonCategories = [
    {
      name: "Burger",
      img: require("../assets/images/burger.png"),
    },
    {
      name: "Pizza",
      img: require("../assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      img: require("../assets/images/cake.png"),
    },
    {
      name: "Drinks",
      img: require("../assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      img: require("../assets/images/steak.png"),
    },
    {
      name: "Pasta",
      img: require("../assets/images/pasta.png"),
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
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(253, 253, 253)",
    flex: 1
  }
})