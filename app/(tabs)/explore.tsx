import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function SettingsScreen() {
  const [isBiometricEnabled, setBiometricEnabled] = useState(false);

  const handleLogout = () => {
    // Implement logout logic
    console.log("Logging out...");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
      </View>

      <Text style={styles.description}>General</Text>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Language</Text>
        <View style={styles.rightContent}>
          <Text style={styles.secondaryText}>English</Text>
          <MaterialIcons name="chevron-right" size={24} color="#C7C7CC" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>My Profile</Text>
        <MaterialIcons name="chevron-right" size={24} color="#C7C7CC" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Contact Us</Text>
        <MaterialIcons name="chevron-right" size={24} color="#C7C7CC" />
      </TouchableOpacity>

      <Text style={styles.description}>Security</Text>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Change Password</Text>
        <MaterialIcons name="chevron-right" size={24} color="#C7C7CC" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Privacy Policy</Text>
        <MaterialIcons name="chevron-right" size={24} color="#C7C7CC" />
      </TouchableOpacity>

      <Text style={styles.description}>Choose what data you share with us</Text>

      <View style={styles.menuItem}>
        <Text style={styles.menuText}>Biometric</Text>
        <Switch
          value={isBiometricEnabled}
          onValueChange={setBiometricEnabled}
          trackColor={{ false: "#D1D1D6", true: "#34C759" }}
          ios_backgroundColor="#D1D1D6"
        />
      </View>
      <TouchableOpacity style={styles.LogoutItem}>
        <Text style={styles.logoutText}>Log out</Text>
        <MaterialIcons name="chevron-right" size={24} color="#FF0000" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F7",
  },
  section: {
    padding: 16,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 16,
    marginBottom: 8,
  },
  generalTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#C7C7CC",
  },

  LogoutItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#C7C7CC",
  },
  menuText: {
    fontSize: 16,
    color: "#000000",
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  secondaryText: {
    fontSize: 16,
    color: "#8E8E93",
  },
  divider: {
    height: 32,
    backgroundColor: "#F2F2F7",
  },
  description: {
    fontSize: 14,
    color: "#8E8E93",
    padding: 16,
    paddingBottom: 8,
  },
  logoutButton: {
    margin: 16,
    padding: 16,
    backgroundColor: "white",
    color: "#FF3B30",
    fontSize: 16,
  },
  logoutText: {
    color: "#FF0000",
    fontSize: 16,
  },
});
