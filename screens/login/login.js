import React from 'react';
import {Container, Header, Left, Body, Button, Icon, Title, Form, Input, Item, Content, Text } from 'native-base';

class Login extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <Header style={{ backgroundColor: '#1D78A5', elevation: 0 }} androidStatusBarColor='#000000'>
                    <Left>
                        <Button bordered success onPress={() => navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{textAlign: "center"}}>Login</Title>
                    </Body>
                </Header>
            ),
        };
    };

    render() {
        return (
            <Container>
                <Content style={{padding: 16}}>
                    <Form>
                        <Item regular style={{marginTop: 16}}>
                            <Input placeholder='Email' />
                        </Item>
                        <Item regular style={{marginTop: 8}}>
                            <Input placeholder='Password' secureTextEntry />
                        </Item>
                    </Form>
                    <Button full success style={{marginTop: 8}}>
                        <Text>Login</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default Login;