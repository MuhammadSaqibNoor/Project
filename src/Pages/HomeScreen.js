import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import firebase from "firebase";
import { Header, Spinner , CardSection, Card , CustomButton} from "../components/Common";
import LoginForm from "../components/LoginForm";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '    Student Learning Application',
        
      };
    
 
    render() {
    return (
       
      <View style={{  alignItems: 'center', justifyContent: 'center' }}> 
       <Image
        
        
        source={require('../img/Logo.png')}
        style={{ marginTop:10,width: 250, height: 250, marginRight:10,justifyContent:'flex-end'}}

        />     
        <Text style={styles.txt}>Welcome</Text>
        <Text style={styles.txt}>To</Text>
        <Text style={styles.txt}>W4edu360</Text>
      
<TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <Text style={styles.btn}>CONTINUE</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Student Learning App',
        
      };
    
 
    render() {
    return (
      <View style={{  alignItems: 'center', justifyContent: 'center' }}>
        
        <Image
        
        
        source={require('../img/Logo.png')}
        style={{ marginTop:10 ,width: 250, height: 250, marginRight:10,justifyContent:'flex-end'}}

        />  

<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.btn}>Sign In</Text>
        </TouchableOpacity>

        
<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.btn}>Home</Text>
        </TouchableOpacity>

        
<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.btn}>Admin</Text>
        </TouchableOpacity>

        
        
      </View>
    );
  }
}


class Login extends Component {
  static navigationOptions = {
    title: 'Student Learning App',
    
  };
  state = { loggedIn: null };

  componentWillMount() {
  firebase.initializeApp({
  apiKey: "AIzaSyDV-EREF0SeH1iSM2DYNsaCpzjZayCGWNo",
  authDomain: "rnapp-auth-class-mad.firebaseapp.com",
  databaseURL: "https://rnapp-auth-class-mad.firebaseio.com",
  projectId: "rnapp-auth-class-mad",
  storageBucket: "rnapp-auth-class-mad.appspot.com",
  messagingSenderId: "561918213506"
  });
  
  //Handle the Application when it's logged in or logged out
  firebase.auth().onAuthStateChanged(user => {
  if (user) {
  this.setState({ loggedIn: true });
  } else {
  this.setState({ loggedIn: false });
  }
  });
  }
  
  /* - This function is used for if condition of login (username , password) fetches then display signout button
  - if condition false show LoginForm where is condition of authentication error.
  - other wise spinner will show when it got confuse between signin or sign out.
  
  */
  
  renderContent() {
  switch (this.state.loggedIn) {
  case true:
  return (
  <Card>
  <CardSection>
  <CustomButton onPress={() => firebase.auth().signOut()}>
  Logout
  </CustomButton>
  </CardSection>
  </Card>
  );
  case false:
  return <LoginForm />;
  default:
  return <Spinner size="large" />;
  }
  }
  render() {
  return (
  <View>
  <Header headerText="Login Form" />
  {this.renderContent()}
  {/*
  Before the renderContent Handling
  <LoginForm /> */}
  </View>
  );
  }
  }



const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Login: {

      screen: Login,
    },
    
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
    txt: {
      
      color:'#4682b4',
      fontSize: 35,
    fontWeight: 'bold',
    marginTop: -15,
      
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