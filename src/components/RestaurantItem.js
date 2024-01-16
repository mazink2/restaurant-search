import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { elevation } from "../common/styles";
import { withNavigation } from "react-navigation"

function RestaurantItem({ restaurant, navigation }) {
  const { id, image_url, name, rating, price } = restaurant;

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Restaurant", {id})}>
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
    </TouchableOpacity>
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

export default withNavigation(RestaurantItem)