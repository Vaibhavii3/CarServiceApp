import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { Search, Car, PenTool as Tool, File as Oil, Battery, Wrench } from 'lucide-react-native';

const services = [
  {
    id: 1,
    title: 'General Service',
    icon: Car,
    description: 'Complete car checkup and maintenance',
    price: 'From $99',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=500',
  },
  {
    id: 2,
    title: 'Repair Service',
    icon: Tool,
    description: 'Fix specific issues with your vehicle',
    price: 'From $149',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=500',
  },
  {
    id: 3,
    title: 'Oil Change',
    icon: Oil,
    description: 'Professional oil change service',
    price: 'From $49',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=500',
  },
  {
    id: 4,
    title: 'Battery Service',
    icon: Battery,
    description: 'Battery check and replacement',
    price: 'From $79',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=500',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, John!</Text>
          <Text style={styles.subtitle}>What service do you need?</Text>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Search size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.servicesGrid}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.serviceCard}
            onPress={() => router.push(`/service/${service.id}`)}>
            <Image source={{ uri: service.image }} style={styles.serviceImage} />
            <View style={styles.serviceContent}>
              <service.icon size={24} color="#007AFF" />
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
              <Text style={styles.servicePrice}>{service.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#666',
    marginTop: 4,
  },
  searchButton: {
    width: 44,
    height: 44,
    backgroundColor: '#f5f5f5',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  servicesGrid: {
    padding: 20,
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  serviceImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  serviceContent: {
    padding: 16,
  },
  serviceTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    marginTop: 12,
  },
  serviceDescription: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666',
    marginTop: 4,
  },
  servicePrice: {
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#007AFF',
    marginTop: 8,
  },
});