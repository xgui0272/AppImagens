import {StyleSheet} from 'react-native';
import { colors } from '../../assets/styles/colors';



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 8,
        flex: 1, // Isso faz o item preencher a célula da coluna
        height: 100,
        justifyContent: 'center',
        margin: 10, // Espaçamento entre os itens
        position: 'relative',

    },
    img: {
        borderRadius: 8,
        height: 100,
        width: '100%',
        zIndex: 1
    },
    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute', // Permite que o texto fique sobre a imagem
        textAlign: 'start', // Centraliza o texto
        zIndex: 2, // Garante que o texto fique sobre a imagem
        
    }


});


export default styles;