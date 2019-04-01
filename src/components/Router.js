import HomeScreen from './Home';
import AboutScreen from './About';
import LoginScreen from './Login';
import SignUpScreen from './SignUp';
import PrefsScreen from './Prefs';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const Container = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Login: {screen: LoginScreen},
    SignUp: {screen: SignUpScreen},
    Prefs: {screen: PrefsScreen},
    About: {screen: AboutScreen}
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(Container)