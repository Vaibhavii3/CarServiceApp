import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Bell, Shield, Globe, CircleHelp as HelpCircle, Info } from 'lucide-react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [locationServices, setLocationServices] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Bell size={20} color="#666" />
            <Text style={styles.settingText}>Push Notifications</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={notifications ? '#007AFF' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Globe size={20} color="#666" />
            <Text style={styles.settingText}>Dark Mode</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={darkMode ? '#007AFF' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Shield size={20} color="#666" />
            <Text style={styles.settingText}>Location Services</Text>
          </View>
          <Switch
            value={locationServices}
            onValueChange={setLocationServices}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={locationServices ? '#007AFF' : '#f4f3f4'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.settingInfo}>
            <HelpCircle size={20} color="#666" />
            <Text style={styles.settingText}>Help Center</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.settingInfo}>
            <Info size={20} color="#666" />
            <Text style={styles.settingText}>About</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    marginTop: 60,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: '#333',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#333',
  },
  menuItem: {
    paddingVertical: 12,
  },
  versionContainer: {
    padding: 20,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666',
  },
});