import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Screens
import Categories from '../../screens/Categories/Categories';
import Categorie from '../../screens/Categorie/Categorie';
import Image from '../../screens/Image/Image';

//Components
import Header from '../../components/Header/Header';




const Stack = createNativeStackNavigator();

const CategoriesStack = () => {
  



  return (
    <Stack.Navigator>
        <Stack.Screen name="CategoriesStack" component={Categories} options={{ header: () => <Header/> }} />
        <Stack.Screen name="CategorieStack" component={Categorie}  />
        <Stack.Screen name="ImageSliderStack" component={Image}  />
  </Stack.Navigator>
  )
}

export default CategoriesStack