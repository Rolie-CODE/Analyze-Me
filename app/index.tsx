import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text>Hello this is the Homescreen</Text>

      <TouchableOpacity
        onPress={() => router.push('/depression_screen')}
        style={{
          backgroundColor: 'green',
          padding: 12,
          borderRadius: 5,
          alignItems: 'center',
          margin: 20,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Depression Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}