import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
import summaryTheme from '../summaryTheme';

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
<Text style={summaryTheme.subheading}>When to use/not use “the”.</Text>
<Text></Text>
<Text  style={summaryTheme.examples}>“The” is not used in titles like Princess Diana, President Kennedy or Queen Elizabeth.
</Text>

<Text style={summaryTheme.subheading}>{`\nCompare:\n`}</Text>


<Text style={summaryTheme.examples}>{`❎ The Queen Elizabeth had talks with the President Clinton.\n✔ Queen Elizabeth had talks with President Clinton.\n`}
</ Text>

<Text style={summaryTheme.examples}>{`❎ President had dinner with Queen.\n✔ The President had dinner with the Queen.`}
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

         <View style={summaryTheme.slide2}>

          <View style={summaryTheme.row1}>
        <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={summaryTheme.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={summaryTheme.row2}>

<ScrollView showsVerticalScrollIndicator={true}>
<Text style={summaryTheme.subheading}>“The” is not usually used with the complement of a sentence.</Text>
<Text></Text>
<Text  style={summaryTheme.examples}>An is used before the sound of vowels.</Text>


<Text style={summaryTheme.examples}>{`✔ He is the monitor.\n❎ He is monitor.\nHere, “Monitor” is not the complement of the sentence.\n`}
</ Text>

<Text style={summaryTheme.examples}>{`✔ They appointed him monitor. \n❎ They appointed him the monitor.\nHere, “Monitor” is the complement of the sentence.\n`}
</ Text>


<Text style={summaryTheme.examples}>{`We do not use “the” after an amount.\n✔ The number of unemployed is rising. \n❎ The number of the unemployed\n`}</Text>


<Text style={summaryTheme.examples}>{`Similarly\n✔ He was elected Chairman. \n❎ He was elected the Chairman\n✔ I want to talk to the Chairman. \n❎ I want to talk to Chairman.`}</Text>


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
<Text  style={summaryTheme.subheading}>We do not use ‘THE’ before names or material:</Text>

<Text style={summaryTheme.examples}>{`\nWords like,\nLondon, France, Tom, gold, rice, honesty, virtue\n`}</Text>
<Text style={summaryTheme.examples}>{`✔ Paris is the capital of France. \n❎ The Paris is the capital of France.\n ✔ Gold is a precious metal.\n❎ The gold is a precious metal.\n`}</Text>

<Text style={summaryTheme.examples}>{`But we say, the United States, the United Arab Emirates among others`}</Text>
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


