import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


export default class C3Lesson4 extends Component {

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
<Text style={summaryTheme.wordHeading}>For vs Of </Text>
<Text></Text>
<Text style={summaryTheme.subheading}>Of </Text>
<Text style={summaryTheme.examples}>{`‘Of’ usually shows a connection or belonging.\nIs she a friend of yours?
`}</Text>
<Text style={summaryTheme.subheading}>For </Text>
<Text style={summaryTheme.examples}>{`‘For’ usually tells us about the use of something, a reason or purpose.\nWe need new batteries for the remote control\n`}</Text>



<Text style={summaryTheme.examples}>{`❎ They were arrested and accused for murder\n✔ They were arrested and accused of murder.
\n`}</Text>
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
<Text  style={summaryTheme.wordHeading}>When to Use 'Off'</Text>
<Text></Text>
<Text  style={summaryTheme.subheading}>'Off' is the opposite of on:\n</Text>


<Text style={summaryTheme.examples}>{`❎ You should always make sure the stove is turned of after cooking.\n✔ You should always make sure the stove is turned off after cooking.\n`}</Text>

<Text style={summaryTheme.subheading}>{`'Off' can also be used when we want to say that something is away from a place:\n`}</Text>

<Text style={summaryTheme.examples}>{`❎ The dog ran of.\n✔ The dog ran off.\n`}</Text>

<Text style={summaryTheme.subheading}>{`We can use 'off' when we want to say that something has been removed:\n`}</Text>
<Text style={summaryTheme.examples}>{`❎ He took the wheel of the car.\n✔ He took the wheel off the car.\n`}</Text>
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
