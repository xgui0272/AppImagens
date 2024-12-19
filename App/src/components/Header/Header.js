import React from 'react'
import { View, Text } from 'react-native';

//Estilos
import styles from './Header.styles';

//Icons
import Icon from 'react-native-vector-icons/FontAwesome'

const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>Bom Dia Frases</Text>
        <Icon name="cog" size={25} color="white" />
    </View>
  )
}

export default Header