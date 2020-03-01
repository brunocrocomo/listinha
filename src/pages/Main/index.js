import React from 'react';

import ShoppingList from '~/components/ShoppingList';

import { Container, Title, TotalContainer, Total } from './styles';

export default function Main() {
    return (
        <Container>
            <Title>Listinha</Title>
            <ShoppingList />
            <TotalContainer>
                <Total>R$ 13,37</Total>
            </TotalContainer>
        </Container>
    );
}
