import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useWindowDimensions } from "react-native";
import { useState } from "react";
import { Modal } from "react-native";

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const [showDropdown, setshowdropdown] = useState(false);
  const [ageValue, setAgeValue] = useState(21);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "row",
            gap: 60,
            marginRight: 10,
            marginTop: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 72,
              alignItems: "center",
            }}
          >
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

        <View
          style={{
            borderColor: "green",
            borderWidth: 1,
            margin: 10,
            padding: 10,
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View style={{ marginTop: 7, marginLeft: 5 }}>
            <FontAwesome5 name="user-lock" size={24} color="#14B8A6" />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontWeight: "bold" }}>
              Please answer all questions honestly.
            </Text>
            <Text style={{ fontWeight: "thin", fontSize: 11 }}>
              Your responses are private and secure.
            </Text>
          </View>
        </View>

        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 30,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: width * 0.44,
                borderColor: "#14B8A6",
                borderWidth: 0.5,
                height: 85,
                gap: 8,
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  width: width * 0.4,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Feather name="calendar" size={24} color="#14B8A6" />
                <Text>1. Age</Text>
              </View>

              <TouchableOpacity>
                <TextInput
                  placeholder="21"
                  placeholderTextColor={"black"}
                  style={{
                    width: width * 0.4,
                    borderWidth: 0.5,
                    borderColor: "#14B8A6",
                    height: 30,
                    paddingLeft: 10,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                ></TextInput>
              </TouchableOpacity>
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                width: width * 0.44,
                borderWidth: 0.5,
                borderColor: "#14B8A6",
                height: 85,
                borderRadius: 5,
                paddingLeft: 10,
                paddingTop: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: width * 0.44,
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <FontAwesome name="male" size={24} color="#14B8A6" />
                <Text>2. Gender</Text>
              </View>

              <TouchableOpacity>
                <TextInput
                  placeholder="Male"
                  style={{
                    borderWidth: 0.5,
                    borderColor: "#14B8A6",
                    width: width * 0.4,
                    height: 30,
                    paddingLeft: 10,
                    marginRight: 10,
                    marginBottom: 7,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 30,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: width * 0.44,
                borderColor: "#14B8A6",
                borderWidth: 0.5,
                height: 85,
                gap: 8,
                borderRadius: 5,
              }}
            >
              <MaterialCommunityIcons name="sleep" size={24} color="#14B8A6" />
              <Text style={{ width: 150 }}>3. Sleep Duration (hours)</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: width * 0.44,
                borderColor: "#14B8A6",
                borderWidth: 0.5,
                height: 85,
                gap: 8,
                borderRadius: 5,
              }}
            >
              <MaterialCommunityIcons
                name="bookshelf"
                size={24}
                color="#14B8A6"
              />
              <Text style={{ width: 150 }}>4. Academic Pressure</Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 30,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: width * 0.44,
                borderColor: "#14B8A6",
                borderWidth: 0.5,
                height: 85,
                gap: 8,
                borderRadius: 5,
              }}
            >
              <AntDesign name="book" size={24} color="#14B8A6" />
              <Text style={{ width: 150 }}>5. Study Satisfaction</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: width * 0.44,
                borderColor: "#14B8A6",
                borderWidth: 0.5,
                height: 85,
                gap: 8,
                borderRadius: 5,
              }}
            >
              <FontAwesome6 name="bowl-food" size={24} color="#14B8A6" />
              <Text style={{ width: 150 }}>6. Dietary Habits</Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 30,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: width * 0.44,
                borderColor: "#14B8A6",
                borderWidth: 0.5,
                height: 85,
                gap: 8,
                borderRadius: 5,
              }}
            >
              <MaterialIcons name="family-restroom" size={24} color="#14B8A6" />
              <Text style={{ width: 150 }}>
                7. Family history of mental illness
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: width * 0.44,
                borderColor: "#14B8A6",
                borderWidth: 0.5,
                height: 85,
                gap: 8,
                borderRadius: 5,
              }}
            >
              <MaterialCommunityIcons
                name="seat-individual-suite"
                size={24}
                color="#14B8A6"
              />
              <Text style={{ width: 150 }}>8. Suicidal Thoughts</Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 30,
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: width * 0.44,
                borderColor: "#14B8A6",
                borderWidth: 0.5,
                height: 85,
                gap: 8,
                borderRadius: 5,
              }}
            >
              <FontAwesome name="money" size={24} color="#14B8A6" />
              <Text style={{ width: 150 }}>9. Financial Stress</Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                width: width * 0.44,
                borderColor: "#14B8A6",
                borderWidth: 0.5,
                height: 85,
                borderRadius: 5,
                paddingLeft: 10,
                paddingTop: 10,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: width * 0.44,
                  gap: 5,
                }}
              >
                <MaterialCommunityIcons
                  name="hours-12"
                  size={24}
                  color="#14B8A6"
                />
                <Text style={{ width: 150 }}>10. Study hours per day</Text>
              </View>

              <TouchableOpacity>
                <TextInput
                  placeholder="Enter your study hours"
                  style={{
                    borderWidth: 0.5,
                    borderColor: "#14B8A6",
                    width: width * 0.4,
                    height: 30,
                    paddingLeft: 10,
                    marginRight: 10,
                    marginBottom: 7,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              margin: 10,
              marginTop: 20,
              gap: 9,
              borderWidth: 0.5,
              height: 35,
              alignItems: "center",
              width: 380,
              marginLeft: 14,
            }}
          >
            <Entypo
              name="bar-graph"
              size={24}
              color="#14B8A6"
              style={{ marginLeft: 5 }}
            />
            <Text>Current CGPA</Text>
          </View>

          <View
            style={{ backgroundColor: "green", width: 380, marginLeft: 14 }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderColor: "#14B8A6",
                width: 380,
                height: 40,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                Analyze My Result
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", width: 380 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AntDesign name="safety" size={24} color="#14B8A6" />
              <Text style={{ textAlign: "center" }}>
                This assessment is not a medical diagnosis.
              </Text>
            </View>

            <Text style={{ textAlign: "center" }}>
              If you need help, please reach out to a mental health
              professional.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
