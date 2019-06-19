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
<Text style={summaryTheme.wordHeading}>Farther vs Further</Text>
<Text style={summaryTheme.subheading}>{`\nThe quick tip is to use “farther” for physical distance and “further” for an imaginative distance.`}</Text>
<Text style={summaryTheme.examples}>{`\nWhile traveling the daughter gets bored and started complaining to her mother. "How much farther?'"`}
</Text>
<Text style={summaryTheme.examples}>{`\nTo which the mother replied, “If you complain further, I will not bring you along the next time.”`}
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
<Text style={summaryTheme.wordHeading}>lose and loose</Text>
<Text style={summaryTheme.subheading}>{`\nWhen to Use Lose`}</Text>
<Text style={summaryTheme.subheading}>{`'Lose' means to not have something; to fail to win; or to fail to use or take advantage of. `}</Text>
<Text style={summaryTheme.examples}>{`\nI lost my friend in the crowd.\nOur team lost the game tonight.\nDo not lose this opportunity.`}</Text>

<Text style={summaryTheme.subheading}>{`\nWhen to Use loose`}
</Text>
<Text style={summaryTheme.subheading}>'Loose' means not firmly or tightly held
</Text>

<Text style={summaryTheme.examples}>{`I have a loose tooth.\nDrive slowly on the loose gravel road.\nHe broke loose.`}</Text>

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