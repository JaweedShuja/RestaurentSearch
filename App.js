//npm install react-navigation
//npm install react-native-gesture-handler
//npm install react-navigation-stack
//npm install @react-native-community/masked-view
//npm install react-native-safe-area-context
//npm install react-native-screens
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen.js'
import DetailsScreen from './src/screens/DetailsScreen.js'

const navigator = createStackNavigator({
  Search:SearchScreen,
  Details:DetailsScreen
},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    headerShown: false,
  }
});

export default createAppContainer(navigator)