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

      <View style={styles.container}>
       <Swiper ref='swiper' style={styles.wrapper} showsButtons={false} loop={false}>
      
        <View style={styles.slide1}>

         <View style={styles.row1}>
           <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={styles.row2}>
<ScrollView showsVerticalScrollIndicator={true}>
<Text style={styles.bodyHeaading}>Teaching how to use-  in / at / to</Text>

<Text style={styles.wordHeading}>{`To and in \n`}</Text>
<Text  style={styles.subheading}>{`Use 'in' with objects that do not move like cities, countries, states, months:\nUse 'to' with verbs of movement such as go, come, drive, etc.:`}</Text>

<Text style={styles.examples}>{`✅He really wants to drive the car.\n✅They live in Mumbai.\n`}</Text>


<Text style={styles.examples}>{`❎To my defense, I told my friend that I have my own quota of worries.\n✅In my defense, I told my friend that I have my own quota of worries.\n`}</Text>
</ScrollView>
       
          
          </View>

         <View style={styles.row3}>
        
          <View style={styles.row3inside}>
          <TouchableOpacity style={styles.button} onPress={() => this.refs.swiper.scrollBy(1)}>
          <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
           
          </View>
       
          
          
       </View>

        </View>

         <View style={styles.slide2}>

          <View style={styles.row1}>
        <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={styles.row2}>
 <ScrollView showsVerticalScrollIndicator={true}>           
<Text style={styles.rWordHeading}>{`At and To\n`}</Text>
<Text  style={styles.subheading}>You always arrive at a specific place: school, a restaurant, the airport, your uncle’s house. (You arrive in a city or a country.)
</Text>

<Text style={styles.examples}>{`❎When we arrived to Claudio’s house.\n✅When we arrived at Claudio’s house.\n
❎They arrived to the school.\n✅They arrived at the school.\n
❎We went at the mall\n✅We went to the mall
  `}</Text>

<Text style={styles.wordHeading}>In and To</Text>

<Text style={styles.examples}>❎Welcome in Peru!</Text>
<Text style={styles.examples}>You always say welcome to any place: a house, school, organization, city, or country.</Text>
<Text style={styles.examples}>✅Welcome to Peru!</Text>
</ScrollView>

          </View>

       <View style={styles.row3}>
          <View style={styles.row3inside}>
          <TouchableOpacity style={styles.button} onPress={() => this.refs.swiper.scrollBy(1)}>
          <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
           
          </View>
          
          
       </View>

        </View>

         <View style={styles.slide3}>

         <View style={styles.row1}>
        <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={styles.row2}>
            

<ScrollView showsVerticalScrollIndicator={true}>
<Text  style={styles.wordHeading}>At and In.</Text>
<Text style={styles.subheading}>If you are discussing a specific place or address you have 
to use the word “at.” No other preposition can be used in its place.
</Text>

<Text style={styles.examples}>{`\n❎I live at Tokyo`}</Text>

<Text style={styles.examples}>You live, work, or study in a city or a country. (You live 
  at a specific address, work at or for a specific organization, or study at a specific university.)
</Text>


<Text style={styles.examples}>{`✅I live in Tokyo.`}</Text>

<Text style={styles.examples}>{`❎The school is located in the main intersection\n✅The school is located at the main intersection.`}</Text>
</ScrollView>

          </View>

       <View style={styles.row3}>
          <View style={styles.row3inside}>
          <TouchableOpacity style={styles.button}  onPress = {this.goToLesson}>
          <Text style={styles.buttonText}>Start Lesson</Text>
          </TouchableOpacity>
           
          </View>
       
          
          
       </View>


        </View>
      </Swiper>
      </View>
     
   )
 }
}



const styles = StyleSheet.create({

 container:{
   flex:1,
   backgroundColor:'#034569',
 },
  wrapper: {
  },
  slide1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',    
    alignItems: 'stretch',
   
  },
  slide2: {
     flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',    
    alignItems: 'stretch',
  },
  slide3: {
      flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',    
    alignItems: 'stretch',
  },
  text: {
    color: '#000000',
    fontSize: 25,
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  skipstyle:{
   justifyContent:'flex-end'
  },
  button: {
    backgroundColor: '#cadcf1',
    height:'70%',
    width:Dimensions.get('window').width,
    justifyContent:'center'

    
  },
  buttonText:{
    
   textAlign:'center',
   fontSize:20,
   color:'#021f4f',
   alignItems:'center',
   fontFamily: 'OpenSans-SemiBold',  },
   
   row1:{
   height:Dimensions.get('window').height/10,
  // backgroundColor:'pink',
   justifyContent:'center'
   
   },

 row2:{
   height:Dimensions.get('window').height/1.5,
   marginLeft:'5%',
   marginRight:'5%',
  backgroundColor:'#fafafa',
  borderWidth:2,
  borderColor:'#e5e5e5',
  paddingLeft:'2%',
 paddingRight:'2%'
 },

 row3:{
   height:Dimensions.get('window').height/7,
   justifyContent:'center',
   alignItems:'center',
   flexDirection:'row',
   //backgroundColor:'yellow'
 },
 bodyHeaading:{
   fontFamily: 'OpenSans-ExtraBold',
   //fontWeight:'bold',
   color:'#000000',
   fontSize:17
 },
 examples:{
   
   fontSize:15,
   color:'#1c3a63',
   fontFamily: 'OpenSans-SemiBold',
 
 },
 subheading:{
   fontFamily: 'OpenSans-Bold',
   //fontWeight:'bold',
   color:'#000000',
   fontSize:15
 },
wordHeading:{
   fontFamily: 'OpenSans-ExtraBold',
   //fontWeight:'bold',
   color:'#228B22',
   fontSize:18
 },
rWordHeading:{
   fontFamily: 'OpenSans-ExtraBold',
   //fontWeight:'bold',
   color:'#228B22',
   fontSize:18,
   marginTop:'3%'
 },
skip:{
   textAlign:'right',
   fontFamily: 'OpenSans-SemiBold',
   textDecorationLine:'underline',
   color:'#fafafa',
   fontSize:15,
   marginRight:'5%'
},
row3inside:{
  width:'100%',
  alignItems:'center',
  alignSelf:'flex-end',
   borderWidth: 1.5,
   borderColor: '#021f4f',
   
}

});
