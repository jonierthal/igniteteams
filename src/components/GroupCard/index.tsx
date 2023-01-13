import { Container, Icon, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';
import { useState } from 'react';

type Props = TouchableOpacityProps &{
    title: string
}
export function GroupCard({title, ...rest}: Props) {
    return(
        <Container {...rest}>
            <Icon/>
            <Title>
                {title}
            </Title>
        </Container>

    )
}