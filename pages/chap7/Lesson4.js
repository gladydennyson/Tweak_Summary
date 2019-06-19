import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


export default class C1Lesson4 extends Component {

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
<Text  style={summaryTheme.wordHeading}>{`Either vs Neither\n`}</Text>
<Text  style={summaryTheme.subheading}>“Either” means "one or the other of two people or things," and “neither” means "not one or the other of two people or things." 
In other words, neither means "not either."</Text>

<Text style={summaryTheme.examples}>{`\nYou may borrow either book. [you may borrow one or the other of the two books]\n
You may borrow neither book. [=you may not borrow one and you may not borrow the other of the two books; you may not borrow either book]
`}</Text>



            
       
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
<Text  style={summaryTheme.wordHeading}>{`Affect vs effect?\n`}</Text>

<Text style={summaryTheme.subheading}>{`'Affect' means to impact or change.\'nEffect' is the result of a change.
`}</Text>

<Text style={summaryTheme.examples}>{`So, if Daisy affects Ruby, Ruby experiences the effect of Daisy’s action.\n
The medicine will affect your eyesight for at least an hour.\n
You’ll feel the effect of the medication in the next twenty minutes.
`}</Text>

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
<Text  style={summaryTheme.wordHeading}>{`Sympathy vs empathy\n`}</Text>

<Text style={summaryTheme.subheading}>{`Empathy is the ability to experience the feelings of another person.\nIt goes beyond sympathy, which is caring and understanding for the suffering of others.
`}</Text>

<Text style={summaryTheme.subheading}>{`Empathy - Personal understanding`}</Text>
<Text style={summaryTheme.examples}>{`I know it's not easy to lose weight because I have faced the same problems myself.\n`}</Text>

<Text style={summaryTheme.subheading}>{`Sympathy - Understanding the experience of others`}</Text>
<Text style={summaryTheme.examples}>{`Trying to lose weight can often be a difficult task.`}</Text>

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
