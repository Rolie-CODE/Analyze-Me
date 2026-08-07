import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useWindowDimensions } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  const [age, setAge] = useState("");
  const [sleepHours, setSleepHours] = useState("");
  const [stressLevel, setStressLevel] = useState("");
  const [anxietyLevel, setAnxietyLevel] = useState("");
  const [physicalActivity, setPhysicalActivity] = useState("");
  const [academicPerformance, setAcademicPerformance] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeData = async () => {
    if (
      !age ||
      !sleepHours ||
      !stressLevel ||
      !anxietyLevel ||
      !physicalActivity ||
      !academicPerformance
    ) {
      Alert.alert("Missing Fields", "Please fill in all fields before analyzing.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        "https://depression-model-api.onrender.com/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            age: Number(age),
            sleep_hours: Number(sleepHours),
            stress_level: Number(stressLevel),
            anxiety_level: Number(anxietyLevel),
            physical_activity: Number(physicalActivity),
            academic_performance: Number(academicPerformance),
          }),
        }
      );

      const data = await response.json();
      setResult(data);
    } catch (error) {
      Alert.alert(
        "Connection Error",
        "Could not reach the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      label: "1. Age",
      placeholder: "e.g. 21",
      value: age,
      onChange: setAge,
      icon: <Feather name="calendar" size={24} color="#14B8A6" />,
    },
    {
      label: "2. Sleep Hours",
      placeholder: "e.g. 7",
      value: sleepHours,
      onChange: setSleepHours,
      icon: <MaterialCommunityIcons name="sleep" size={24} color="#14B8A6" />,
    },
    {
      label: "3. Stress Level",
      placeholder: "1 - 10",
      value: stressLevel,
      onChange: setStressLevel,
      icon: <MaterialIcons name="psychology" size={24} color="#14B8A6" />,
    },
    {
      label: "4. Anxiety Level",
      placeholder: "1 - 10",
      value: anxietyLevel,
      onChange: setAnxietyLevel,
      icon: <MaterialCommunityIcons name="brain" size={24} color="#14B8A6" />,
    },
    {
      label: "5. Physical Activity",
      placeholder: "hrs/week e.g. 3",
      value: physicalActivity,
      onChange: setPhysicalActivity,
      icon: <MaterialCommunityIcons name="run" size={24} color="#14B8A6" />,
    },
    {
      label: "6. Academic Performance",
      placeholder: "GPA e.g. 3.5",
      value: academicPerformance,
      onChange: setAcademicPerformance,
      icon: <AntDesign name="book" size={24} color="#14B8A6" />,
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white", flex: 1, paddingBottom: 40 }}>

        {/* Header */}
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 72 }}>
            <FontAwesome5 name="brain" size={24} color="#14B8A6" />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Depression Analyzer
            </Text>
          </View>
          <MaterialCommunityIcons
            name="shield-lock-outline"
            size={28}
            color="#14B8A6"
          />
        </View>

        {/* Privacy Banner */}
        <View
          style={{
            borderColor: "green",
            borderWidth: 1,
            margin: 10,
            padding: 10,
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
          <FontAwesome5 name="user-lock" size={24} color="#14B8A6" />
          <View>
            <Text style={{ fontWeight: "bold" }}>
              Please answer all questions honestly.
            </Text>
            <Text style={{ fontSize: 11 }}>
              Your responses are private and secure.
            </Text>
          </View>
        </View>

        {/* Fields Grid */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: 10,
            gap: 10,
            marginTop: 20,
          }}
        >
          {fields.map((field, index) => (
            <View
              key={index}
              style={{
                width: width * 0.44,
                borderColor: "#14B8A6",
                borderWidth: 0.5,
                borderRadius: 5,
                height: 85,
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 8,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  width: "100%",
                }}
              >
                {field.icon}
                <Text style={{ fontSize: 12, flexShrink: 1 }}>
                  {field.label}
                </Text>
              </View>

              <TextInput
                placeholder={field.placeholder}
                placeholderTextColor="#aaa"
                keyboardType="numeric"
                value={field.value}
                onChangeText={field.onChange}
                style={{
                  borderWidth: 0.5,
                  borderColor: "#14B8A6",
                  width: "100%",
                  height: 30,
                  paddingLeft: 10,
                  borderRadius: 3,
                }}
              />
            </View>
          ))}
        </View>

        {/* Result Box */}
        {result && (
          <View
            style={{
              margin: 10,
              marginTop: 20,
              padding: 15,
              borderWidth: 1,
              borderColor: result.prediction === 1 ? "#ef4444" : "#22c55e",
              borderRadius: 8,
              backgroundColor:
                result.prediction === 1 ? "#fef2f2" : "#f0fdf4",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: result.prediction === 1 ? "#ef4444" : "#22c55e",
                textAlign: "center",
              }}
            >
              {result.prediction === 1
                ? "⚠️ Signs of depression detected"
                : "✅ No significant signs detected"}
            </Text>
            {result.confidence && (
              <Text
                style={{ textAlign: "center", marginTop: 5, color: "#555" }}
              >
                Confidence: {(result.confidence * 100).toFixed(1)}%
              </Text>
            )}
          </View>
        )}

        {/* Analyze Button */}
        <TouchableOpacity
          onPress={analyzeData}
          disabled={loading}
          style={{
            backgroundColor: loading ? "#aaa" : "green",
            marginHorizontal: 14,
            marginTop: 20,
            height: 45,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              Analyze My Result
            </Text>
          )}
        </TouchableOpacity>

        {/* Disclaimer */}
        <View
          style={{ alignItems: "center", marginTop: 20, paddingHorizontal: 14 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <AntDesign name="safety" size={20} color="#14B8A6" />
            <Text style={{ textAlign: "center" }}>
              This assessment is not a medical diagnosis.
            </Text>
          </View>
          <Text style={{ textAlign: "center", color: "#777", marginTop: 4 }}>
            If you need help, please reach out to a mental health professional.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
}