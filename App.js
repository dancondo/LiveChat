import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
