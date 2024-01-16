import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { elevation } from "../common/styles";

export default function RestaurantItem({ restaurant }) {
  const { image_url, name, rating, price } = restaurant;

  return (
    <View style={[styles.elevation, styles.container]}>
      <Image style={styles.image} source={{ uri: image_url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.header}>{name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>{rating} stars</Text>
          <Text style={styles.money}>{price}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: "white",
    height: 100,
    alignSelf: "stretch",
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4
  },
  info: {
    flexDirection: "row"
  },
  rating: {
    marginRight: 20
  },
  money: {
    color: "gold"
  }
})