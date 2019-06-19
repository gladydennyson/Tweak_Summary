import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C4Lesson3 extends Component {

   goToLesson() {
      Actions.lesson()
   }
render()
{
   return (

      <View style={summaryTheme.container}>
     
        <View style={summaryTheme.slide1}>

         <View style={summaryTheme.row1}>
           <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={summaryTheme.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={summaryTheme.row2}>
          <ScrollView showsVerticalScrollIndicator={true}>
<Text style={summaryTheme.wordHeading}>Spell / spelled/spelt </Text>
<Text> </Text>
<Text style={summaryTheme.subheading}>Do / does / did / can + spell</Text>
<Text> </Text>
<Text style={summaryTheme.subheading}>have, had, is, am, are, was, were, be + Spelt</Text>
<Text> </Text>
<Text style={summaryTheme.subheading}>NOTHING + spelled</Text>
<Text> </Text>
<Text style={summaryTheme.examples}>{`❎ Can you please spelt your name for me?\n✔ Can you please spell your name for me?\n`}
</ Text>

<Text style={summaryTheme.examples}>{`❎ He spelt her name wrongly.\n✔ He spelled her name wrongly.\n`}
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

         
      </View>
     
   )
}

}
