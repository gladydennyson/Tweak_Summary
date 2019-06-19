import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


  


export default class C3Lesson1 extends Component {

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
<Text style={summaryTheme.bodyHeaading}>Teaching how to use-  in / at / to</Text>

<Text style={summaryTheme.wordHeading}>{`\nTo and in \n`}</Text>
<Text  style={summaryTheme.subheading}>{`Use 'in' with objects that do not move like cities, countries, states, months:\nUse 'to' with verbs of movement such as go, come, drive, etc.`}</Text>

<Text style={summaryTheme.examples}>{`✔ He really wants to drive the car.\n✔ They live in Mumbai.\n`}</Text>


<Text style={summaryTheme.examples}>{`❎ To my defense, I told my friend that I have my own quota of worries.\n✔ In my defense, I told my friend that I have my own quota of worries.\n`}</Text>
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
<Text style={summaryTheme.wordHeading}>{`At and To\n`}</Text>
<Text  style={summaryTheme.subheading}>You always arrive at a specific place: school, a restaurant, the airport, your uncle’s house. (You arrive in a city or a country.)
</Text>

<Text style={summaryTheme.examples}>{`❎ When we arrived to Claudio’s house.\n✔ When we arrived at Claudio’s house.\n
❎ They arrived to the school.\n✔ They arrived at the school.\n
❎ We went at the mall\n✔ We went to the mall
  `}</Text>

<Text style={summaryTheme.wordHeading}>In and To</Text>

<Text style={summaryTheme.examples}>❎ Welcome in Peru!</Text>
<Text style={summaryTheme.examples}>You always say welcome to any place: a house, school, organization, city, or country.</Text>
<Text style={summaryTheme.examples}>✔ Welcome to Peru!</Text>
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
<Text  style={summaryTheme.wordHeading}>At and In.</Text>
<Text></Text>
<Text style={summaryTheme.subheading}>If you are discussing a specific place or address you have 
to use the word “at.” No other preposition can be used in its place.
</Text>

<Text style={summaryTheme.examples}>{`\n❎ I live at Tokyo`}</Text>

<Text style={summaryTheme.examples}>You live, work, or study in a city or a country. (You live 
  at a specific address, work at or for a specific organization, or study at a specific university.)
</Text>


<Text style={summaryTheme.examples}>{`✔ I live in Tokyo.`}</Text>

<Text style={summaryTheme.examples}>{`❎ The school is located in the main intersection\n✔ The school is located at the main intersection.`}</Text>
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

