import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


  


export default class C6Lesson1 extends Component {

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
    
<Text style={summaryTheme.wordHeading}>{`Do vs Does\n`}</Text>
<Text  style={summaryTheme.subheading}>{ `Do + I / you / we / they\nhave / buy / eat / etc.\n`}</Text>

<Text style={summaryTheme.subheading}>{`Does + he / she / it`}</Text>


<Text style={summaryTheme.examples}>{`\n✔ I do like to eat chocolates.\n✔ He does like to eat chocolates.`}</Text>

<Text  style={summaryTheme.examples}>{`❎ He don't have a pen.\n✔ He doesn't have a pen.\n`}</Text>
<Text  style={summaryTheme.examples}>{`❎ I doesn’t need it.\n✔ I don’t need it.\n`}</Text>
<Text  style={summaryTheme.examples}>{`❎ He don’t speak French.\n✔ He doesn’t speak French.`}</Text>

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

