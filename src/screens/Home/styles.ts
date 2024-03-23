import { StyleSheet } from 'react-native';

//#F47E00 - Laranja
//#FFEA00 - Amarelo
//#001D78 - Azul
//#521D6B - Roxo


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F47E00',
      padding: 40
    },
  
    eventName: {
      color: '#FFEA00',
      fontSize: 26,
      fontWeight: 'bold',
      marginTop: 48,
      backgroundColor: '#001D78',
      height: 60,
      width: 60,
      borderRadius: 10,
      paddingTop: 20
    },
    eventDate: {
      fontSize: 16,
      color: '#fff'
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: 'white',
        color: 'black',
        padding: 16,
        borderRadius: 5,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#fff',
        marginRight: 16
        
    },
    buttonText: {
        color: '#FFEA00',
        fontSize: 24
    },
    button:{
      backgroundColor: '#001D78',
      width: 56,
      height: 56,
      borderRadius:5,
      justifyContent: 'center',
      alignItems: 'center'

    },
    form:{
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
    },
    listEmptyText: {
      color: 'white',
      borderColor: 'black',
      backgroundColor: '#521D6B',
      fontSize: 18,
      textAlign: "center",
      padding:5,
      
    }
    
  })