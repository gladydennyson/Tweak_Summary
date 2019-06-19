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

<Text style={summaryTheme.wordHeading}>{`He/Him, She/her, his/hers\n`}</Text>
<Text  style={summaryTheme.subheading}>Read the following sentences.</Text>

<Text style={summaryTheme.examples}>{`He has a camera.\nThe camera belongs to him.\nIt is his camera.\nThe camera is his.\n`}</Text>

<Text style={summaryTheme.examples}>{`She has a diamond ring.\nThe diamond ring belongs to her.\nIt is her diamond ring.\nThe diamond ring is hers.\n`}</Text>

<Text style={summaryTheme.examples}>These sentences have the same meaning.</Text>



            
       
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
            
<Text  style={summaryTheme.subheading}>Read the following sentences.</Text>
<Text  style={summaryTheme.examples}>{`\nThis is his cap. \nThis cap is his\n\nThis is her ring. \nThis ring is hers. \n(NOT His ring is her.)
`}</Text>

<Text  style={summaryTheme.examples}>{`"She" goes with "I" and "her " goes with "me."\n`}</Text>



<Text  style={summaryTheme.examples}>{`❎ Her and I traveled.\n✔ She and her friend went out\n❎ Her and her friend went out.`}</Text>




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

