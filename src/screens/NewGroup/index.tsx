import { Button } from '@components/Button';
import { Header, } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Container, Content, Icon } from './styles';

import { useNavigation } from '@react-navigation/native';

export function NewGroup(){

    const navigation = useNavigation();


    function handleNew(){
        navigation.navigate('players', { group: 'Rocket'});
    }

    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />

                <Highlight
                    title="Nova turma"
                    subTitle="Crie a turma para adicionar as pessoas"
                />

                <Input 
                    placeholder='Nome da Turma'
                />

                <Button 
                    title="Criar" 
                    style={{marginTop:20}}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    );
}