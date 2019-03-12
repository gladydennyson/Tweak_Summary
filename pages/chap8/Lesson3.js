import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C1Lesson3 extends Component {

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
<Text style={styles.wordHeading}>Woman</Text>
<Text style={styles.subheading}>Singular form: woman</Text>
<Text style={styles.subheading}>Plural form: women</Text>


<Text style={styles.examples}>{`✅A woman has a right to protect herself.\n✅The two women laughed and pointed at her shirt.\n`}
</ Text>
<Text style={styles.wordHeading}>Mouse</Text>

<Text style={styles.subheading}>Singular form: mouse</Text>
<Text style={styles.subheading}>Plural form: mice</Text>

<Text style={styles.examples}>{`✅A mouse is in the box.\n✅The house was infested with mice and rats.\n`}
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

<Text style={styles.wordHeading}>Bus</Text>
<Text style={styles.subheading}>Singular form: bus</Text>
<Text style={styles.subheading}>Plural form: buses</Text>


<Text style={styles.examples}>{`✅He missed the bus.\n✅A number of buses go through that route.\n`}
</ Text>

<Text style={styles.wordHeading}>House</Text>
<Text style={styles.subheading}>Singular form: house</Text>
<Text style={styles.subheading}>Plural form: houses</Text>


<Text style={styles.examples}>{`✅Come to the house with me.\n✅The houses in the city are mostly built of bricks.\n`}
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
