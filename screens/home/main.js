import React from 'react';
import { FlatList, Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Thumbnail, Body, Text, Button, Icon, Right, Footer,FooterTab } from 'native-base';

class Main extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <FlatList
                        data={[
                            {
                                like_count: '20',
                                comment_count: '19',
                                author_profile_url: '',
                                article_url: ''
                            },
                        ]}
                        renderItem={({ item }) => <Card onPress={() => this.props.navigation.navigate("Comments")}>
                            {/* <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../assets/img/avatar-male-1.jpg')} />
                                    <Body>
                                        <Text>{item.title}</Text>
                                        <Text note>{item.author}</Text>
                                    </Body>
                                </Left>
                            </CardItem> */}
                            <CardItem cardBody>
                                <Image source={require('../../assets/img/photo-man-whiteboard.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>

                            <CardItem>
                                <Left>
                                    <Button bordered success>
                                        <Icon active name="thumbs-up" />
                                        <Text>{item.like_count}</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button bordered success>
                                        <Icon active name="chatbubbles" />
                                        <Text>{item.comment_count}</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                            <Text style={{ padding: 16, fontSize: 20, fontWeight: 'bold', textAlign: "center" }}>Welcome to BAGALA!</Text>
                            <CardItem cardBody>
                                <Image source={require('../../assets/img/photo-man-phone.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                        </Card>} />
                    <Text style={{ textAlign: "center" }}>ADnvjfkvefl vfvfjnebvfe vfebhjvfe fejklbvfel vfejksvobf vbefhjlvbfel  njfievbvf</Text>
                </Content>
                <Footer style={{ backgroundColor: '#1D78A5'}}>
                    <FooterTab >
                        <Button full>
                            <Text style={{ color: '#fff' }}>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default Main;