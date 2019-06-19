import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
import summaryTheme from '../summaryTheme';


  


export default class C1Lesson1 extends Component {

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
<Text style={summaryTheme.subheading}>How to generally use A, An and The</Text>
<Text></Text>
<Text style={summaryTheme.examples}>"A" and "The" both can be used but the meaning of the sentence changes</Text>

<Text style={summaryTheme.subheading}>{`The:\n`}</Text>
<Text  style={summaryTheme.examples}>When we know what we are talking about.</Text>

<Text style={summaryTheme.examples}>{`Please give me the hammer.\nPlease give me the pen\n
The first - The second - The third - The next - The last - The previous\nThis is the fifth day of our conference.\n
The best - The biggest - The most important\nThis is the best day ever\n
Comparative forms, such as "bigger", "better", "more" can be used with both A/AN and THE.\nHe has a more expensive car than I do.\n
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
<Text style={summaryTheme.subheading}>{`A and An : \n`}</Text>
<Text  style={summaryTheme.examples}>An is used before the sound of vowels.</Text>

<Text style={summaryTheme.examples}>{`Words starting with A, E, I, O, \n `}</Text>
<Text style={summaryTheme.examples}>{`❎ My daughter really wants an dog for Christmas.\n✔ My daughter really wants a dog for Christmas.\n`}
</ Text>

<Text style={summaryTheme.examples}>{`❎ I saw a elephant.\n✔ I saw an elephant.`}
</ Text>


<Text style={summaryTheme.examples}>{`❎ Somebody call an policeman.\n✔ Somebody call a policeman.`}
</ Text>
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
<Text  style={summaryTheme.subheading}>"A" and "An" are used only for countable words.</Text>

<Text style={summaryTheme.examples}>{`\nCuriosity is a great trait. (Uncountable)\nWater is an important resource. (Uncountable)\nVegetables are good for you. (Countable)\n
I have a black and white cow. (Only one cow)\nI have a black and a white cow. (Two cows)
`}</Text>
<Text style={summaryTheme.examples}>{`\nThe secretary and accountant is present. (Here, secretary and accountant refer to the same person.)\nThe secretary and the accountant were present. (Here the secretary and the accountant are two different people.)
`}</Text>
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


