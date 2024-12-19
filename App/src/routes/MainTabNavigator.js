import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screns
import Home from '../screens/Home/Home'
import Favorites from '../screens/Favorites/Favorites'

//Stacks
import CategoriesStack from './Stacks/CategoriesStack';

//Components
import Header from '../components/Header/Header';

//Icons
import Icon from 'react-native-vector-icons/FontAwesome'

//Styles
import { colors } from '../assets/styles/colors';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {


    
  return (
    <Tab.Navigator
        screenOptions={{
            header: () => <Header/>,
              tabBarActiveTintColor: colors.primary,  // Cor dos ícones selecionados
              tabBarInactiveTintColor: 'gray',  // Cor dos ícones não selecionados


        }}
    >
        <Tab.Screen 
        name='CategoriesTab'
        component={CategoriesStack}
        options={{
            headerShown: false,
            title: 'Categorias',
            tabBarIcon: ({color, size}) => (
                <Icon name="th" size={size} color={color} />
            )
        }}
        />

        <Tab.Screen 
        name='HomeTab'
        component={Home}
        options={{
            title: 'Inicio',
            tabBarIcon: ({color, size}) => (
                <Icon name="home" size={size} color={color} />
            )
        }}
        />

        <Tab.Screen 
        name='FavoritesTab'
        component={Favorites}
        options={{
            title: 'Favoritos',
            tabBarIcon: ({color, size}) => (
                <Icon name="heart-o" size={size} color={color} />
            )
        }}
        />
    </Tab.Navigator>
  )
}

export default MainTabNavigator;