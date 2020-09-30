import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddToCart from "./component/AddToCart";
import OnlineShopping from "./component/OnlineShopping";
import Payment from "./component/Payment";

export default function App() {
  return (
    <View style={styles.container}>
      <OnlineShopping />
      {/* <Payment /> */}
      {/* <AddToCart /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
