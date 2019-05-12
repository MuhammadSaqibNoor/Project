// This Pages is not connected with navigation.

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';


class DashBoard extends Component {
    static navigationOptions = {
        title: '    Student Learning App',
        
      };
    
 
    render() {
    return (
       
      <View style={{  alignItems: 'center', justifyContent: 'center' }}> 
     
     <Image
          
          
          source={require('../img/Logo.png')}
          style={{ marginTop:-10 ,width: 150, height: 150, marginRight:10,justifyContent:'flex-end'}}
  
          />  
  
        <Text  style={styles.txt}>Main Menu</Text>


        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.btn}>Video Lectures</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.btn}>PDF Notes</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.btn}>FeedBack</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.btn}>Logout</Text>
        </TouchableOpacity>
  
      </View>
    );
  }

}






const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      marginRight:20,
      marginLeft: 20,
  
    } , 
    
    txt: {
       
        color:'#4682b4',
        fontSize: 35,
      fontWeight: 'bold',
      marginTop: -15,
        
      },
      heading: {
       
        color:'#000000',
        fontSize: 25,
      fontWeight: 'bold',
      marginTop: -15,
        
      },
  
      para:{
        color:'#000000',
        fontSize: 20,
      
  
      },
    btn: {
       color:'#FFFFFF',
       backgroundColor:'#228B22',
        fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop:20,
      padding:10,
      width: 160,
        
      },
  });

  export default DashBoard;