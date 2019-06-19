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
<Text style={summaryTheme.wordHeading}>Wealth</Text>
<Text style={summaryTheme.subheading}>Aplentiful supply of a particular desirable thing</Text>
<Text style={summaryTheme.examples}>Singular form: wealth</Text>
<Text style={summaryTheme.examples}>{`Plural form: wealths\n`}</Text>

<Text style={summaryTheme.wordHeading}>Penny</Text>
<Text style={summaryTheme.subheading}>A small sum of money.</Text>

<Text style={summaryTheme.examples}>Singular form: penny</Text>
<Text style={summaryTheme.examples}>{`Plural form: pennies\n`}</Text>

<Text style={summaryTheme.wordHeading}>Baby vs Babies </Text>

<Text style={summaryTheme.examples}>{`✔ I hope you accept this by the time the baby is born.\n✔ The babies in the photo were really cute.\n`}
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
<Text style={summaryTheme.wordHeading}>Wife vs Wives</Text>
<Text style={summaryTheme.examples}>{`✔ His mother and his wife are still there.\n✔ Both lost their wives to cancer.\n❎ Both lost their wives to cancer. \n`}
</ Text>
<Text style={summaryTheme.wordHeading}>Life vs Lives</Text>

<Text style={summaryTheme.examples}>{`✔ This is the life he was born for.\n✔ Some people lived their entire lives without ever being close to anyone.\n❎ Some people lived their entire lives without ever being close to anyone.`}
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
