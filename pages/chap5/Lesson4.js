import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


export default class C5Lesson4 extends Component {

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
<Text style={summaryTheme.wordHeading}>Who vs whom</Text>
<Text> </Text>
<Text  style={summaryTheme.subheading}>Denotes who is doing something (like he or she). </Text>
<Text  style={summaryTheme.subheading}>Whom is used as a direct or indirect object </Text>

<Text style={summaryTheme.examples}>Try substituting “he” or “she” and “him” or “her” in the sentence.</Text>

<Text style={summaryTheme.examples}>{`\nIf “he” or “she” fits, you should use who.\nIf “him” or “her” fits, you should use whom.\n
`}</Text>

<Text  style={summaryTheme.examples}>Who/whom ate my sandwich?</Text>

<Text style={summaryTheme.examples}>{`❎ Her ate my Sandwich\n✔ She ate my Sandwich\n
`}</Text>

<Text style={summaryTheme.examples}>{`As ‘She’ fits better in the sentence, we can say that the correct fit would be - ‘Who’.
`}</Text>


<Text  style={summaryTheme.examples}>{`✔ Who ate my sandwich?.\nWith who/whom did you go to the movies last week?`}
</Text>

<Text  style={summaryTheme.examples}>{`\nAs ‘him’ or ‘her fits here better.\n✔ With whom did you go to the movies last week?\n`}
</Text>
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
