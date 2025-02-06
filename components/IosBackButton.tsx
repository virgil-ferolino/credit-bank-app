import { Platform, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function IosBackButton() {
  const navigation = useNavigation();

  if (Platform.OS !== "ios") {
    return null;
  }

  return (
    <TouchableOpacity hitSlop={20} onPress={() => navigation.goBack()}>
      <Ionicons name="close" size={24} color="black" />
    </TouchableOpacity>
  );
}
