import Carousel from "react-native-reanimated-carousel";
import { View, Text, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function MyCarousel() {
  return (
    <Carousel
      width={width}
      height={200}
      data={["Item 1", "Item 2", "Item 3"]}
      renderItem={({ item }) => (
        <View
          style={{
            flex: 1,
            backgroundColor: "#ccc",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>{item}</Text>
        </View>
      )}
    />
  );
}