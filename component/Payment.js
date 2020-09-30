import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import payment from "../assets/payment.png";
import { Entypo } from "@expo/vector-icons";
function Payment() {
  return (
    <View>
      <Text style={styles.header}>PAYMENT SUCCESSFUL</Text>
      <Text style={styles.info}>
        Online shopping is a process whereby consumers directly buy goods,
        services etc. from a seller without an intermediary service over the
        Internet. Shoppers can visit web stores from the comfort of their house
        and shop as by sitting in front of the computer.
      </Text>
      <View style={styles.imageContainer}>
        <Image source={payment} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.mediaContainer}>
        <Text style={styles.next}>Previous</Text>
        <Entypo
          name="dots-three-horizontal"
          size={40}
          color="#845EC2"
          style={styles.icon}
        />
        {/* <Text style={styles.skip}>Skip</Text> */}
      </View>
    </View>
  );
}

export default Payment;

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    marginHorizontal: 30,
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "tahoma",
  },
  image: {
    height: 300,
    width: 350,
  },
  imageContainer: {
    marginTop: 30,
  },
  info: {
    fontSize: 18,
    marginHorizontal: 30,
    fontFamily: "Work Sans",
    color: "#69686A",
  },
  button: {
    height: 45,
    width: 150,
    backgroundColor: "#845EC2",
    alignSelf: "center",
    marginVertical: 30,
    borderRadius: 22,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  mediaContainer: {
    flexDirection: "row",
    flex: 10,
    marginHorizontal: 20,
  },
  next: {
    flex: 3,
    marginVertical: 15,
    color: "#69686A",
    fontSize: 16,
  },
  skip: {
    marginVertical: 15,
    color: "#69686A",
    fontSize: 16,
  },
  icon: {
    flex: 3,
    marginRight: 35,
  },
});
