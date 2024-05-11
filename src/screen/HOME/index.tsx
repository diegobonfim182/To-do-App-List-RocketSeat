import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

 {/* Clicando na letra M do seu teclado você abre o Menu e no celular e faz debug remoto Recebe os dados dos inputs*/}
 {/* Vai incluindo participants na lista que é ta no data= do component Participant */}

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState(''); 
  const [date, setDate] = useState(Date().toLocaleString())

  useEffect(() => {
    const secTimer = setInterval(()=>{
      setDate(new Date().toLocaleString())
    },1000)
    return () => clearInterval(secTimer);
  },[]);


{/*  
  Acima o useState funcionasssim   const [estado, função que atualiza o estado] = useState(['']) 
  const [participants, setParticipants] = useState(['']) 
  const [participants, setParticipants] = useState<string[]>([])  usa o <string[]> para definir pelo typeScript que se trata de um string

  .includes é uma ferramenta utilizada para saber ou verificar se tem algum item na lista 

  nction handleParticipantAdd() {
    if(participants.includes("Rodrigo")){
      return (Alert.alert("Participante Existe", "Já existe um participante na lista com este nome"))
    }
    
    O Alert tem que ser chamado e colocado dentro do return para se no caso executar ele parar a função
--------------------------------------------------------------------

  Nessa função abaixo de remover... dentro da componet Alert.alert tem como colocar um array no final da frase
  com objtos que são botões contendo chaves de text:'Sim' + chave de ação onPress: ()=> Alert.alert("Deletado!") para você apertar como botão

    function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name} ?`, [

    { 
      text: 'Sim',
      onPress: () => Alert.alert("Deletado!")
    },
    {
      text: 'Não',
      style: 'cancel'
    }

    ])
  }
    setParticipants(prevState => [...prevState, 'Ana']) a função com nome prevState com os três pontinhos dentro serve para desestruturar e trazer os dados anteriores.

  */}

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return (Alert.alert(`O participante ${participantName} já existe. Já há um participante na lista com este nome`))
    }
    setParticipants(prevState => [...prevState, participantName]); {/*...prevState pega os dados anteriores que já estão no array*/}
    setParticipantName('');{/* Limpa o estado  aí  você adiciona  value={participantName}> no Text Input quando você coloca ('') vazio */}
  }

  {/*Filtrando participantes  que já estão dentro da lista percorrendo com o .filer verificando se o participant é diferente do nome que estou querendo deletar.. 
    Devolve o array com menos o que você está deletando
    prevState é o conteudo do array
    Retorna para o estado todos os outros participantes menos o que eu acabei de deletar*/}

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name} ?`, [
      { 
        text: 'Sim',
        onPress: () =>  setParticipants(prevState => prevState.filter(participant => participant !== name ))
      },
      {
        text: 'Não',
        style: 'cancel'
      }

      ])
  }

  {/* Value =  Aqui é utilizado para limpar o nome do Input após apertar o botão */}
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>To do's app by Diego Bomfim</Text>
      <Text style={styles.eventDate}>{date}</Text>
      
      <View style={styles.form}>
        <TextInput style={styles.input} 
          placeholder='Nome do participante' 
          placeholderTextColor='#6B6B6B'
          keyboardType="default"
          onChangeText={setParticipantName}
          value={participantName}> 
        </TextInput>
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

  {/* map para percorrer a variável const Participants acima, e o key para identificar chave com as variaveis participant e name para aparecer o nome no props que criamos 
   <ScrollView>
         {
          participants.map(participant => (
            <Participant 
                key={participant} 
                name={participant} 
                onRemove={() => handleParticipantRemove(participant)}>
            </Participant>
          ))
      }
   </ScrollView>

   No caso do Flatlist... você utiliza o item parametro dos índices do array
   showsHorizontalScrollIndicator={false} = para tirar a rolagem

    ListEmptyComponent={() =>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}

        Este item acima serve para você colocar mensagens para ficarem aparecendo quando a lista estiver vazia.
  
        data={[]} = item que lê os itens da lista ou array... pode começar vazio para a mediada que for adicionando ele vai acrescentando 
        
        ScrollViwe carrega a lista toda de uma vez
        Flatlist só carrega o que vai ser visualizado... o que cabe na tela... vai renderizando aos poucos 
  */}

  {/*keyItem são variáveis que representam chaves refentes aos nomes que são incluidos nos inputs*/}
  {/*data = Recebe a o state participants para montar na lista os itens individuais*/}
      
      <FlatList
        data={participants} 
        keyExtractor={item => item}
        renderItem={({ item }) => (
            <Participant 
                    key={item}
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)}>
            </Participant>
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() =>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
        >
      </FlatList>
      
    </View>
  );
}