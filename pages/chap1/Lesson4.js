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
<Text  style={summaryTheme.subheading}>Using "A" or "AN": Special Cases</Text>

<Text style={summaryTheme.examples}>{`\n✔ A uniform.\n❎ An uniform.\n✔ A university.\n❎ An university.\n✔ A universal.\n❎ An universal.\n✔ A user\n❎ An user\n✔ An MBA.\n❎ A MBA.\n
`}</Text>

<Text style={summaryTheme.examples}>{`'an unforgettable experience' - unforgettable has a vowel sound so we use 'an'.\n'a university' - university has a 'y' sound so we use 'a'.\n
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
<Text  style={summaryTheme.examples}>This is also the case with 'o', which may sometimes have a 'w' sound.</Text>
<Text style={summaryTheme.subheading}>{`\nCompare:\n`}</Text>

<Text style={summaryTheme.examples}>{`✔ an octopus - octopus starts with a vowel sound.\n❎ an one rupee coin. \n✔ a one rupee coin. \none starts has a 'w' sound.\n
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
<Text  style={summaryTheme.subheading}>The Silent 'h'</Text>

<Text style={summaryTheme.examples}>{`\nSometimes with words that begin with 'h', the 'h' sound is not pronounced. Unfortunately there is no rule about when the 'h' is silent.\n
`}</Text>

<Text style={summaryTheme.examples}>{`✔ an honour \nThe 'h' is silent. We use 'an' because 'h' is not pronounced: (h)onour.\n
`}</Text>


<Text style={summaryTheme.examples}>{`✔ a historic day \n Here, 'h' is pronounced. 'Historic' starts with a 'h' sound.\n`}</Text>
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
