import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

// Estilos
import styles from './CategorieButton.styles';

import { useNavigation } from '@react-navigation/native';

const CategorieButton = ({ name, img, onPress }) => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // Navega para a tela "Categorie" passando os dados
        navigation.navigate('CategorieStack', {name});
        
        // Executa o callback adicional, se necessário
        if (onPress) onPress();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Image 
          style={styles.img}
          source={{ uri: img }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategorieButton;
