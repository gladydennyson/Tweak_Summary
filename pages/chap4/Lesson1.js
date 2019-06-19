import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


  


export default class C4Lesson1 extends Component {

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
<Text style={summaryTheme.wordHeading}>Off | Put | Cut</Text>


<Text style={summaryTheme.examples}>{`\n❎ Offed.\n❎ Putted.\n❎ Cutted\n`}</Text>

<Text style={summaryTheme.examples}>{`These words do not exist.\n`}</Text>
<Text style={summaryTheme.examples}>{`❎ He switched offed the lights.\n✔ He switched off the lights.\n`}</Text>


<Text style={summaryTheme.examples}>{`❎ She cutted her fingers while cooking.\n✔ She cut her fingers while cooking.\n`}</Text>


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
<Text style={summaryTheme.wordHeading}>Speak | Send</Text>


<Text style={summaryTheme.examples}>{`\n❎ Speaked.\n✔ Spoke.\n❎ Sended\n✔ Sent\n`}</Text>


<Text style={summaryTheme.examples}>{`❎ She speaked for a long time.\n✔ She spoke for a long time.\n`}</Text>


<Text style={summaryTheme.examples}>{`❎ He sended her his new address.\n✔ He sent her his new address.\n`}</Text>


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
<Text style={summaryTheme.wordHeading}>Hold and Weep</Text>


<Text style={summaryTheme.examples}>{`\n❎ holded.\n✔ held.\n❎ weeped\n✔ Wept\n`}</Text>


<Text style={summaryTheme.examples}>{`❎ He holded the dress for her.\n✔ He held the dress for her.\n`}</Text>


<Text style={summaryTheme.examples}>{`❎ He weeped during the funeral.\n✔ He wept during the funeral.\n`}</Text>


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

