import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, FlatList, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando ícones do AntDesign

import { colors } from '../../assets/styles/colors';

// Obtendo as dimensões da tela (largura e altura)
const { width, height } = Dimensions.get('window');



const ImageSlider = () => {
  // Criando uma referência para o componente FlatList
  const flatListRef = useRef(null);

  // Índice inicial da imagem que será exibida
  const initialIndex = 2;
  // Estado para armazenar o índice da imagem atual no slider
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Array de imagens com IDs e URIs das imagens
  const images = [
    {
      id: '1',
      uri: 'https://cdn.awsli.com.br/800x800/1231/1231330/produto/236296656/sub695554---kauan---retangular-feliz-natal-peq-sqosbbj484.jpg',
    },
    {
      id: '2',
      uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/6326651-tropical-praia-sundown-horizonte-paisagem-vetor.jpg',
    },
    {
      id: '3',
      uri: 'https://cdn.pixabay.com/photo/2020/07/09/01/09/landscape-5385552_1280.jpg',
    },
  ];

  // useEffect é executado quando o componente é montado (após a renderização inicial)
  useEffect(() => {
    // Verificando se flatListRef existe, ou seja, se a referência foi atribuída ao componente
    if (flatListRef.current) {
      // Usando o método scrollToIndex para rolar até o índice inicial
      flatListRef.current.scrollToIndex({
        index: initialIndex, // O índice para o qual queremos rolar
        animated: false, // A transição será instantânea, sem animação
      });
    }
  }, [initialIndex]);

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      // Atualiza o índice para o próximo item na lista
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex); // Atualiza o estado de índice atual
      // Rola a lista até o próximo índice
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }
  };

  // Função para voltar para a imagem anterior
  const prevImage = () => {
    if (currentIndex > 0) {
      // Atualiza o índice para o item anterior na lista
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex); // Atualiza o estado de índice atual
      // Rola a lista até o índice anterior
      flatListRef.current.scrollToIndex({ index: prevIndex, animated: true });
    }
  };

  return (
    // SafeAreaView garante que o conteúdo esteja dentro da área visível da tela (sem sobreposição com a área do notch ou bordas arredondadas)
    <SafeAreaView style={styles.container}>

      <View style={styles.sliderContainer}>
        {/* Botão de seta à esquerda */}
        <TouchableOpacity style={styles.arrowLeft} onPress={prevImage}>
            {/* Ícone de seta para a esquerda usando react-native-vector-icons */}
            <Icon name="chevron-left" size={30} color="white" />
        </TouchableOpacity>

        {/* FlatList é usado para renderizar a lista de imagens */}
        <FlatList
            ref={flatListRef} // Associando a referência para manipulação direta
            data={images} // Passando o array de imagens
            keyExtractor={(item) => item.id} // Definindo o ID da imagem como chave única
            horizontal // Fazendo o scroll ser horizontal (side-scrolling)
            pagingEnabled // Ativando o efeito de "páginas" (o scroll para após cada imagem)
            showsHorizontalScrollIndicator={false} // Desativando o indicador de scroll horizontal
            getItemLayout={(_, index) => ({
            length: width, // Tamanho de cada item (imagem)
            offset: width * index, // Deslocamento do item baseado no índice
            index, // O índice do item na lista
            })}
            onScrollToIndexFailed={(info) => {
            // Caso o scroll falhe (por exemplo, o índice não está disponível), tentamos rolar novamente
            setTimeout(() => {
                flatListRef.current?.scrollToIndex({
                index: info.index, // Tentando rolar até o índice desejado
                animated: true, // Com animação dessa vez
                });
            }, 500); // Delay de 500ms antes de tentar novamente
            }}
            renderItem={({ item }) => (
            // Renderizando cada item da lista (no caso, uma imagem)
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.uri }} style={styles.image} />
            </View>
            )}
        />

        {/* Botão de seta à direita */}
        <TouchableOpacity style={styles.arrowRight} onPress={nextImage}>
            {/* Ícone de seta para a direita usando react-native-vector-icons */}
            <Icon name="chevron-right" size={30} color="white" />
        </TouchableOpacity>
            
            
    </View>

      



    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    arrowLeft: {
      left: 10, // Distância da borda esquerda
      padding: 10, // Adicionando espaço ao redor da seta
      position: 'absolute', // Posicionamento absoluto para as setas
      transform: [{ translateY: -25 }],
      top: '50%', // Centraliza verticalmente
      zIndex: 1, // Garantindo que a seta fique acima das imagens
    },
    arrowRight: {
      padding: 10, // Adicionando espaço ao redor da seta
      position: 'absolute', // Posicionamento absoluto para as setas
      right: 10, // Distância da borda direita
      top: '50%', // Centraliza verticalmente
      transform: [{ translateY: -25 }],
      zIndex: 1, // Garantindo que a seta fique acima das imagens
    },
    container: {
      backgroundColor: colors.background, // Cor de fundo do slider
      flex: 1, // Garante que o container ocupe toda a altura da tela
      justifyContent: 'start', // Centralizando o conteúdo
    },
    image: {
      height: 300, // A imagem vai ocupar toda a altura da tela
      resizeMode: 'contain', // Fazendo com que a imagem se ajuste ao tamanho do container sem distorcer
      width: '100%', // A imagem vai ocupar toda a largura do item
    },
    imageContainer: {
      alignItems: 'center', // Centralizando o conteúdo horizontalmente
      height: 400, // Usando a altura da tela inteira para cada imagem
      justifyContent: 'center', // Centralizando o conteúdo verticalmente
      width: width, // Usando a largura da tela inteira para cada imagem
      position: 'relative',
      
    },
    sliderContainer : {
        position: 'relative',
        paddingLeft: 5,
        paddingRight: 5,
        width: '100%',
        
    }
  });
  

export default ImageSlider;
