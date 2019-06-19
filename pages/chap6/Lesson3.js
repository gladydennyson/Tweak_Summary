import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C8Lesson3 extends Component {

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
<Text style={summaryTheme.wordHeading}>could/would/should</Text>
<Text></Text>
<Text style={summaryTheme.subheading}>Should’ can be used:</Text>
<Text></Text>
<Text style={summaryTheme.subheading}>1. To express something that is probable.</Text>

<Text style={summaryTheme.examples}>{`“John should be here by 2:00 PM.”\n`}
</ Text>
<Text style={summaryTheme.subheading}>2. To ask questions.</Text>

<Text style={summaryTheme.examples}>{`“Should we turn left at this street?”\n`}
</ Text>
<Text style={summaryTheme.subheading}>3. To show compulsion, give recommendation or even an opinion.</Text>

<Text style={summaryTheme.examples}>{`“You should stop eating fast food.”\n“We should go to the park tomorrow.”`}
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

<Text style={summaryTheme.subheading}>‘Would’ can be used:</Text>
<Text></Text>
<Text style={summaryTheme.subheading}>1. To ask ‘who’, ‘what’, ‘where’, ‘when’, ‘why’ or ‘how’ (not always, but often).</Text>

<Text style={summaryTheme.examples}>{`“How would you do that?”\n“What would you do if…”\n“When would we have time to do that?”\n`}
</ Text>
<Text style={summaryTheme.subheading}>2. To make a polite request.</Text>

<Text style={summaryTheme.examples}>{`“Would you like any tea?”\n`}
</ Text>
<Text style={summaryTheme.subheading}>3. In hypothetical situations.</Text>

<Text style={summaryTheme.examples}>{`“I would love to buy a boat one day.”\n`}
</ Text>
<Text style={summaryTheme.subheading}>4. To ask questions.</Text>

<Text style={summaryTheme.examples}>{`“Would you like to join us tonight?”`}
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
  
      <View style={summaryTheme.slide3}>

         <View style={summaryTheme.row1}>
           <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={summaryTheme.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={summaryTheme.row2}>
<ScrollView showsVerticalScrollIndicator={true}>

<Text style={summaryTheme.subheading}>‘Could’ can be used:</Text>
<Text></Text>
<Text style={summaryTheme.subheading}>1.To suggest a possibility.</Text>

<Text style={summaryTheme.examples}>{`“Whose journal is this? It could be her journal.\n”`}
</ Text>
<Text style={summaryTheme.subheading}>2. To make a polite request.</Text>

<Text style={summaryTheme.examples}>{`“Could you please move this box?”\n“Could you please pass that paper?”\n“Could you please move this box?” “I could, but I am really busy right now.”
`}
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

