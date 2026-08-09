import {View,Text, TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function HomeScreen() {

  return(

    <View style = {{flex:1, backgroundColor: 'white',}}>
      <View style = {{backgroundColor: 'white', height: 120}}>
        <View style = {{flexDirection : 'row', gap: 80, alignItems: 'center', justifyContent: 'center'}}>
          <View>
            <Text style = {{fontSize: 30, color: 'black'}}>
              Analyze Me
            </Text>
            <Text style = {{color: 'black'}}>
              What would you like to analyze today?
            </Text>
          </View>
          <AntDesign name="picture" size={24} color="black" style = {{}}/>
        </View>
        <TouchableOpacity style = {{flexDirection: 'row', borderWidth: 0.5, borderRadius: 0.5, width: 290, marginLeft: 35, gap: 10}}>
            <EvilIcons name="search" size={24} color="black" style={{marginLeft: 5}}/>
            <Text>
              Search analyses...
            </Text>
        </TouchableOpacity>
      </View>

      <View style = {{backgroundColor: 'white', flexDirection: 'row', gap: 12}}>

        <View>
          <Text style = {{color: 'black'}}>
            Analyses run
          </Text>

          <Text style = {{color: 'black'}}>
            12
          </Text>

          <Text style = {{color: 'black'}}>
            all time
          </Text>
        </View>

        <View>
          <Text style = {{color: 'black'}}>
            Last result
          </Text>

          <Text style = {{color: 'black'}}>
            Low Risk
          </Text>

          <Text style = {{color: 'black'}}>
            depression
          </Text>
        </View>
      </View>

      <View style = {{backgroundColor: 'white'}}>

        <Text style = {{color: 'black'}}>
          Available Modules
        </Text>

        <View>
          <View >
            <TouchableOpacity style = {{display: 'flex', flexDirection: 'row', gap: 20}}>
              <FontAwesome5 name="brain" size={24} color="black" style = {{ borderWidth: 0.5}}/>
              <View>
                <Text style = {{color: 'black', display: 'flex', flexDirection: 'column'}}>
                  Depression risk
                </Text>
                <Text style = {{color: 'black'}}>
                  Sleep, stress and lifestyle
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View>
            <FontAwesome name="money" size={24} color="black" />
            <Text style = {{color: 'black'}}>
              Loan egibility
            </Text>
            <Text style = {{color: 'black'}}>
              Income, credit and history
            </Text>
          </View>
        </View>

        <View>
          <View>
            <Ionicons name="stats-chart-outline" size={24} color="black" />
            <Text style = {{color: 'black'}}>
              More Coming
            </Text>
            <Text style = {{color: 'black'}}>
              New Modules in development
            </Text>
            <Text>
              Soonnp
            </Text>
          </View>
        </View>
      </View>
    </View>

  )

}
