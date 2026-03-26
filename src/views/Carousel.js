import React from "react";
import { View, Text, FlatList, Dimensions, Image } from "react-native";

const { width } = Dimensions.get("window");

const data = [
  { id: "1", title: "Slide 1" },
  { id: "2", title: "Slide 2" },
  { id: "3", title: "Slide 3",image:'AppMvc\assets\pastel_vegano.jpg' },
];

export default function Carousel() {
  return (
    <FlatList
      data={data}
      horizontal
      pagingEnabled
      
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
     
      renderItem={({ item }) => (
        <View
          style={{
            width,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ddd",
          }}
        >
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
}