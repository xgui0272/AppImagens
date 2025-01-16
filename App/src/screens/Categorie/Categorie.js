import React, {useLayoutEffect, useState} from 'react'
import {API_URL} from '@env';

//Components
import { SafeAreaView, FlatList, View, Image, TouchableWithoutFeedback} from 'react-native'

//Hooks
import { useNavigation } from '@react-navigation/native'; 
import axios from 'axios';

//Styles
import styles from './Categorie.styles'



const Categorie = ({route}) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  
  /*
  Seta o nome da categoria no cabecalho do react Navigation
  */
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.name === '' ? 'Pagina Sobre' : route.params?.name
    })
    getAllImagesByCategory()
  },[navigation])

  /*
  Requisição para buscar todas as imagens de uma categoria especifica.
  */
  async function getAllImagesByCategory() {
    try {
      const response = await axios.get(`${API_URL}/get-imagens-category?id=${route.params?.categoryId}`);
      setData(response.data.data.images);
    } catch (error) {
      console.error('Ouve algum error ao realizar a requisição.', error)
    }
  }

  return (

      <SafeAreaView style={styles.container}>
        <FlatList
          contentContainerStyle={styles.body}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ImageSliderStack', {data: {images: data, currentIndex: index}})}>
              <View style={styles.tumbImgContainer}>
                <Image source={{ uri: item.imgLink }} style={styles.img}/>
              </View>
            </TouchableWithoutFeedback>

          )}
          numColumns={2} // Define o número de colunas
        />
      </SafeAreaView>
    

  )
}

export default Categorie