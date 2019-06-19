import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C2Lesson1 extends Component {

   goToLesson() {
      Actions.lesson()
   }
render()
{

   return (

      <View style={summaryTheme.container}>
       <Swiper style={summaryTheme.wrapper} showsButtons={false} loop={false}>
      
        <View style={summaryTheme.slide1}>

         <View style={summaryTheme.row1}>
           <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={summaryTheme.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={summaryTheme.row2}>
<ScrollView showsVerticalScrollIndicator={true}>
<Text style={summaryTheme.wordHeading}>When to use ‘Gone’ and ‘Went’</Text>
<Text></Text>
<Text style={summaryTheme.examples}>To know when to use 'gone' or 'went', remember that gone always needs an auxiliary verb.</Text>
<Text style={summaryTheme.examples}>{`What are auxiliary verbs?\n`}</Text>
<Text style={summaryTheme.subheading}>{`Words such as - 'have', 'had', 'is', 'am', 'are', 'was', 'were', 'be' are auxiliary verbs.\n`}</Text>
<Text  style={summaryTheme.examples}>But the word ‘went’ doesn’t need such words before it.</Text>

<Text style={summaryTheme.examples}>{`❎ Wrong He has went to find some food\n✔ Right  He has gone to find some food.\n

`}</Text>
</ScrollView>

          
          </View>

         <View style={summaryTheme.row3}>
        
          <View style={{width:'100%',alignItems:'center',alignSelf:'flex-end'}}>
          <TouchableOpacity style={summaryTheme.button}>
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
   <Text  style={summaryTheme.wordHeading}>Ring | Grow | Drive</Text>
   <Text></Text>
<Text  style={summaryTheme.subheading}>do / does / did + Ring / Grow / Drive</Text>
<Text></Text>
<Text  style={summaryTheme.subheading}>have / had / is / am / are / was / were / be + rung / grown / driven</Text>
<Text></Text>
<Text style={summaryTheme.examples}>{`❎ Once the final bell has rang you can leave the class.\n✔ Once the final bell has rung you can leave the class.\n`}</Text>

<Text style={summaryTheme.examples}>{`❎The plant has now grew.\n✔ The plant has now grown.\n`}</Text>

<Text style={summaryTheme.examples}>{`❎As the concert was on the outskirts, she had drove her vehicle to reach on time.\n✔ As the concert was on the outskirts, she had driven her vehicle to reach on time.\n`}</Text>
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
