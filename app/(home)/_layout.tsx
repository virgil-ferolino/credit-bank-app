import React from "react";

import { Stack } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import { useAppTheme } from "@/hooks/useTheme";
// import { Platform, TouchableOpacity } from "react-native";
import StackLayout from "@/components/StackLayout";
const HomeLayout = () => {
  // const router = useRouter();
  // const theme = useAppTheme();
  return (
    // <Stack
    //   screenOptions={{
    //     animation: "slide_from_left",
    //     headerLeft: () => {
    //       return Platform.select({
    //         web: (
    //           <TouchableOpacity onPress={router.back}>
    //             <Ionicons
    //               name="arrow-undo-circle-outline"
    //               size={30}
    //               color={theme.colors.primary}
    //               style={{ paddingLeft: 8 }}
    //             />
    //           </TouchableOpacity>
    //         ),
    //         android: (
    //           <TouchableOpacity onPress={router.back}>
    //             <Ionicons
    //               name="arrow-undo-circle-outline"
    //               size={30}
    //               color={theme.colors.primary}
    //             />
    //           </TouchableOpacity>
    //         ),
    //         ios: (
    //           <TouchableOpacity onPress={router.back}>
    //             <Ionicons
    //               name="arrow-undo-circle-outline"
    //               size={30}
    //               color={theme.colors.primary}
    //             />
    //           </TouchableOpacity>
    //         ),
    //       });
    //     },
    //     headerTitleStyle: {
    //       fontFamily: "Poppins",
    //     },
    //   }}
    // >

    <StackLayout>
      <Stack.Screen
        name="notification/index"
        options={{
          title: "Notifications",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="notification/[id]"
        options={{
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="transaction"
        options={{
          title: "Recent Transaction",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="activate-card"
        options={{
          title: "Select Card",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="promos/index"
        options={{
          headerTitle: "",
          headerShown: true,
        }}
      />
    </StackLayout>
  );
};

export default HomeLayout;
