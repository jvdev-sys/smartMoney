/* import {createAppContainer, createSwitchNavigator} from 'react-navigation'; */
import React,{useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { isInitialized } from './services/Welcome';
import { isLogged } from './services/Auth';

import Loading from './Pages/Loading';
import Welcome from './Pages/Welcome';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Main from './Pages/Main';
import NewEntry from './Pages/NewEntry';
import Report from './Pages/Report';



const Stack = createStackNavigator();

const AppScreens = ({logged, initiated}) => {
  return (
    <Stack.Navigator 
      initialRouteName={logged ? (initiated ? 'Main' : 'Welcome' ) : 'SignIn'}
      screenOptions={{headerShown:false}}
    > 
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="NewEntry" component={NewEntry} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  );
}

const Routes = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [initiated, setInitiated] = useState(false);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    async function initialVerifications() {
      if(await isInitialized()){
        setInitiated(true);
      }
      if(await isLogged()){
        setLogged(true);
      }
      
      setIsLoading(false);

    }
    initialVerifications();
  }, []);

  if(isLoading){
    return <Loading />
  }

  return (
    <NavigationContainer>
      < AppScreens logged={logged} initiated={initiated} />
     {/*  < AppScreens logged={false} initiated={false} /> */}
    </NavigationContainer>
  );
}


export default Routes;
