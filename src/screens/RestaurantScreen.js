import { StyleSheet, Text, View } from 'react-native'

export default function RestaurantScreen({navigation}) {
  const id = navigation.getParam("id");
  
  return (
    <View>
      <Text>RestaurantScreen</Text>
      <Text>{id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})