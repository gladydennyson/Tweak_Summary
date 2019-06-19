import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


  


export default class C5Lesson1 extends Component {

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

<Text style={summaryTheme.wordHeading}>{`A large amount\n`}</Text>

<Text style={summaryTheme.subheading}>{`A lot of`}</Text>
<Text style={summaryTheme.examples}>{`She eats a lot of eggs each morning.\n`}</Text>
<Text style={summaryTheme.subheading}>{`Much`}</Text>
<Text style={summaryTheme.examples}>{`I didn't get much sleep last night.\n`}</Text>
<Text style={summaryTheme.subheading}>{`Several`}</Text>
<Text style={summaryTheme.examples}>{`He is the author of several books.\n`}</Text>

<Text  style={summaryTheme.wordHeading}>Small in amount</Text>
<Text></Text>
<Text style={summaryTheme.subheading}>{`Few`}</Text>
<Text style={summaryTheme.examples}>{`May I ask a few questions?.\n`}</Text>
<Text style={summaryTheme.subheading}>{`Little`}</Text>
<Text style={summaryTheme.examples}>{`The plants will grow into little bushes\n`}</Text>
<Text style={summaryTheme.subheading}>{`Less`}</Text>
<Text style={summaryTheme.examples}>{`the less time spent there, the better\n`}</Text>




       
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