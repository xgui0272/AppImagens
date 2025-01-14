import React from 'react';
import {API_URL} from '@env';

//Estilos
import styles from './Categories.styles';
import { colors } from '../../assets/styles/colors';

//Components
import CategorieButton from '../../components/CategorieButton/CategorieButton';
import { SafeAreaView, StatusBar, FlatList} from 'react-native';

//Hooks
import { useState, useEffect } from 'react';
import axios from  'axios';




const Categories = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    getCategorys();
  }, [])

  /*
  Requisição para buscar todas as categorias no banco
  */
  async function getCategorys() {
    try {
      const response = await axios.get(`${API_URL}/get-categorys`);
      setData(response.data.data);
    } catch (error) {
      console.error('Ouve algum error na requisição para buscar categorias.', error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        
      <StatusBar 
        barStyle="light-content"
        backgroundColor={colors.primary}
      />

      <FlatList
        contentContainerStyle={styles.body}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategorieButton name={item.name} img={item.img} categoryId={item.id}/>
        )}
        numColumns={2} // Define o número de colunas
      />

  
  
    </SafeAreaView>
  )
}

export default Categories