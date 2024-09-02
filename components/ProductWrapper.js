import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header";
import Product from "./Product";

const ProductWrapper = () => {
  const products = [
    {
      name: "Apple Laptop",
      color: "white",
      price: "$900",
      image:
        "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Apple iPhone 13
    },
    {
      name: "Fast Internet Setup",
      color: "Enjoy fast internet Antytime Everywhere",
      price: "$300",
      image:
        "https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Samsung Galaxy A32
    },
    {
      name: "Virtual Reality 3D Headset",
      color: "blue , white, Black",
      price: "$36,000",
      image:
        "https://www.verdict.co.uk/wp-content/uploads/2023/06/GettyImages-1251939768.jpg", // A generic smartphone for Q Mobile
    },
    {
      name: "Advanced Gaming Setup",
      color: "The combination you want",
      price: "$3,000",
      image:
        "https://www.leetdesk.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fleetdesk%2Fc5527f47-def9-433c-9cce-23f286dbfea2_Front.jpg%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C374%2C4000%2C2250%26w%3D1920%26h%3D1080&w=1920&q=75", // Infinix Hot 10
    },
    {
      name: "Apple Airpods",
      color: "White, Black",
      price: "$120",
      image:
        "https://photos5.appleinsider.com/gallery/product_pages/266-hero.jpg?=1725263030", // Infinix Hot 10
    },
    {
      name: "Iphone Headphones",
      color: "In 6 different colors",
      price: "$600",
      image:
        "https://cdn.mos.cms.futurecdn.net/qzJ4JtDjkfjdqqNebQS7kk-650-80.jpg.webp", // Infinix Hot 10
    },
    {
      name: "Gaming tablet",
      color: "Black, White and 6 more colors",
      price: "$1200",
      image: "https://rog.asus.com/media/1640740976354.jpg", // Infinix Hot 10
    },
    {
      name: "2024 BMW Z4",
      color: "energetic driving fun with a spiffy",
      price: "$3,000",
      image:
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/30/118050.jpg", // Infinix Hot 10
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {products.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 10,
  },
});

export default ProductWrapper;
