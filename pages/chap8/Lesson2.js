import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C1Lesson2 extends Component {

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
<Text style={summaryTheme.wordHeading}>Phenomenon</Text>
<Text> </Text>
<Text style={summaryTheme.subheading}>A remarkable person or thing</Text>
<Text style={summaryTheme.examples}>{`Singular form: phenomenon\nPlural form: phenomena`}</Text>
<Text style={summaryTheme.examples}>The word ‘I’ is used in the subject form of the word.
</Text>

<Text  style={summaryTheme.examples}>{`\n✔ The doctors began to notice a strange phenomenon.\n✔ In all his travels he studied only the phenomena of nature and human life.\n`}
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
<Text style={summaryTheme.wordHeading}>Person, persons and people</Text>
<Text style={summaryTheme.subheading}>We use person in the singular to refer to any human being:</Text>

<Text style={summaryTheme.examples}>{`✔ Joel is such a nice person.\n✔ She’s a person I have a lot of respect for.\n`}</Text>
<Text  style={summaryTheme.subheading}>To refer to groups of human beings or humans in general, we use people:</Text>

<Text style={summaryTheme.examples}>{`\n✔ I saw three people standing on the corner.\n❎I saw three persons standing on the corner.\n`}</Text>
<Text style={summaryTheme.examples}>{`✔ Jim and Wendy are such nice people.\n❎ Jim and Wendy are such nice person.\n\n✔ People are generally very selfish.\n\nThree people were interviewed for the job, but only one person had the right qualifications and experience.`}</Text>

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


