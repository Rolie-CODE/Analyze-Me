import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ backgroundColor: "white", height: 120 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 30, color: "black" }}>Analyze Me</Text>
            <Text style={{ color: "black" }}>
              What would you like to analyze today?
            </Text>
          </View>
          <AntDesign name="picture" size={24} color="black" style={{}} />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            borderWidth: 0.5,
            borderRadius: 0.5,
            width: 290,
            marginLeft: 35,
            gap: 10,
          }}
        >
          <EvilIcons
            name="search"
            size={24}
            color="black"
            style={{ marginLeft: 5 }}
          />
          <Text>Search analyses...</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: "white", flexDirection: "row", gap: 12 }}>
        <View>
          <Text style={{ color: "black" }}>Analyses run</Text>

          <Text style={{ color: "black" }}>12</Text>

          <Text style={{ color: "black" }}>all time</Text>
        </View>

        <View>
          <Text style={{ color: "black" }}>Last result</Text>

          <Text style={{ color: "black" }}>Low Risk</Text>

          <Text style={{ color: "black" }}>depression</Text>
        </View>
      </View>

      <View style={{ backgroundColor: "white" }}>
        <Text style={{ color: "black" }}>Available Modules</Text>

        <View>
          <View>
            <Link href="/depression_screen" asChild>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 20,
                  borderWidth: 0.5,
                }}
              >
                <FontAwesome5 name="brain" size={24} color="black" />
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text style={{ color: "black" }}>Depression risk</Text>
                  <Text style={{ color: "black" }}>
                    Sleep, stress and lifestyle
                  </Text>
                </View>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              borderWidth: 0.5,
            }}
          >
            <FontAwesome name="money" size={24} color="black" />
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text style={{ color: "black" }}>Loan egibility</Text>
              <Text style={{ color: "black" }}>Income, credit and history</Text>
            </View>
            <Text style={{ paddingLeft: 149, paddingTop: 8 }}>Go</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 20,
              borderWidth: 0.5,
            }}
          >
            <Ionicons name="stats-chart-outline" size={24} color="black" />
            <View>
              <Text style={{ color: "black" }}>More Coming</Text>
              <Text style={{ color: "black" }}>New Modules in development</Text>
            </View>
            <Text style={{ paddingLeft: 95, paddingTop: 8 }}>Soon.....</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
