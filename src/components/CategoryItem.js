import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { elevation } from "../common/styles"

export default function CategoryItem({ name, imageUrl, index, lastItem, active, handlePress }) {


  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          lastItem ? { marginRight: 15 } : "",
          active ? { backgroundColor: "rgb(241, 186, 87)" } : { backgroundColor: "white" }
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image} />
        </View>
        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  elevation,
  image: {
    width: 35,
    height: 35
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 5
  },
  header: {
    fontWeight: "bold"
  }
})