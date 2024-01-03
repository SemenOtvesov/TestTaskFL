'use client';
import React from 'react';
import style from './style';
import Image from '@app/helpers/image/image';

export default () => {
    const { Container, Title, Text, Background, size } = style();
    return (
        <Container>
            <Title>
                ВЫБЕРИТЕ НАДЁЖНЫЕ <br /> ИНВЕСТИЦИИ И СТАНЬТЕ
                <br /> ВЛАДЕЛЬЦЕМ МИНИ-КОТЕДЖА
            </Title>
            <Text>ИНВЕСТИЦИИ В ВИДЕ ПОКУПКИ ДОМА</Text>
            <Background>
                <Image
                    imageName={size.isMobile ? 'previewMobile' : 'preview'}
                    imageType="image"
                    sourseMod
                />
            </Background>
        </Container>
    );
};
