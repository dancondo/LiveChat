import React from 'react';
import { Container,Content } from 'native-base';
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  async componentWillMount() {
    try {
      await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });
      this.setState({ loading: false });
    } catch {
      console.log('error');
    }
  };
  render() {
    if (this.state.loading) {
      return <Container></Container>
    }
    return (
      <Container>
        <AppHeader />
        <Content>
          <AppNavigator />
        </Content>
        <AppFooter />
      </Container>
    );
  }
}