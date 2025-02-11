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
import React, { useState, useRef } from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

const commonPadding = Platform.OS === "ios" ? 20 : 25;

const StyledView = styled(ScrollView)({
  paddingTop: 20,
  gap: 5,
  paddingLeft: commonPadding,
  paddingRight: commonPadding,
});

const StyledTextInput = styled(TextInput)({
  marginBottom: 12,
  paddingHorizontal: 12,
  backgroundColor: "white",
  borderRadius: 10,
  height: 60,
});

const StyledButton = styled(Button)({
  marginTop: 15,
  backgroundColor: "#004068",
  color: "black",
  paddingLeft: commonPadding,
  paddingRight: commonPadding,
  height: 38,
});

const StyledButtonChangePhoto = styled(Button)({
  marginBottom: 15,
  backgroundColor: "#004068",
  color: "black",
  paddingLeft: commonPadding,
  paddingRight: commonPadding,
  height: 38,
  width: "70%",
  alignSelf: "center",
});

const StyledButtonTitle = styled(Text)({
  color: "white",
  alignSelf: "center",
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

  const [facing, setFacing] = useState<CameraType>("front");
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const cameraRef = useRef<CameraView | null>(null);

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
    if (cameraRef.current) {
      try {
        const photoData = await cameraRef.current.takePictureAsync();
        if (photoData?.uri) {
          console.log("Captured photo: ", photoData);
          setPhoto(photoData.uri);
          setIsCameraOpen(false);
        } else {
          console.error("Failed to capture photo, no URI found.");
        }
      } catch (error) {
        console.error("Error capturing photo: ", error);
      }
    }
  };

  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setPhoto(result.assets[0].uri);
      }
    } else {
      console.error("Permission to access gallery was denied");
    }
  };

  const openCamera = () => {
    return (
      <CameraView style={{ flex: 1 }} facing={facing} ref={cameraRef}>
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
              uri:
                photo ||
                "https://images7.alphacoders.com/489/thumb-1920-489447.jpg",
            }}
          />
          <OverlayButton onPress={handleChangePhoto}>
            <MaterialIcons name="camera-alt" size={24} color="white" />
          </OverlayButton>
        </AvatarFrame>

        <StyledButtonChangePhoto onPress={openGallery}>
          <StyledButtonTitle>Change Photo</StyledButtonTitle>
        </StyledButtonChangePhoto>

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
