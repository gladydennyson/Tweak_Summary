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
     
        <View style={summaryTheme.slide1}>

         <View style={summaryTheme.row1}>
           <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={summaryTheme.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={summaryTheme.row2}>
<ScrollView showsVerticalScrollIndicator={true}>
<Text style={summaryTheme.subheading}>When to use/not use “a” and “an”</Text>


<Text style={summaryTheme.examples}>{`\n❎ Martha is crying because of headache.\n✔ Martha is crying because of a headache.\n`}
</ Text>


<Text style={summaryTheme.examples}>{`❎ December is cold month.\n✔ December is a cold month.\n`}
</ Text>



<Text style={summaryTheme.examples}>{`❎ What kind of person is she?\n✔ What kind of a person is she?\n`}
</ Text>

          
<Text style={summaryTheme.examples}>{`❎ What kind of person is she?\n✔ What kind of a person is she?\n`}
</ Text>


<Text style={summaryTheme.examples}>{`❎ What a nonsense!\n✔ What nonsense!\n`}
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

