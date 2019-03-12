import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image,ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class C2Lesson4 extends Component {

   goToLesson() {
      Actions.lesson()
   }
render()
{
   return (

      <View style={styles.container}>
       <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
      
        <View style={styles.slide1}>

         <View style={styles.row1}>
           <TouchableOpacity onPress = {this.goToLesson}>
           <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
         </View>

          <View style={styles.row2}>
<ScrollView showsVerticalScrollIndicator={true}>
<Text style={styles.subheading}>{`Do / does / did + Choose / overtake / fly\nhave, had, is, am, are, was, were, be + chosen / overtaken / flown\nNOTHING + chose | overtook / flew\n`}</Text>

<Text style={styles.examples}>{`❎I chosen to eat sandwich for breakfast.\n✅I chose to eat sandwich for breakfast.\n`}</Text>

<Text style={styles.examples}>{`❎They are yet to built the tower.\n✅He overtook the car ahead of him.\n`}</Text>

<Text style={styles.examples}>{`❎I had flew to Paris.\n✅ I had flown to Paris.\n`}</Text>
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
 <Text style={styles.subheading}>{`Do / does / did + Bear / lie / undergo\nhave, had, is, am, are, was, were, be + borne / lain / undergone\nNOTHING + bore | lay | underwent\n`}</Text>

<Text style={styles.examples}>{`❎She borne her child after lot of pain.\n✅ She bore her child after lot of pain.\n`}</Text>

<Text style={styles.examples}>{`❎The chicken had lay there all day\n✅The chicken had lain there all day.\n`}</Text>


<Text style={styles.examples}>{`❎Although it was very needed, he didn’t underwent a surgery.\n✅Although it was very needed, he didn’t undergo a surgery.\n`}</Text>
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
 <Text style={styles.subheading}>{`Do / does / did + run\nhave, had, is, am, are, was, were, be + run\nNOTHING + ran\n`}</Text>

<Text style={styles.examples}>{`❎He has ran from his responsibilities.\n✅ He has run from his responsibilities.\n`}</Text>

<Text style={styles.examples}>{`❎He didn’t ran the race.\n✅He didn’t run the race.\n`}</Text>

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
