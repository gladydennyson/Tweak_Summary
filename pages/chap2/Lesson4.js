import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C2Lesson4 extends Component {

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
<Text style={summaryTheme.wordHeading}>{` Choose | Overtake | Fly\n`}</Text>
<Text style={summaryTheme.subheading}>{`Do / does / did + Choose / overtake / fly\n\nhave, had, is, am, are, was, were, be + chosen / overtaken / flown\n\nNOTHING + chose | overtook / flew\n`}</Text>

<Text style={summaryTheme.examples}>{`❎ I chosen to eat sandwich for breakfast.\n✔ I chose to eat sandwich for breakfast.\n`}</Text>

<Text style={summaryTheme.examples}>{`❎ They are yet to built the tower.\n✔ He overtook the car ahead of him.\n`}</Text>

<Text style={summaryTheme.examples}>{`❎ I had flew to Paris.\n✔ I had flown to Paris.\n`}</Text>
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
<Text style={summaryTheme.wordHeading}>{`Bear | lie | undergo\n`}</Text>
 <Text style={summaryTheme.subheading}>{`Do / does / did + Bear / lie / undergo\n\nhave, had, is, am, are, was, were, be + borne / lain / undergone\n\nNOTHING + bore | lay | underwent\n`}</Text>

<Text style={summaryTheme.examples}>{`❎ She borne her child after lot of pain.\n✔ She bore her child after lot of pain.\n`}</Text>

<Text style={summaryTheme.examples}>{`❎ The chicken had lay there all day\n✔ The chicken had lain there all day.\n`}</Text>


<Text style={summaryTheme.examples}>{`❎ Although it was very needed, he didn’t underwent a surgery.\n✔ Although it was very needed, he didn’t undergo a surgery.\n`}</Text>
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
 <Text style={summaryTheme.wordHeading}>{`Run\n`}</Text>
 <Text style={summaryTheme.subheading}>{`Do / does / did + run\n\nhave, had, is, am, are, was, were, be + run\n\nNOTHING + ran\n`}</Text>

<Text style={summaryTheme.examples}>{`❎ He has ran from his responsibilities.\n✔ He has run from his responsibilities.\n`}</Text>

<Text style={summaryTheme.examples}>{`❎ He didn’t ran the race.\n✔ He didn’t run the race.\n`}</Text>

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
