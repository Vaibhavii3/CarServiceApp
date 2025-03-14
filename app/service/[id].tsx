import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Car, PenTool as Tool, File as Oil, Battery, Wrench } from 'lucide-react-native';


export default function ServiceDetail() {
  const { id } = useLocalSearchParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/services/${id}`);
        const data = await response.json();
        setService(data);
      } catch (err) {
        setError("Failed to load service details");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error || !service) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error || "Service not found"}</Text>
      </View>
    );
  }

  // Map icons based on service category (adjust as needed)
  const iconMap = {
    "General": Car,
    "Repair": Wrench,
    "Oil Change": Oil,
    "Battery": Battery,
  };

  const IconComponent = iconMap[service.category] || Car;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: service.image }} style={styles.image} />
      <View style={styles.content}>
        {/* <service.icon size={40} color="#007AFF" /> */}
        <IconComponent size={40} color="#007AFF" />
        <Text style={styles.title}>{service.name}</Text>
        <Text style={styles.description}>{service.description}</Text>
        <Text style={styles.price}>${service.price}</Text>
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
