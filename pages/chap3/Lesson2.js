import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C3Lesson2 extends Component {

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

<Text style={summaryTheme.wordHeading}>{`On and in and by\n`}</Text>
<Text style={summaryTheme.subheading}>On and in</Text>
<Text></Text>
<Text style={summaryTheme.examples}>{`❎ His principles may land him in the gallows.\n✔ His principles may land him on the gallows\n`}
</ Text>

<Text style={summaryTheme.examples}>{`❎ It’s my birthday on July.\nYou always use 'in' for months and years.\n✔ It’s my birthday in July.\n✔ She was born in 2004`}
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
<Text style={summaryTheme.subheading}>In and By</Text>
<Text></Text>
<Text style={summaryTheme.examples}>{`❎ What is the time in your watch?\n✔ What is the time by your watch?\n`}
</ Text>

<Text style={summaryTheme.examples}>{`❎ We traveled in train?\n✔ We traveled by train.\n`}
</ Text>

<Text style={summaryTheme.examples}>We write by train/car/bike/boat/plane/land/sea/air etc.
</Text>
<Text style={summaryTheme.examples}>But note that 'by' is not used if there is an article.</Text>
<Text style={summaryTheme.examples}>For example, we write:
</Text>
<Text style={summaryTheme.examples}>✔ in the car.
</Text>
<Text style={summaryTheme.examples}>❎ by the car.
</Text>
<Text style={summaryTheme.examples}>✔ on a bus.
</Text>
<Text style={summaryTheme.examples}>❎ by a bus.
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

         <View style={summaryTheme.slide3}>

         <View style={summaryTheme.row1}>
          <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={summaryTheme.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={summaryTheme.row2}>
 <ScrollView showsVerticalScrollIndicator={true}>
 <Text style={summaryTheme.subheading}>On</Text>           
 <Text style={summaryTheme.examples}>{`\n❎ I go to school by foot.\n✔ I go to school on foot.\n`}
</ Text>

<Text style={summaryTheme.examples}>{`❎ I congratulated her for her success\n✔ I congratulated her on her success.`}
</ Text>

 <Text style={summaryTheme.examples}>{`❎ Who is in the phone? It is John.\n✔ Who is on the phone? It is John.\n`}
</ Text>

 <Text style={summaryTheme.examples}>{`❎ There was an interesting show at TV.\n✔ There was an interesting show on TV.\n`}
</ Text>

 <Text style={summaryTheme.examples}>{`❎ It’s my birthday in Saturday!\nYou always use on for days and dates:\n✔ It’s my birthday on Saturday!\n`}
</ Text>
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
