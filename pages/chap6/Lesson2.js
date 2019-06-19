import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C6Lesson2 extends Component {

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
<Text style={summaryTheme.wordHeading}>have vs did</Text>
<Text></Text>
<Text style={summaryTheme.subheading}>“Did” is used to refer to something that has already been performed while “had” is used to refer to something that one is having.
</Text>


<Text  style={summaryTheme.examples}>{`\n❎ What if he didn’t steal the museum?\n✔ What if he hadn’t stolen the museum?\n`}
</Text>
<Text  style={summaryTheme.examples}>{`❎ She probably would have lived to 90 if this didn’t happen.\n✔ She probably would have lived to 90 if this hadn’t happened.\n`}
</Text>

<Text  style={summaryTheme.examples}>{`❎ What would have happened if the Titanic didn’t sink?.\n✔ What would have happened if the Titanic hadn’t sunk?
`}
</Text>
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
