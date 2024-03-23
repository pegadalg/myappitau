import { useState } from "react";
import { Text, View , TextInput , TouchableOpacity, ScrollView, FlatList, Alert} from "react-native";
import { styles } from './styles';
import { Participant } from "../../components/Participant";

type Props = {
  id: string,
  card: string
}


export function Home() {
 //const [nomedoEstado, funcaoAlteraEstado] = useState()
  const [card, setCard] = useState('')
  const [cards, setCards] = useState<Props[]>([])

    function handleAddCard(){

      if (card.trim() === ''){
        return Alert.alert('Cartão','É obrigatório digitar um Cartão')
        
      }
      const data = {
        id: String(new Date().getTime()), 
        card: card.trim()
      }
      console.log(data)
      //imutabilidade
      // ... spread operator
      setCards([...cards, data])
      setCard("")
      
    }

    function handleRemoveCard(){
      console.log('Você clicou no botão Remover')
    }

    return (
      <View style={styles.container}>
        <Text style = {styles.eventName}> Itaú</Text>
        <Text style= {styles.eventDate}>Sexta, 23 de Fevererio de 2024</Text>

        <View style={styles.form}>
          <TextInput style={styles.input}
          placeholder="Número do Cartão"
          placeholderTextColor={"black"}
          value = {card} 
          onChangeText={value => setCard(value)
          
          }
          />
        
          <TouchableOpacity 
              style={styles.button}
              onPress={handleAddCard}>
            <Text style={styles.buttonText}>
              +
            </Text> 
          </TouchableOpacity>
        </View>

        {/* <ScrollView showsVerticalScrollIndicator =  {false} showsHorizontalScrollIndicator = {false}>
        {
          participants.map(participant => (
            <Participant 
                  key={participant.id}
                  name={participant.name} 
                  onRemove={handleRemoveParticipant}/> 
          ))
        }
        </ScrollView> */}
        
        <FlatList 
          showsVerticalScrollIndicator =  {false} 
          showsHorizontalScrollIndicator = {false}
          data={cards}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Participant
              name={item.card}
              onRemove={handleRemoveCard}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Adicione um Cartão a sua lista de cartões!
            </Text>
          )}
        >
          
        </FlatList>

        
      </View>

      
    )
    
}