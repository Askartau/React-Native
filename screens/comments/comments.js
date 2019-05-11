import React from 'react';
import { FlatList } from 'react-native';
import {Container, Content, Card, CardItem, Body, Text} from 'native-base';

class Comments extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <FlatList
                        data={[
                            {}, {}, {}, {}, {}
                        ]}
                        renderItem={({ item }) => <Card>
                            <CardItem header>
                                <Text>ASdcdsnvjdfvfd</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>vdsavnjvdfilvbdfijl vfdvj;vf </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Text>22.05.19</Text>
                            </CardItem>
                        </Card>} />
                </Content>
            </Container>
        );
    }
}

export default Comments;