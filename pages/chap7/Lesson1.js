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

<Text style={summaryTheme.wordHeading}>{`Difference between “Less” and “Fewer”\n`}</Text>
<Text  style={summaryTheme.subheading}>Fewer means “not as many.” We use fewer with countable words like cookies.</Text>

<Text style={summaryTheme.examples}>{`He was told to eat fewer cookies.

`}</Text>

<Text  style={summaryTheme.subheading}>Less means “not as much.” We use less with uncountable words like milk.</Text>


<Text style={summaryTheme.examples}>{`Could you give me less milk next time?
`}</Text>
            
       
     </ScrollView>       
          </View>

         <View style={summaryTheme.row3}>
        
          <View style={{width:'100%',alignItems:'center', alignSelf:'flex-end',}}>
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
<Text  style={summaryTheme.wordHeading}>“Less vs. Fewer” with Money</Text>
<Text  style={summaryTheme.subheading}>{`\nAlthough we can count money, we use 'less' rather than 'fewer'.
`}</Text>

<Text  style={summaryTheme.examples}>{`Jesica has less than thirty dollars left in her account.
`}</Text>
<Text  style={summaryTheme.subheading}>“Less vs. Fewer” with Time</Text>
<Text style={summaryTheme.subheading}>We use ‘less’ with regard to time, even though we can count time in seconds, minutes, hours, and so on.
</Text>

<Text  style={summaryTheme.examples}>{`\nEthan has been at his job for less than five years.
`}</Text>

<Text  style={summaryTheme.subheading}>{`Depending on how specific your reference to time is, we use 'fewer'.
`}</Text>
<Text  style={summaryTheme.examples}>{`I wish I could spend fewer hours on the internet and more on my studies.
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
<Text  style={summaryTheme.wordHeading}>“Less vs. Fewer” with Weight</Text>
<Text  style={summaryTheme.subheading}>{`\nWeights are measured in a countable way, yet we use it with less rather than fewer.
`}</Text>

<Text  style={summaryTheme.examples}>{`Baby pandas weigh less than 200 grams at birth
`}</Text>
<Text  style={summaryTheme.subheading}>“Less vs. Fewer” and Percentages
</Text>
<Text style={summaryTheme.subheading}>You have to ask the - Is the percentage countable?
</Text>

<Text  style={summaryTheme.examples}>{`\nFewer than eight percent of the world’s people have blue eyes.\n
As it is possible to count individual people. Therefore, it is countable and we use the word fewer.
`}</Text>

<Text  style={summaryTheme.examples}>{`I see you have eaten less than ten percent of your food.\n
It would not be possible to get the exact amount of food. Therefore, we use the word less.
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
