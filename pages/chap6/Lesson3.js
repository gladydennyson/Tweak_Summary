import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C8Lesson3 extends Component {

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
<Text style={styles.wordHeading}>could/would/should</Text>
<Text style={styles.subheading}>Should’ can be used:</Text>
<Text style={styles.subheading}>1. To express something that is probable.</Text>

<Text style={styles.examples}>{`“John should be here by 2:00 PM.”\n`}
</ Text>
<Text style={styles.subheading}>2. To ask questions.</Text>

<Text style={styles.examples}>{`“Should we turn left at this street?”\n`}
</ Text>
<Text style={styles.subheading}>3. To show compulsion, give recommendation or even an opinion.</Text>

<Text style={styles.examples}>{`“You should stop eating fast food.”\n“We should go to the park tomorrow.”`}
</ Text>
 </ScrollView>         
          </View>

         <View style={styles.row3}>
        
          <View style={styles.row3inside}>
          <TouchableOpacity style={styles.button}>
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

<Text style={styles.subheading}>‘Would’ can be used:</Text>
<Text style={styles.subheading}>1. To ask ‘who’, ‘what’, ‘where’, ‘when’, ‘why’ or ‘how’ (not always, but often).</Text>

<Text style={styles.examples}>{`“How would you do that?”\n“What would you do if…”\n“When would we have time to do that?”\n`}
</ Text>
<Text style={styles.subheading}>2. To make a polite request.</Text>

<Text style={styles.examples}>{`“Would you like any tea?”\n`}
</ Text>
<Text style={styles.subheading}>3. In hypothetical situations.</Text>

<Text style={styles.examples}>{`“I would love to buy a boat one day.”\n`}
</ Text>
<Text style={styles.subheading}>4. To ask questions.</Text>

<Text style={styles.examples}>{`“Would you like to join us tonight?”`}
</ Text>
 </ScrollView>         
          </View>

         <View style={styles.row3}>
        
          <View style={styles.row3inside}>
          <TouchableOpacity style={styles.button}>
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

<Text style={styles.subheading}>‘Could’ can be used:</Text>
<Text style={styles.subheading}>1.To suggest a possibility.</Text>

<Text style={styles.examples}>{`“Whose journal is this? It could be her journal.\n”`}
</ Text>
<Text style={styles.subheading}>2. To make a polite request.</Text>

<Text style={styles.examples}>{`“Could you please move this box?”\n“Could you please pass that paper?”\n“Could you please move this box?” “I could, but I am really busy right now.”
`}
</ Text>

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
