import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CreditCard as Edit2, MapPin, Phone, Mail, ChevronRight } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200' }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editButton}>
            <Edit2 size={16} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoItem}>
          <MapPin size={20} color="#666" />
          <Text style={styles.infoText}>123 Main Street, City</Text>
        </View>
        <View style={styles.infoItem}>
          <Phone size={20} color="#666" />
          <Text style={styles.infoText}>+1 234 567 890</Text>
        </View>
        <View style={styles.infoItem}>
          <Mail size={20} color="#666" />
          <Text style={styles.infoText}>john.doe@example.com</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Edit Profile</Text>
          <ChevronRight size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Notifications</Text>
          <ChevronRight size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Payment Methods</Text>
          <ChevronRight size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Address Book</Text>
          <ChevronRight size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    backgroundColor: '#f8f9fa',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#007AFF',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#666',
  },
  infoSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoText: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#333',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#333',
  },
  logoutButton: {
    margin: 20,
    backgroundColor: '#ff3b30',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
});