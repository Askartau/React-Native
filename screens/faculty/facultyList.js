import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
import { FlatList, Image } from 'react-native';

export default class FacultyList extends Component {
  render() {
    return (
      <Container>
        <Content>
            <Text style={{padding: 16, fontSize: 20, fontWeight: 'bold', textAlign: "center"}}>Faculties</Text>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>FIT</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>ISE</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>BS</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>KMA</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>RECMC</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>FEOGI</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
             <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>SCE</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
        </Content>
      </Container>
    );
  }
}