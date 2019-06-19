import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


export default class C6Lesson4 extends Component {

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
<Text  style={summaryTheme.wordHeading}>May - positive doubt</Text>
<Text></Text>
<Text  style={summaryTheme.subheading}>Meanings:</Text>
<Text  style={summaryTheme.subheading}>1.This is used to ask formal permissions</Text>

<Text style={summaryTheme.examples}>{`May I come in?\nMay I say something now?\n`}</Text>

<Text  style={summaryTheme.subheading}>2.Used to suggest something that is possible</Text>

<Text style={summaryTheme.examples}>{`They may be late\nI may be wrong.`}</Text>





            
       
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
<Text  style={summaryTheme.wordHeading}>Might - strong uncertainty </Text>
<Text></Text>
<Text  style={summaryTheme.subheading}>Meanings: Might is the past form of “May” and it tells us about the possibility for something to happen.</Text>

<Text style={summaryTheme.examples}>{`\nHe might have finished the work.\nI might go see a doctor.\nI might not come this time.\nHe might be right.`}</Text>



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
<Text  style={summaryTheme.wordHeading}>Must - Compulsion</Text>
<Text></Text>
<Text  style={summaryTheme.subheading}>Meanings:</Text>
<Text  style={summaryTheme.subheading}>1.Used to express something formally required or necessary.
</Text>

<Text style={summaryTheme.examples}>{`I must complete the project by this week.\nYou must answer my question right now.\n`}</Text>

<Text  style={summaryTheme.subheading}>2.Used to show that something is very likely.</Text>

<Text style={summaryTheme.examples}>{`He must be a genius.\nYou must be joking!\nYou must be joking!`}</Text>
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
