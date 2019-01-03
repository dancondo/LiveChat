import { createStackNavigator, createAppContainer } from 'react-navigation';
import Chats from './screens/Chats';
import Groups from './screens/Groups';

const AppNavigator = createAppContainer(createStackNavigator({
  Chats: { screen: Chats },
  Groups: { screen: Groups }
}, { 
  initialRouteName: 'Chats' 
}))


export default AppNavigator;