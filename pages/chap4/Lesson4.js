import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


export default class C4Lesson4 extends Component {

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
<Text style={styles.wordHeading}>say/tell</Text>
<Text style={styles.subheading}>said – the past tense of the verb say</Text>

<Text style={styles.subheading}>told – the past tense of tell</Text>

<Text style={styles.subheading}>{`\nThe main meaning of the verb tell is to "speak or write something to someone."
`}</Text>

<Text style={styles.subheading}>{`The main meaning of say is to "use your voice to express something in words."
`}</Text>

<Text style={styles.subheading}>The most important tip to remember is that to use the 
verb tell, the information must be communicated to someone. You can’t just tell 
something, you have to tell something to someone. This is not true for the verb say. 

</Text>

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
<Text style={styles.wordHeading}>Tell</Text>
<Text style={styles.subheading}>{`Tell is used mainly to share information, and normally only when the receiver of the information is mentioned.\n`}
</Text>

<Text style={styles.examples}>Do not use for quotes.</Text>

<Text style={styles.examples}>{`\nHas she told you the good news, yet?\nPlease tell us your name and occupation.\nCan you tell your story to me?\nThe police officer told him to stop. [NOT The police offer told him, "Stop."]\n
`}</Text>

<Text style={styles.examples}>{`To describe something:\n\nHe loves telling stories.\nI'm telling the truth.
`}</Text>


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
<Text  style={styles.wordHeading}>Say</Text>

<Text  style={styles.subheading}>Say is used for exact quotes, and when the receiver isn’t mentioned in the sentence.

</Text>

  
<Text style={styles.examples}>{`“Good morning,” said the woman behind the counter.\nI just stopped by to say hello.\nI had only said three words before he interrupted me again.
`}</Text>

<Text style={styles.examples}>Say is also used to express opinions.</Text>
<Text style={styles.examples}>{`I wouldn't say that he's a great guitarist ALSO MEANS I don't think he's a great guitarist
`}</Text>

</ScrollView>

          </View>

       <View style={styles.row3}>
          <View style={styles.row3inside}>
          <TouchableOpacity style={styles.button} onPress = {this.goToLesson}>
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
