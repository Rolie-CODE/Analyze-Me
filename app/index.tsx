import {Text, View, TextInput, Button} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function HomeScreen() {
  return (
    <View style= {{backgroundColor: "white",flex:1}}>
        <View style = {{marginLeft: 10, display:'flex', flexDirection:"row", gap: 60, marginRight:10, marginTop: 20}}>

            <View style = {{display:'flex', flexDirection:"row", gap: 53, alignItems: 'center'}}>
                <FontAwesome5 name="brain" size={24} color="#14B8A6" />
                <Text style = {{fontSize: 20, fontWeight: 'bold'}}>
                    Depression Analyzer
                </Text>
            </View>
            <MaterialCommunityIcons name="shield-lock-outline" size={28} color="#14B8A6" />

        </View>

        <View style = {{borderColor: "green", borderWidth: 1, margin: 10, padding: 10, marginTop: 20, display:"flex", flexDirection: "row"}}>
            <View style={{marginTop: 7, marginLeft: 5}}>
                <FontAwesome5 name="user-lock" size={24} color="#14B8A6" />
            </View>
            <View style={{marginLeft: 20}}>
                <Text style={{fontWeight:'bold'}}>
                    Please answer all questions honestly.
                </Text>
                <Text style={{fontWeight: 'thin', fontSize: 11}}>
                    Your responses are private and secure.
                </Text>
            </View>
        </View>

        <View>
            <View style = {{display:'flex', flexDirection:'row', gap:60, marginLeft:20}}>
                
                <View style = {{display:'flex', flexDirection:'row', width: 150, borderColor: "black", borderWidth: 1, height: 50}}>
                    <Feather name="calendar" size={24} color="#14B8A6" />
                    <Text>
                        1. Age
                    </Text>
                </View>

                <View style = {{display:'flex', flexDirection:'row', width: 150, borderColor: "black", borderWidth: 1, height: 50}}>
                    <Feather name="calendar" size={24} color="#14B8A6" />
                    <Text>
                        2. Gender
                    </Text>
                </View>
            </View>

            <View style = {{display:'flex', flexDirection:'row', gap:60, marginLeft:20}}>
                
                <View style = {{display:'flex', flexDirection:'row', width: 150, borderColor: "black", borderWidth: 1, height: 50}}>
                    <Feather name="calendar" size={24} color="#14B8A6" />
                    <Text>
                        1. Age
                    </Text>
                </View>

                <View style = {{display:'flex', flexDirection:'row', width: 150, borderColor: "black", borderWidth: 1, height: 50}}>
                    <Feather name="calendar" size={24} color="#14B8A6" />
                    <Text>
                        2. Gender
                    </Text>
                </View>
            </View>

            <View style = {{display:'flex', flexDirection:'row', gap:60, marginLeft:20}}>
                
                <View style = {{display:'flex', flexDirection:'row', width: 150, borderColor: "black", borderWidth: 1, height: 50}}>
                    <Feather name="calendar" size={24} color="#14B8A6" />
                    <Text>
                        1. Age
                    </Text>
                </View>

                <View style = {{display:'flex', flexDirection:'row', width: 150, borderColor: "black", borderWidth: 1, height: 50}}>
                    <Feather name="calendar" size={24} color="#14B8A6" />
                    <Text>
                        2. Gender
                    </Text>
                </View>
            </View>

            <View style = {{display:'flex', flexDirection:'row', gap:60, marginLeft:20}}>
                
                <View style = {{display:'flex', flexDirection:'row', width: 150, borderColor: "black", borderWidth: 1, height: 50}}>
                    <Feather name="calendar" size={24} color="#14B8A6" />
                    <Text>
                        1. Age
                    </Text>
                </View>

                <View style = {{display:'flex', flexDirection:'row', width: 150, borderColor: "black", borderWidth: 1, height: 50}}>
                    <Feather name="calendar" size={24} color="#14B8A6" />
                    <Text>
                        2. Gender
                    </Text>
                </View>
            </View>

            <View style = {{display:'flex', flexDirection:'row', gap:60, marginLeft:20}}>
                
                <View style = {{display:'flex', flexDirection:'row', width: 150, borderColor: "black", borderWidth: 1, height: 50}}>
                    <Feather name="calendar" size={24} color="#14B8A6" />
                    <Text>
                        1. Age
                    </Text>
                </View>

                <View style = {{display:'flex', flexDirection:'row', width: 150, borderColor: "black", borderWidth: 1, height: 50}}>
                    <Feather name="calendar" size={24} color="#14B8A6" />
                    <Text>
                        2. Gender
                    </Text>
                </View>
            </View>

            <View>
                <Text>
                    Current CGPA
                </Text>
            </View>

            <View>
                <Button
                title='Analyze my result'
                color={"green"}/>
            </View>
        </View>
    </View>
  );
}