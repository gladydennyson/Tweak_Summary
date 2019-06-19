import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


export default class C4Lesson4 extends Component {

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
<Text style={summaryTheme.wordHeading}>say/tell</Text>
<Text> </Text>
<Text style={summaryTheme.subheading}>said – the past tense of the verb 'say'</Text>

<Text style={summaryTheme.subheading}>told – the past tense of 'tell'</Text>

<Text style={summaryTheme.subheading}>{`\nThe main meaning of the verb 'tell' is 'to speak or write something to someone.'
`}</Text>

<Text style={summaryTheme.subheading}>{`The main meaning of 'say' is 'to use your voice to express something in words.'
`}</Text>

<Text style={summaryTheme.subheading}>The most important tip to remember is that to use the 
verb 'tell', the information must be communicated to someone.</Text>

<Text style={summaryTheme.subheading}>You can’t just tell something, you have to tell something to someone. This is not true for the verb 'say'. 

</Text>

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
<Text style={summaryTheme.wordHeading}>Tell</Text>
<Text> </Text>

<Text style={summaryTheme.subheading}>{`Tell is used mainly to share information, and normally only when the receiver of the information is mentioned.\n`}
</Text>

<Text style={summaryTheme.examples}>Do not use for quotes.</Text>

<Text style={summaryTheme.examples}>{`\nHas she told you the good news, yet?\nPlease tell us your name and occupation.\nCan you tell your story to me?\n\nhe police officer told him to stop. [NOT The police offer told him, "Stop."]`}</Text>

<Text style={summaryTheme.examples}>{`To describe something:\n\nHe loves telling stories.\nI'm telling the truth.`}</Text>


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
<Text  style={summaryTheme.wordHeading}>Say</Text>
<Text> </Text>

<Text  style={summaryTheme.subheading}>Say is used for exact quotes, and when the receiver isn’t mentioned in the sentence.
</Text>
<Text> </Text>
  
<Text style={summaryTheme.examples}>{`“Good morning,” said the woman behind the counter.\nI just stopped by to say hello.\nI had only said three words before he interrupted me again.
`}</Text>

<Text style={summaryTheme.examples}>Say is also used to express opinions.</Text>
<Text style={summaryTheme.examples}>{`I wouldn't say that he's a great guitarist ALSO MEANS I don't think he's a great guitarist
`}</Text>

</ScrollView>

          </View>

       <View style={summaryTheme.row3}>
          <View style={summaryTheme.row3inside}>
          <TouchableOpacity style={summaryTheme.button} onPress = {this.goToLesson}>
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
