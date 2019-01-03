import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class FooterTabsExample extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Text>Conversas</Text>
          </Button>
          <Button>
            <Text>Grupos</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}