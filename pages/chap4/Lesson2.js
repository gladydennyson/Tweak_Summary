import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C4Lesson2 extends Component {

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
<Text style={summaryTheme.wordHeading}>Beat</Text>
<Text> </Text>
<Text style={summaryTheme.subheading}>Bate and Beated both are incorrect words.</Text>

<Text style={summaryTheme.examples}>{`✔ Beat and Beaten\n`}</Text>
  <Text style={summaryTheme.examples}>{`❎ He had beated him.\n✔ He had beaten him\n`}
</Text>

<Text style={summaryTheme.examples}>{`❎ The goons finally beated them all.\n✔ The goons finally beat them all.\n`}
</ Text>
</ScrollView>
     
          </View>

         <View style={summaryTheme.row3}>
        
          <View style={summaryTheme.row3inside}>
          <TouchableOpacity style={summaryTheme.button} onPress={() => this.refs.swiper.scrollBy(1)}>
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

<Text style={summaryTheme.wordHeading}>Bet and Hit</Text>
<Text> </Text>
<Text style={summaryTheme.examples}>{`❎ Betted.\n❎ Hitted.\n`}
</ Text>

<Text style={summaryTheme.examples}>{`✔ He had betted against her wish.\n✔ He had bet against her wish.\n`}
</ Text>

<Text style={summaryTheme.examples}>{`✔ He hitted the ball out of the stadium.\n✔ He hit the ball out of the stadium.`}</Text>
</ScrollView>

          </View>

       <View style={summaryTheme.row3}>
          
          <View style={summaryTheme.row3inside}>
          <TouchableOpacity style={summaryTheme.button} onPress={() => this.refs.swiper.scrollBy(1)}>
          <Text style={summaryTheme.buttonText}>Next</Text>
          </TouchableOpacity>
           
          </View>
       
          
          
       </View>

        </View>

         <View style={summaryTheme.slide3}>

         <View style={summaryTheme.row1}>
          <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={summaryTheme.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={summaryTheme.row2}>
 <ScrollView showsVerticalScrollIndicator={true}>           
 <Text style={summaryTheme.wordHeading}>Talked | Phoned</Text>
 <Text> </Text>
<Text style={summaryTheme.subheading}>Although they might sound wrong, talked and phoned are words which can be used in the right sentence.</Text>

<Text style={summaryTheme.examples}>{`\n✔ He had talked to his mother.\n✔ We have talked about it a long time back.\n✔ Who was it that you phoned?\n✔ We did not know about it till someone phoned us.`}
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
