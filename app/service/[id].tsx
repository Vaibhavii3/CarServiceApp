import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Car, PenTool as Tool, File as Oil, Battery, Wrench } from 'lucide-react-native';

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

export default function ServiceDetail() {
  const { id } = useLocalSearchParams();
  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Service not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: service.image }} style={styles.image} />
      <View style={styles.content}>
        <service.icon size={40} color="#007AFF" />
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.description}>{service.description}</Text>
        <Text style={styles.price}>{service.price}</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: 'bold',
    marginTop: 10,
  },
  bookButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  bookText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
});
