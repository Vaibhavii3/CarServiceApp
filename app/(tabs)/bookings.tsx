import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Calendar, Clock, MapPin } from 'lucide-react-native';

const bookings = [
  {
    id: '1',
    service: 'General Service',
    date: '2024-02-20',
    time: '10:00 AM',
    location: '123 Service St, City',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=500',
  },
  {
    id: '2',
    service: 'Oil Change',
    date: '2024-02-18',
    time: '2:30 PM',
    location: '456 Mechanic Ave, Town',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=500',
  },
];

export default function BookingsScreen() {
  const renderBooking = ({ item }) => (
    <TouchableOpacity style={styles.bookingCard}>
      <Image source={{ uri: item.image }} style={styles.serviceImage} />
      <View style={styles.bookingContent}>
        <Text style={styles.serviceName}>{item.service}</Text>
        
        <View style={styles.infoRow}>
          <Calendar size={16} color="#666" />
          <Text style={styles.infoText}>{item.date}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Clock size={16} color="#666" />
          <Text style={styles.infoText}>{item.time}</Text>
        </View>
        
        <View style={styles.infoRow}>
          <MapPin size={16} color="#666" />
          <Text style={styles.infoText}>{item.location}</Text>
        </View>
        
        <View style={[
          styles.statusBadge,
          { backgroundColor: item.status === 'Upcoming' ? '#e3f2fd' : '#e8f5e9' }
        ]}>
          <Text style={[
            styles.statusText,
            { color: item.status === 'Upcoming' ? '#1976d2' : '#2e7d32' }
          ]}>
            {item.status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>
      <FlatList
        data={bookings}
        renderItem={renderBooking}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  listContainer: {
    padding: 20,
  },
  bookingCard: {
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
    height: 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  bookingContent: {
    padding: 16,
  },
  serviceName: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#666',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 8,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
  },
});