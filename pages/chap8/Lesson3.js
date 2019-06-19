import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C1Lesson3 extends Component {

   goToLesson() {
      Actions.lesson()
   }
render()
{
   return (

      <View style={summaryTheme.container}>
    <Swiper ref='swiper' style={summaryTheme.wrapper} showsButtons={false} loop={false}> 
        <View style={summaryTheme.slide1}>

         <View style={summaryTheme.row1}>
           <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={summaryTheme.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={summaryTheme.row2}>
<ScrollView showsVerticalScrollIndicator={true}>
<Text style={summaryTheme.wordHeading}>Woman</Text>
<Text style={summaryTheme.subheading}>Singular form: woman</Text>
<Text style={summaryTheme.subheading}>Plural form: women</Text>


<Text style={summaryTheme.examples}>{`✔ A woman has a right to protect herself.\n✔ The two women laughed and pointed at her shirt.\n`}
</ Text>
<Text style={summaryTheme.wordHeading}>Mouse</Text>

<Text style={summaryTheme.subheading}>Singular form: mouse</Text>
<Text style={summaryTheme.subheading}>Plural form: mice</Text>

<Text style={summaryTheme.examples}>{`✔ A mouse is in the box.\n✔ The house was infested with mice and rats.\n`}
</ Text>
 </ScrollView>         
          </View>

         <View style={summaryTheme.row3}>
        
          <View style={summaryTheme.row3inside}>
          <TouchableOpacity style={summaryTheme.button}>
          <Text style={summaryTheme.buttonText}>Next</Text>
          </TouchableOpacity>
           
          </View>
       
          
          
       </View>

        </View>

            <View style={summaryTheme.slide2}>

         <View style={summaryTheme.row1}>
           <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={summaryTheme.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={summaryTheme.row2}>
<ScrollView showsVerticalScrollIndicator={true}>

<Text style={summaryTheme.wordHeading}>Bus</Text>
<Text style={summaryTheme.subheading}>Singular form: bus</Text>
<Text style={summaryTheme.subheading}>Plural form: buses</Text>


<Text style={summaryTheme.examples}>{`✔ He missed the bus.\n✔ A number of buses go through that route.\n`}
</ Text>

<Text style={summaryTheme.wordHeading}>House</Text>
<Text style={summaryTheme.subheading}>Singular form: house</Text>
<Text style={summaryTheme.subheading}>Plural form: houses</Text>


<Text style={summaryTheme.examples}>{`✔ Come to the house with me.\n✔ The houses in the city are mostly built of bricks.\n`}
</ Text>
 </ScrollView>         
          </View>

         <View style={summaryTheme.row3}>
        
          <View style={summaryTheme.row3inside}>
          <TouchableOpacity style={summaryTheme.button}  onPress = {this.goToLesson}>
          <Text style={summaryTheme.buttonText}>Start Lesson</Text>
          </TouchableOpacity>
           
          </View>
       
          
          
       </View>

        </View>
           
        </Swiper>
      </View>
     
   )
}

}

