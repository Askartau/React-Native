import React from 'react';
import {Button, Container, Content, Header, Text,Tabs, Tab, Right, Left, Fab, Icon, Body, Title} from 'native-base';
import Main from './main';
import FacultyList from '../faculty/facultyList';


class Home extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <Header hasTabs style={{ backgroundColor: '#1D78A5', elevation: 0 }} androidStatusBarColor='#000000'>
                    <Left>
                        <Button bordered success>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ padding: 16, fontSize: 20, fontWeight: 'bold', textAlign: "center", color:'#2DCA22' }}>Bagala</Title>
                    </Body>
                    <Right>
                        <Button
                            bordered success
                            onPress={() => navigation.navigate("Login")}>
                            <Text>Login</Text>
                        </Button>
                    </Right>
                </Header>
            ),
        };
    };

    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading="Home" tabStyle={{ backgroundColor: '#1D78A5' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#1D78A5' }} activeTextStyle={{ color: '#fff' }}>
                        <Main/>
                    </Tab>
                    <Tab heading="Orders" tabStyle={{ backgroundColor: '#1D78A5' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#1D78A5' }} activeTextStyle={{ color: '#fff' }}>
                        <Text>Tab2</Text>
                    </Tab>
                    <Tab heading="Faculties" tabStyle={{ backgroundColor: '#1D78A5' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#1D78A5' }} activeTextStyle={{ color: '#fff' }}>
                        <FacultyList/>
                    </Tab>
                    <Tab heading="About Us" tabStyle={{ backgroundColor: '#1D78A5' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#1D78A5' }} activeTextStyle={{ color: '#fff' }}>
                        <Text style={{ textAlign: "center" }}>ADnvjfkvefl vfvfjnebvfe vfebhjvfe fejklbvfel vfejksvobf vbefhjlvbfel  njfievbvf</Text>
                    </Tab>
                </Tabs>
                <Fab style={{ backgroundColor: '#000000' }}>
                    <Icon name="search" />
                </Fab>
            </Container>
        )
    }
}

export default Home;