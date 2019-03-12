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
<Text style={styles.wordHeading}>{`Leave | buy | fight\n`}</Text>

<Text style={styles.subheading}>{`Do / does / did + leave / buy / fight\nhave, had, is, am, are, was, were, be + left / bought / fought\nNOTHING + left / bought / fought\n`}</Text>


<Text style={styles.examples}>{`❎Annie did not left yet.\n✅Annie did not leave yet.\n✅He left after the meeting.

`}</Text>
<Text style={styles.examples}>{`❎He did not bought any clothes from the store.\n✅He did not buy any clothes from the store.\n✅He bought a new pair of shoes.

`}</Text>
<Text style={styles.examples}>{`❎They lost because they did not fought well.\n✅They lost because they did not fight well.\n✅They had fought well.

`}</Text>

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
<Text style={styles.wordHeading}>{`know | fall | take \n`}</Text>
<Text style={styles.subheading}>{`Do / does / did + know | fall | take \nhave, had, is, am, are, was, were, be + known | fallen |  taken\nNOTHING + knew | fell | took\n`}</Text>


<Text style={styles.examples}>{`❎He didn’t knew the answer.\n✅He didn’t know the answer.\n

`}</Text>
<Text style={styles.examples}>{`❎This young girl has fell besides the house.\n✅This young girl has fallen besides the house.\n

`}</Text>
<Text style={styles.examples}>{`❎He has take the keys.\n✅He has taken the keys.\n

`}</Text>

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
<Text style={styles.wordHeading}>{`Wear | Swear \n`}</Text>
<Text style={styles.subheading}>{`Do / does / did + Wear | swear \nhave, had, is, am, are, was, were, be + Worn | sworn\nNOTHING + Wore | swore\n`}</Text>


<Text style={styles.examples}>{`❎He didn’t wore the gift that I gifted him.\n✅He didn’t wear the gift that I gifted him\n

`}</Text>
<Text style={styles.examples}>{`❎The soldiers had swore to protect their leader.\n✅The soldiers had sworn to protect their leader.\n

`}</Text>
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
