import React from 'react';
import { FlatList } from 'react-native';

import { Container, ItemLabel } from './styles';

const data = [
    { id: 0, name: 'Bread' },
    { id: 1, name: 'Milk' },
    { id: 2, name: 'Apple' },
];

export default function ShoppingList() {
    return (
        <Container>
            <FlatList
                data={data}
                renderItem={({ item }) => <ItemLabel>{item.name}</ItemLabel>}
                keyExtractor={item => item.id}
            />
        </Container>
    );
}
