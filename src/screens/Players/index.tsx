import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { PlayerCard } from '@components/PlayerCard';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

import { FlatList } from 'react-native';
import { useState } from 'react';
 
export function Players(){
    const [team, setTeam] = useState('TIME A');
    const [players, setPlayers] = useState(['Jonathan','Marcos']);

    return (
        <Container>
            <Header showBackButton />

            <Highlight 
                title="Nome da turma"
                subTitle="adicione a galera e separe os times"
            />

            <Form>
                <Input
                    placeholder="Nome da Pessoa"
                    autoCorrect={false}
                />
                <ButtonIcon icon="add"/>
            </Form>
            
            <HeaderList>
                <FlatList
                    data={['TIME A','TIME B']}
                    keyExtractor={item=>item}
                    renderItem={({item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>
            
            <FlatList
                data={players}
                keyExtractor={item=>item}
                renderItem={({item }) => (
                    <PlayerCard name={item} />
                )}
            />
        </Container>
    );
}