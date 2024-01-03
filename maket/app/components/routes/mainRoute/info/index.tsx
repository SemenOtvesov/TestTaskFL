'use client';
import Image from '@app/helpers/image/image';
import style from './style';
import React from 'react';

export default () => {
    const { Container, Title, Main, Left, Right, Item, Text, ItemText, size } = style();
    return (
        <Container>
            <Title>Коттеджный посёлок «Грин Лаундж» – проект с уникальным характером</Title>
            <Main>
                <Left>
                    <Item>
                        <Image imageName="info1" imageType="image" sourseMod={false} />
                        <ItemText>
                            12 домов, объединенных единой стилистикой и философией, в которой
                            комфорт становится исключительным приоритетом
                        </ItemText>
                    </Item>
                    <Text>
                        Концепция «Грин Лаундж», в том числе архитектурные и интерьерные решения,
                        наличие разнообразных объектов инфраструктуры внутри поселка была принята с
                        учётом выгодного месторасположения, большой территории застройки, прекрасных
                        видовых характеристик места и ориентации на требовательного покупателя.
                    </Text>
                </Left>
                <Right>
                    <Item
                        style={size.isMobile || size.isTab ? {} : { height: '13rem', width: '71%' }}
                    >
                        <Image imageName="info2" imageType="image" sourseMod={false} />
                        <ItemText
                            style={
                                size.isMobile || size.isTab ? {} : { right: '53%', left: 'auto' }
                            }
                        >
                            Коттеджный поселок расположен в 62 км к северо-западу от Москвы, на
                            живописном берегу Истринского водохранилища{' '}
                        </ItemText>
                    </Item>
                </Right>
            </Main>
        </Container>
    );
};
