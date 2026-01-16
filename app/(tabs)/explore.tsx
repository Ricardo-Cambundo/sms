import { Image } from 'expo-image';
import { Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import Search from '@/components/search';

export default function TabTwoScreen() {
  const insets = useSafeAreaInsets()
  const styles = StyleSheet.create({
  header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 65 + insets.top,
            alignItems: 'flex-end',
            boxSizing: 'border-box',
            paddingHorizontal: 10,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginBottom: 0,
            zIndex: 1,
            paddingBottom: 5,
            backgroundColor: 'white',
            },
        goBack: {
            width: 40, 
            height: 40, 
            borderRadius: 50,
            backgroundColor: 'white',
            // elevation: 10,
            elevation: 0,
            shadowColor: 'black',
            shadowRadius: 2,
            shadowOpacity: 0,
            shadowOffset: {width: 0, height: 0},
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.8
            },
        title: {
            
        },
        inputContainer: {
            backgroundColor: '#dbdbdb44',
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            height: 45,
            borderRadius: 50,
            paddingHorizontal: 5
        },
        iconContainer: {
            width: 45,
            height: 45,
            backgroundColor: '#dbdbdb44',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            borderRadius: 5
        },
});
const [open1, setOpen1] = useState(false)
const [search, setSearch] = useState('')
const [searched, setSearched] = useState(false)
const [open, setOpen] = useState(false)
const messages = [
  {
    "name": "João Silva",
    "phone_number": "+351912345678",
    "message": {
      "text": "Vamos nos encontrar amanhã para discutir os detalhes do projeto que estamos a desenvolver há meses? É importante alinharmos as próximas etapas e definirmos quem fará o quê.",
      "date": "2024-04-26T18:30:00"
    },
    "viewed": false
  },
  {
    "name": "Maria Oliveira",
    "phone_number": "+351987654321",
    "message": {
      "text": "Não te esqueças da reunião amanhã às 10h. Precisamos revisar os relatórios finais e preparar a apresentação para o cliente. É fundamental que todos estejam alinhados e prontos para discutir os pontos principais.",
      "date": "2024-04-25T09:15:00"
    },
    "viewed": true
  },
  {
    "name": "Carlos Pereira",
    "phone_number": "+351912398765",
    "message": {
      "text": "Podes enviar o relatório atualizado até o final do dia? Precisamos dele para a reunião de amanhã à tarde, e é importante que todas as informações estejam corretas e completas.",
      "date": "2024-04-24T14:45:00"
    },
    "viewed": false
  },
  {
    "name": "Ana Costa",
    "phone_number": "+351912345679",
    "message": {
      "text": "Vamos ao cinema às 8? Estava pensando em um filme novo que saiu na semana passada. Vai ser uma boa oportunidade para relaxar depois de uma semana cheia de trabalho e tarefas pendentes.",
      "date": "2024-04-26T17:45:00"
    },
    "viewed": true
  },
  {
    "name": "Pedro Santos",
    "phone_number": "+351912345680",
    "message": {
      "text": "Preciso falar contigo mais tarde, é algo importante sobre a sua situação no trabalho que precisamos resolver o quanto antes. Quando estiveres disponível, me avisa.",
      "date": "2024-04-25T20:10:00"
    },
    "viewed": false
  },
  {
    "name": "Luísa Martins",
    "phone_number": "+351912345681",
    "message": {
      "text": "Compraste o presente que tinhamos combinado para o aniversário do teu irmão? Lembra-te que é importante não esquecer esses detalhes, especialmente porque ele gosta de surpresas e coisas especiais.",
      "date": "2024-04-25T16:30:00"
    },
    "viewed": true
  },
  {
    "name": "Rui Fernandes",
    "phone_number": "+351912345682",
    "message": {
      "text": "Vou chegar em 10 minutos, estou a caminho. Tinha um trânsito complicado, mas estou a fazer o possível para não atrasar muito.",
      "date": "2024-04-26T18:00:00"
    },
    "viewed": false
  },
  {
    "name": "Sofia Gomes",
    "phone_number": "+351912345683",
    "message": {
      "text": "Confirma a tua presença na reunião de amanhã às 10h, por favor. Precisamos da tua opinião sobre o projeto e também de algumas sugestões que só tu podes dar para melhorar o resultado final.",
      "date": "2024-04-25T21:00:00"
    },
    "viewed": true
  },
  {
    "name": "Miguel Lopes",
    "phone_number": "+351912345684",
    "message": {
      "text": "Vamos fazer uma pausa para o café? Preciso de um momento para descansar e recarregar as energias antes de continuar com as tarefas do dia.",
      "date": "2024-04-25T15:00:00"
    },
    "viewed": false
  },
  {
    "name": "Inês Almeida",
    "phone_number": "+351912345685",
    "message": {
      "text": "Já viste o email que enviei ontem? Era importante que confirmasses o recebimento e a leitura, pois há informações essenciais para a nossa próxima reunião de equipe.",
      "date": "2024-04-24T10:20:00"
    },
    "viewed": true
  },
  {
    "name": "Fábio Costa",
    "phone_number": "+351912345686",
    "message": {
      "text": "Confirmas a reunião na sexta-feira às 3 da tarde? Precisamos alinhar as estratégias finais e decidir quem ficará responsável por cada tarefa para garantir o sucesso do projeto.",
      "date": "2024-04-26T09:00:00"
    },
    "viewed": false
  },
  {
    "name": "Beatriz Ribeiro",
    "phone_number": "+351912345687",
    "message": {
      "text": "Vamos jantar fora na sexta-feira à noite? Estava pensando em um restaurante novo que abriu na cidade e que parece ser muito bom. Vai ser uma ótima oportunidade para conversarmos e relaxarmos.",
      "date": "2024-04-25T19:30:00"
    },
    "viewed": true
  },
  {
    "name": "Vítor Carvalho",
    "phone_number": "+351912345688",
    "message": {
      "text": "Precisamos falar sobre o projeto que estamos a desenvolver e definir as próximas etapas. É importante que tenhas tempo para uma reunião esta semana, pois há muitos detalhes a serem ajustados.",
      "date": "2024-04-24T17:45:00"
    },
    "viewed": false
  },
  {
    "name": "Clara Nunes",
    "phone_number": "+351912345689",
    "message": {
      "text": "Está tudo pronto para a apresentação de amanhã? Já revisaste todos os slides e o roteiro? É fundamental que tudo esteja perfeito para causar uma boa impressão.",
      "date": "2024-04-26T16:00:00"
    },
    "viewed": true
  },
  {
    "name": "Daniela Pinto",
    "phone_number": "+351912345690",
    "message": {
      "text": "Não te preocupes com isso. Eu já tratei de todos os detalhes, desde a organização até os documentos necessários. Podes ficar descansado que tudo estará sob controlo.",
      "date": "2024-04-25T13:50:00"
    },
    "viewed": false
  },
  {
    "name": "Ricardo Matos",
    "phone_number": "+351912345691",
    "message": {
      "text": "Vamos fazer uma pausa para o café? Preciso de um momento para descansar e refletir sobre os próximos passos do projeto.",
      "date": "2024-04-25T14:30:00"
    },
    "viewed": true
  },
  {
    "name": "Sara Teixeira",
    "phone_number": "+351912345692",
    "message": {
      "text": "Levaste o livro que te pedi? Preciso dele para a aula de amanhã, e seria ótimo se pudesses trazê-lo ainda hoje.",
      "date": "2024-04-24T11:45:00"
    },
    "viewed": false
  },
  {
    "name": "Nuno Costa",
    "phone_number": "+351912345693",
    "message": {
      "text": "A reunião foi adiada para a próxima semana, assim que tiverem a nova data aviso-te. Preciso reorganizar a minha agenda para poder participar.",
      "date": "2024-04-26T10:00:00"
    },
    "viewed": true
  },
  {
    "name": "Filipa Ramos",
    "phone_number": "+351912345694",
    "message": {
      "text": "Vamos ao parque amanhã? Podemos levar as crianças, fazer um piquenique e aproveitar o dia ao ar livre para descansar um pouco da rotina diária.",
      "date": "2024-04-25T08:30:00"
    },
    "viewed": false
  },
  {
    "name": "Hugo Marques",
    "phone_number": "+351912345695",
    "message": {
      "text": "Preciso de ajuda com a mudança de casa. Podes vir ajudar no sábado? Tenho muitas caixas para carregar e preciso de mãos extras para agilizar tudo.",
      "date": "2024-04-24T16:10:00"
    },
    "viewed": true
  }
]
const route = useRoute()
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Modal style={{margin: 0, justifyContent: 'flex-end', padding: 0}}
            // onBackdropPress={() => {
            //     dispatch({type: 'SET_MODAL_CLOSED'})
            //     setOpen1(false)
            // }} 
            animationType="slide"
            presentationStyle='pageSheet'
            visible={open1}
            // swipeDirection={'down'}
            // onSwipeComplete={() => {
            //     dispatch({type: 'SET_MODAL_CLOSED'})
            //     setOpen1(false)
            // }}
            // propagateSwipe
            
            >
              <Search open={open1} setOpen={setOpen1}/>
            </Modal>
<View style={[styles.header]}>
                {/* <Pressable onPress={()=>{
                    // navigation.goBack()
                    }}>
                    <View style={styles.goBack}>
                        <Icon name='arrow-back' size={23}/>
                    </View>
                </Pressable> */}
                <TouchableOpacity onPress={() => {
                    // setOpen1(true)
                }} style={styles.inputContainer}>
                    <Icon color={'#003a75'} size={22} name='caret-forward-outline'/>
                    <Text style={styles.title}>{'Pesquise por mensagens...'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setOpen(true)
                }} style={styles.iconContainer}>
                    <Icon color={'#003a75'} size={22} numberOfLines={1} ellipsizeMode="tail" name='options'/>
                </TouchableOpacity>
</View>
<ScrollView contentContainerStyle={{paddingTop: 85 + insets.top, gap: 20}}>
    {messages.map((item: any, index: number) => {
      console.log('item', item?.name)
      return (
        <View key={index} style={{paddingHorizontal: 15, paddingBlock: 10, borderWidth: 1, borderColor: '#eeeeee', borderRadius: 10, backgroundColor: 'white', flexDirection: 'row', gap: 10, alignItems: 'center', paddingLeft: 6}}>
          <View style={{width: 10, height: 10}}>
            {item?.viewed && <View style={{width: '100%', height: '100%', backgroundColor: '#003a75', borderRadius: 500}}>
              </View>}
          </View>
           <View style={{backgroundColor: '#eeeeee', width: 50, aspectRatio: 1/1, borderRadius: 500, alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontWeight: '600', fontSize: 15, color: '#003a75'}}>{item?.name[0]}{`${item?.name}`.split(' ')?.[1]?.[0]}</Text></View>

          <View style={{flex: 1, gap: 5}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                          <Text style={{fontWeight: '600'}}>{item?.name}</Text>
<Text>{format(new Date(item?.message?.date||null), 'dd/MM/yyyy')} ></Text>
            </View>
            <Text numberOfLines={2} ellipsizeMode='tail' style={{color: 'grey'}}>{item?.message?.text}</Text>
          </View>
        </View>
      )
    })}
</ScrollView>

<TouchableOpacity onPress={() => {
  setOpen1(true)
}} style={{position: 'absolute', bottom: 20, width: 70, height: 70, backgroundColor: '#003a75', borderRadius: 500, alignItems: 'center', justifyContent: 'center', right: 10}}>
    <Icon name='add-outline' size={28} color={'white'}/>
</TouchableOpacity>
    </View>
  );
}


