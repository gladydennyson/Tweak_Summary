import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C2Lesson2 extends Component {

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
<Text style={summaryTheme.wordHeading}>{`Leave | buy | fight\n`}</Text>

<Text style={summaryTheme.subheading}>{`Do / does / did + leave | buy | fight\n\nhave, had, is, am, are, was, were, be + left | bought | fought\n\nNOTHING + left | bought | fought\n`}</Text>


<Text style={summaryTheme.examples}>{`❎ Annie did not left yet.\n✔ Annie did not leave yet.\n✔ He left after the meeting. \n`}</Text>
<Text style={summaryTheme.examples}>{`❎ He did not bought any clothes from the store.\n✔ He did not buy any clothes from the store.\n✔ He bought a new pair of shoes.\n`}</Text>
<Text style={summaryTheme.examples}>{`❎ They lost because they did not fought well.\n✔ They lost because they did not fight well.\n✔ They had fought well.\n`}</Text>

</ScrollView>


            
       
          
          </View>

         <View style={summaryTheme.row3}>
        
          <View style={summaryTheme.row3inside}>
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
<Text style={summaryTheme.wordHeading}>{`know | fall | take \n`}</Text>
<Text style={summaryTheme.subheading}>{`Do / does / did + know | fall | take \n\nhave, had, is, am, are, was, were, be + known | fallen | taken\n\nNOTHING + knew | fell | took\n`}</Text>


<Text style={summaryTheme.examples}>{`❎ He didn’t knew the answer.\n✔ He didn’t know the answer.\n`}</Text>
<Text style={summaryTheme.examples}>{`❎ This young girl has fell besides the house.\n✔ This young girl has fallen besides the house.\n`}</Text>
<Text style={summaryTheme.examples}>{`❎ He has take the keys.\n✔ He has taken the keys.\n`}</Text>

</ScrollView>





          </View>

       <View style={summaryTheme.row3}>
           <View style={summaryTheme.row3inside}>
          <TouchableOpacity style={summaryTheme.button}>
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
<Text style={summaryTheme.wordHeading}>{`Wear | Swear \n`}</Text>
<Text style={summaryTheme.subheading}>{`Do / does / did + Wear | swear \n\nhave, had, is, am, are, was, were, be + Worn | sworn\n\nNOTHING + Wore | swore\n`}</Text>


<Text style={summaryTheme.examples}>{`❎ He didn’t wore the gift that I gifted him.\n✔ He didn’t wear the gift that I gifted him\n`}</Text>
<Text style={summaryTheme.examples}>{`❎ The soldiers had swore to protect their leader.\n✔ The soldiers had sworn to protect their leader.\n`}</Text>
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
