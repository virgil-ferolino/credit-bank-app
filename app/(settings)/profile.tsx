import { Text, Button, Avatar } from "react-native-paper";
import {
  ScrollView,
  Platform,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styled from "styled-components/native";
import ParallaxScrollView from "@/components/ParralaxView";
import React, { useState } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

const commonPadding = Platform.OS === "ios" ? 40 : 60;

const StyledView = styled(ScrollView)({
  paddingTop: 20,
  gap: 10,
  paddingLeft: commonPadding,
  paddingRight: commonPadding,
});

const StyledTextInput = styled(TextInput)({
  marginBottom: 12,
  paddingHorizontal: 12,
  backgroundColor: "white",
  borderRadius: 10,
  height: 45,
});

const StyledButton = styled(Button)({
  marginTop: 50,
  backgroundColor: "#004068",
  color: "black",
  borderRadius: 10,
  paddingLeft: commonPadding,
  paddingRight: commonPadding,
  height: 40,
});

const StyledButtonTitle = styled(Text)({
  color: "white",
  textAlign: "center",
});

const StyledText = styled(Text)({
  color: "#6F6F6F",
  marginBottom: 10,
  fontSize: 16,
});

const AvatarFrame = styled(View)({
  alignSelf: "center",
  borderWidth: 6,
  borderColor: "#004068",
  borderRadius: 70,
  marginBottom: 20,
  width: 132,
  height: 132,
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const OverlayButton = styled(TouchableOpacity)({
  position: "absolute",
  bottom: 0,
  right: 0,
  backgroundColor: "#004068",
  borderRadius: 30,
  padding: 8,
});

const Profile = () => {
  const [fields, setFields] = useState({
    name: "James Charles",
    email: "jamescharles@email.com",
    phoneNumber: "09123456789",
  });

  const handleFieldChange = (field: keyof typeof fields, value: string) => {
    setFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // const handleChangePhoto = () => {
  //   setAvatarUri("https://example.com/new-photo.jpg");
  // };

  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const handleChangePhoto = async () => {
    if (!permission) {
      return;
    }

    if (!permission.granted) {
      const newPermission = await requestPermission();
      if (!newPermission.granted) {
        return;
      }
    }

    setIsCameraOpen(true);
  };

  const capturePhoto = async () => {
    console.log("picture");
  };

  const openCamera = () => {
    return (
      <CameraView style={{ flex: 1 }} facing={facing}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: 40,
            backgroundColor: "transparent",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 30,
              position: "absolute",
              bottom: 20,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#004068",
                borderRadius: 100,
                padding: 14,
              }}
              onPress={toggleCameraFacing}
            >
              <MaterialCommunityIcons
                name="camera-flip-outline"
                size={28}
                color="#FFFFFF"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "#004068",
                borderRadius: 100,
                padding: 14,
              }}
              onPress={capturePhoto}
            >
              <Ionicons name="camera-outline" size={28} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    );
  };

  return isCameraOpen ? (
    openCamera()
  ) : (
    <ParallaxScrollView>
      <StyledView>
        <AvatarFrame>
          <Avatar.Image
            size={120}
            source={{
              uri: "https://images7.alphacoders.com/489/thumb-1920-489447.jpg",
            }}
          />
          <OverlayButton onPress={handleChangePhoto}>
            <MaterialIcons name="camera-alt" size={24} color="white" />
          </OverlayButton>
        </AvatarFrame>

        <StyledText>Name</StyledText>
        <StyledTextInput
          value={fields.name}
          onChangeText={(value: string) => handleFieldChange("name", value)}
          style={{ marginBottom: 20 }}
        />

        <StyledText>Email</StyledText>
        <StyledTextInput
          value={fields.email}
          onChangeText={(value: string) => handleFieldChange("email", value)}
        />

        <StyledText>Phone Number</StyledText>
        <StyledTextInput
          value={fields.phoneNumber}
          onChangeText={(value: string) =>
            handleFieldChange("phoneNumber", value)
          }
        />

        <StyledButton>
          <StyledButtonTitle>Save Profile</StyledButtonTitle>
        </StyledButton>
      </StyledView>
    </ParallaxScrollView>
  );
};

export default Profile;
