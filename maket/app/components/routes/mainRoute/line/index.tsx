'use client';
import Image from '@app/helpers/image/image';
import style from './style';
import React from 'react';

export default () => {
    const {
        Container,
        Left,
        Title,
        InfoBox,
        Info,
        Right,
        ImageBox,
        InfoTitle,
        InfoText,
        Background,
    } = style();

    return (
        <Container>
            <Left>
                <Title>
                    «Грин Лаундж» — ваш ключ к жизни, к пассивному доходу и незабываемым моментам
                    счастья
                </Title>
                <InfoBox>
                    <Info>
                        <InfoTitle>
                            <span>76</span> Га
                        </InfoTitle>
                        <InfoText>Территория</InfoText>
                    </Info>
                    <Info>
                        <InfoTitle>
                            <span>12</span>
                        </InfoTitle>
                        <InfoText>новых мини-коттеджей</InfoText>
                    </Info>
                </InfoBox>
            </Left>
            <Right>
                <ImageBox>
                    <Image imageName="lineHouse" imageType="image" sourseMod={false} />
                </ImageBox>
            </Right>
            <Background>
                <Image imageName="lineBackground" imageType="image" sourseMod />
            </Background>
        </Container>
    );
};
