import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C3Lesson3 extends Component {

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
<Text style={summaryTheme.wordHeading}>For and Since - Period</Text>
<Text></Text>
<Text style={summaryTheme.subheading}>For:</Text>
<Text style={summaryTheme.examples}>{`❎ I am excited for the new Apple watch.\n✔ I am excited about the new Apple watch.\n`}
</ Text>

<Text style={summaryTheme.subheading}>For and Since</Text>
<Text style={summaryTheme.examples}>{`'for' - you are measuring time.\n'since' - you are referring to a specific time.\n`}
</ Text>



<Text style={summaryTheme.examples}>{`❎ She had been driving since four hours.\n✔ She had been driving for four hours.\n`}
</ Text>

          
<Text style={summaryTheme.examples}>{`❎ I haven’t seen him for last year.\n✔ I haven’t seen him since last year.\n`}
</ Text>


<Text style={summaryTheme.examples}>{`❎ They have known each other for eight years’\n✔ They have known each other since eight years\n`}
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
