import { FlatList, View } from 'react-native'
import CategoryItem from "./CategoryItem";

export default function Categories({ categories, term, setTerm }) {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          const { name, img } = item;

          return (
            <CategoryItem
              name={name}
              imageUrl={img}
              index={index}
              lastItem={index === categories.length - 1}
              active={item.name === term}
              handlePress={() => setTerm(name)}
            />
          )
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
    </View>
  )
}