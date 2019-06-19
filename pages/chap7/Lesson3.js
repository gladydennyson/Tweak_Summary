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
<Text style={summaryTheme.wordHeading}>If vs whether</Text>
<Text style={summaryTheme.subheading}>{`\n1.We use 'whether' for an indirect question where the answer is either yes or no`}</Text>
<Text style={summaryTheme.examples}>{`❎ He asked if his tie was straight.\n✔ He asked whether his tie was straight\n`}
</Text>
<Text style={summaryTheme.subheading}>2.to avoid confusion.</Text>
<Text style={summaryTheme.examples}>{`❎ Call me to let me know if you can come.\n✔ Call me to let me know whether you can come.\n`}
</Text>
<Text style={summaryTheme.subheading}>With ‘if’, there are two options:</Text>
<Text style={summaryTheme.examples}>{`1.Call regardless of your answer.\n2.Call only if you will be coming.\n`}
</Text>
<Text style={summaryTheme.subheading}>By using 'whether', the it is clear that a call is desired, regardless of whether the person is coming or not.
</Text>
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

<Text style={summaryTheme.wordHeading}>{`Between vs among\n`}</Text>

<Text style={summaryTheme.subheading}>We use 'between' to refer to two things which are clearly separated.</Text>
<Text style={summaryTheme.subheading}> We use 'among' to talk about things which are not clearly separated because they are part of a group or crowd or mass of objects:
</Text>

<Text style={summaryTheme.examples}>{`Our holiday house is between the mountains and the sea. (the mountains are on one side and the sea is on the other)\n`}
</ Text>
<Text style={summaryTheme.examples}>{`The ancient fountain was hidden among the trees. (surrounded by trees)\n`}
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
