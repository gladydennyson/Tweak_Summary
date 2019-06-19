import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C5Lesson3 extends Component {

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
<Text style={summaryTheme.wordHeading}>that/whom/which</Text>
<Text> </Text>
<Text style={summaryTheme.subheading}>That vs which</Text>


<Text style={summaryTheme.examples}>{`Which/What do you want for lunch?\n"Which" only works when you have choices (e.g. when you have food options in front of you).\n`}
</ Text>

<Text style={summaryTheme.examples}>{`✔ She wore the dress that suited her best.\n❎ She wore the dress which suited her best.\n`}
</ Text>

<Text style={summaryTheme.examples}>{`✔ The horse, which she bought last year, is six years old.\n❎ The horse, that she bought last year, is six years old.\n`}
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
<Text style={summaryTheme.wordHeading}>Whom and which</Text>
<Text> </Text>
<Text style={summaryTheme.subheading}>Children, teachers, people, man, and guests are all words that refer to human beings. They require the pronoun 'who' or 'whom' — never 'which'.
</Text>


<Text style={summaryTheme.examples}>{`\n❎ My child’s last three teachers, two of which were first years, were unprepared to teach.\n✔ My child’s last three teachers, two of whom were first years, were unprepared to teach.\n`}
</ Text>


<Text style={summaryTheme.examples}>{`❎ More people died in the firebombing that preceded the atomic bombs, many of which were children.\n✔ More people died in the firebombing that preceded the atomic bombs, many of whom were children.\n`}
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

