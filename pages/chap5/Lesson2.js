import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C5Lesson2 extends Component {

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
<Text style={summaryTheme.wordHeading}>Me, Myself, and I</Text>
<Text></Text>
<Text style={summaryTheme.subheading}>When to use ‘I’</Text>
<Text style={summaryTheme.examples}>The word ‘I’ is used in the subject form of the word.
</Text>

<Text  style={summaryTheme.examples}>{`\n❎ In the next several weeks, my colleagues and me will have the solution.\n✔ In the next several weeks, my colleagues and I will be have the solution.\n`}
</Text>
<Text  style={summaryTheme.examples}>{`❎ On Wednesday 11 July, the other teachers and myself will be singing this song.\n✔ On Wednesday 11 July, the other teachers and I will be singing this song.\n`}
</Text>
<Text  style={summaryTheme.examples}>{`It is  always ‘someone and I\n`}
</Text>
<Text  style={summaryTheme.examples}>{`❎ You and me are going to do something about this.\n✔ You and I are going to do something about this.
`}
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
<Text style={summaryTheme.subheading}>When to use “Me’</Text>
<Text> </Text>
<Text style={summaryTheme.examples}>{`❎ That will buy you and I enough time to [do something].\n✔ That’ll buy Castle and me enough time to [do something].\n`}</Text>
<Text style={summaryTheme.examples}>{`❎ All information between the clients and myself will be a secret.\n✔ All information between the clients and me will be a secret.\n`}</Text>

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
<Text  style={summaryTheme.subheading}>When to use ‘my’</Text>
<Text> </Text>
<Text style={summaryTheme.examples}>{`❎ Me and my colleagues are going to try (to do something].\n✔ My colleagues and I are going to try (to do something].\n`}</Text>
<Text style={summaryTheme.examples}>{`❎ Myself and the others attended the concert.\n✔ The others and I attended the concert.\n`}</Text>

<Text style={summaryTheme.examples}>{`❎ Jack and yourself are my best friends.\n✔ Jack and you are my best friends.`}</Text>
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

