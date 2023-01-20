import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FlatList } from 'react-native';



export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new');
  }

  return (
    <Container>
        <Header showBackButton/>
        <Highlight
          title='Turmas' 
          subTitle='Jogue com a sua turma'
        />

        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard 
              title={item} 
            />
          )}
          contentContainerStyle={groups.length === 0 && {flex: 1}}
          ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira Turma?" />}
        />

        <Button 
          title="Criar nova turma" 
          onPress={handleNewGroup}
        />
    </Container>
  );
}

