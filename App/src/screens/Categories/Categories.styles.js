import {StyleSheet} from 'react-native';
import { colors } from '../../assets/styles/colors';

const styles = StyleSheet.create({
  body: {
    padding: 5,
    width: '100%',

  },
  container: {
    backgroundColor: colors.background,
    flex: 1
  },

  itemContainer: {
    alignItems: 'center',
    flex: 1, // Isso faz o item preencher a célula da coluna
    height: 100,
    justifyContent: 'center',
    margin: 10, // Espaçamento entre os itens

    
  },

});



export default styles;