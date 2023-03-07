import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { useCallback, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Alert, FlatList } from 'react-native';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { Loading } from '@components/Loading';



export function Groups() {
  const [isLoading, setIsLoading ] = useState(true);

  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new');
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', {group})
  }

  async function fetchGroups(){
    try{
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data);

      setIsLoading(false);
    }
    catch(error){
      console.log(error);

      Alert.alert('Turnas', 'Não foi possível carrega as turmas');
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
        <Header showBackButton/>
        <Highlight
          title='Turmas' 
          subTitle='Jogue com a sua turma'
        />
    {
      isLoading ?
        <Loading/>
      :
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard 
              title={item} 
              onPress={() => handleOpenGroup(item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && {flex: 1}}
          ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira Turma?" />}
        />
    }        
        <Button 
          title="Criar nova turma" 
          onPress={handleNewGroup}
        />
    </Container>
  );
  
}

