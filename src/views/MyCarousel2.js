import Carousel from "react-native-reanimated-carousel";
import { View, Text, Dimensions, StyleSheet } from "react-native";


const { width } = Dimensions.get("window");

export default function MyCarousel2() {
  return (
    <Carousel
      width={width}
      height={200}
      autoPlay
      data={[1, 2, 3]}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            backgroundColor: "#eee",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Item {item}</Text>
        </View>
      )}
    />
  );
}


// npm install react-native-reanimated-carousel