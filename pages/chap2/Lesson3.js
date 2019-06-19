import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C2Lesson3 extends Component {

   goToLesson() {
      Actions.lesson()
   }
render()
{
   return (

      <View style={summaryTheme.container}>
       <Swiper style={summaryTheme.wrapper} showsButtons={false} loop={false}>
      
        <View style={summaryTheme.slide1}>

         <View style={summaryTheme.row1}>
           <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={summaryTheme.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={summaryTheme.row2}>
<ScrollView showsVerticalScrollIndicator={true}>
<Text style={summaryTheme.wordHeading}>{`Send | build\n`}</Text>

<Text  style={summaryTheme.subheading}>{`For a current or future event: Send and build\n\nFor a past event: Sent and built\n`}
</Text>


    
<Text style={summaryTheme.examples}>{`❎ Let’s sent the message.\n✔ Let’s send the message.\n`}</Text>

<Text style={summaryTheme.examples}>{`❎ They are yet to built the tower.\n✔ They are yet to build the tower.\n`}</Text>

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
<Text style={summaryTheme.wordHeading}>{`feel | pay | lose\n`}</Text>

<Text  style={summaryTheme.subheading}>{`Do / does / did + feel/pay/lose\n\nhave, had, is, am, are, was, were, be + felt/paid/lost\n\nNOTHING + felt/paid/lost\n`}
</Text>


    
<Text style={summaryTheme.examples}>{`❎ After taking her medicines, she didn’t felt the pain.\n✔ After taking her medicines, she didn’t feel the pain.\n`}</Text>

<Text style={summaryTheme.examples}>{`❎ Lucy had pay the bill before leaving the restaurant.\n✔ Lucy had paid the bill before leaving the restaurant.\n`}</Text>


<Text style={summaryTheme.examples}>{`❎ He did lost his wallet again.\n✔ He did lose his wallet again\n`}</Text>
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
 <Text style={summaryTheme.wordHeading}>{`understand | teach\n`}</Text>

<Text  style={summaryTheme.subheading}>{`Do / does / did + understand/teach\n\nhave, had, is, am, are, was, were, be + understood/taught\n\nNOTHING + understood/taught\n`}
</Text>


    
<Text style={summaryTheme.examples}>{`❎ He did not understood the concepts being teached.\n✔ He did not understand the concepts being taught.\n`}</Text>

<Text style={summaryTheme.examples}>{`❎ He had teach English at the University.\n✔ He had taught English at the University.\n`}</Text>
</ScrollView>

       

          </View>

       <View style={summaryTheme.row3}>
          <View style={{width:'100%',alignItems:'center',alignSelf:'flex-end'}}>
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
