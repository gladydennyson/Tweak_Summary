import React,{Component} from 'react';
import { TouchableOpacity,StyleSheet, Text, View,Dimensions,Image, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';


  


export default class C5Lesson1 extends Component {

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

<Text style={styles.bodyHeaading}>{`Difference between “Less” and “Fewer”\n`}</Text>
<Text  style={styles.subheading}>Fewer means “not as many.” We use fewer with countable words like cookies.</Text>

<Text style={styles.examples}>{`He was told to eat fewer cookies.

`}</Text>

<Text  style={styles.subheading}>Less means “not as much.” We use less with uncountable words like milk.</Text>


<Text style={styles.examples}>{`Could you give me less milk next time?
`}</Text>
            
       
     </ScrollView>       
          </View>

         <View style={styles.row3}>
        
          <View style={{width:'100%',alignItems:'center', alignSelf:'flex-end',}}>
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
<Text  style={styles.bodyHeaading}>“Less vs. Fewer” with Money</Text>
<Text  style={styles.subheading}>{`\nAlthough we can count money, we use “less” rather than “fewer”.
`}</Text>

<Text  style={styles.examples}>{`Jesica has less than thirty dollars left in her account.
`}</Text>
<Text  style={styles.subheading}>“Less vs. Fewer” with Time</Text>
<Text style={styles.subheading}>We use ‘less’ with regard to time, even though we can count time in seconds, minutes, hours, and so on.
</Text>

<Text  style={styles.examples}>{`\nEthan has been at his job for less than five years.
`}</Text>

<Text  style={styles.subheading}>{`Depending on how specific your reference to time is, we use fewer.
`}</Text>
<Text  style={styles.examples}>{`I wish I could spend fewer hours on the internet and more on my studies.
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
<Text  style={styles.bodyHeaading}>“Less vs. Fewer” with Weight</Text>
<Text  style={styles.subheading}>{`\nWeights are measured in a countable way, yet we use it with less rather than fewer.
`}</Text>

<Text  style={styles.examples}>{`Baby pandas weigh less than 200 grams at birth
`}</Text>
<Text  style={styles.subheading}>“Less vs. Fewer” and Percentages
</Text>
<Text style={styles.subheading}>You have to ask the - Is the percentage countable?
</Text>

<Text  style={styles.examples}>{`\nFewer than eight percent of the world’s people have blue eyes.\n
As it is possible to count individual people. Therefore, it is countable and we use the word fewer.
`}</Text>

<Text  style={styles.examples}>{`I see you have eaten less than ten percent of your food.\n
It would not be possible to get the exact amount of food. Therefore, we use the word less.
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
