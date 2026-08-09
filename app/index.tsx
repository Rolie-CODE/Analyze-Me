import {View,Text, TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function HomeScreen() {

  return(

    <View style = {{flex:1, backgroundColor: 'white',}}>
      <View style = {{backgroundColor: 'green', height: 120}}>
        <View style = {{flexDirection : 'row', gap: 80, alignItems: 'center', justifyContent: 'center'}}>
          <View>
            <Text style = {{fontSize: 30, color: 'white'}}>
              Analyze Me
            </Text>
            <Text style = {{color: 'white'}}>
              What would you like to analyze today?
            </Text>
          </View>
          <AntDesign name="picture" size={24} color="white" style = {{}}/>
        </View>
        <TouchableOpacity style = {{flexDirection: 'row', borderWidth: 0.5, borderRadius: 0.5, width: 290, marginLeft: 35, gap: 10}}>
            <EvilIcons name="search" size={24} color="black" style={{marginLeft: 5}}/>
            <Text>
              Search analyses...
            </Text>
        </TouchableOpacity>
      </View>

      <View style = {{backgroundColor: 'black', flexDirection: 'row', gap: 12}}>

        <View>
          <Text style = {{color: 'white'}}>
            Analyses run
          </Text>

          <Text style = {{color: 'white'}}>
            12
          </Text>

          <Text style = {{color: 'white'}}>
            all time
          </Text>
        </View>

        <View>
          <Text style = {{color: 'white'}}>
            Last result
          </Text>

          <Text style = {{color: 'white'}}>
            Low Risk
          </Text>

          <Text style = {{color: 'white'}}>
            depression
          </Text>
        </View>
      </View>

      <View style = {{backgroundColor: 'black'}}>

        <Text style = {{color: 'white'}}>
          Available Modules
        </Text>

        <View>
          <View>
            <FontAwesome5 name="brain" size={24} color="white" />
            <Text style = {{color: 'white'}}>
              Depression risk
            </Text>
            <Text style = {{color: 'white'}}>
              Sleep, stress and lifestyle
            </Text>
          </View>
        </View>

        <View>
          <View>
            <FontAwesome5 name="brain" size={24} color="white" />
            <Text style = {{color: 'white'}}>
              Loan egibility
            </Text>
            <Text style = {{color: 'white'}}>
              Income, credit and history
            </Text>
          </View>
        </View>

        <View>
          <View>
            <FontAwesome5 name="brain" size={24} color="white" />
            <Text style = {{color: 'white'}}>
              More Coming
            </Text>
            <Text style = {{color: 'white'}}>
              New Modules in development
            </Text>
            <Text>
              Soon
            </Text>
          </View>
        </View>
      </View>
    </View>

  )

}
