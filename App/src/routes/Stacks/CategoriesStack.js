import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Screens
import Categories from '../../screens/Categories/Categories';
import Categorie from '../../screens/Categorie/Categorie';
import ImageSlider from '../../screens/ImageSlider/ImageSlider2';

//Components
import Header from '../../components/Header/Header';




const Stack = createNativeStackNavigator();

const CategoriesStack = () => {
  



  return (
    <Stack.Navigator>
        <Stack.Screen name="CategoriesStack" component={Categories} options={{ header: () => <Header/> }} />
        <Stack.Screen name="CategorieStack" component={Categorie}  />
        <Stack.Screen name="ImageSliderStack" component={ImageSlider}  />
  </Stack.Navigator>
  )
}

export default CategoriesStack