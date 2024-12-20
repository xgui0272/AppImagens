import React,{useState, useRef} from 'react';
import { SafeAreaView, FlatList, View, Image, Dimensions, TouchableOpacity } from 'react-native';


//Medidas da janela
const { width } = Dimensions.get('window');

//icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'

//Estilos
import styles from './ImageSlider.styles'

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

const ImageSlider = () => {

    //States
    const [currentIndex, setCurrentIndex] = useState(2);

    //Refs
    const flatListRef = useRef(null);

    //Função para mudar para proxima imagem atraves da flexa
    const goToNextImage = () => {
        if(currentIndex < images.length -1) {
            setCurrentIndex(currentIndex + 1);
            flatListRef.current.scrollToIndex({index: currentIndex + 1});
            
        }
    };

    const goToPreviusImage = () => {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex -1);
            flatListRef.current.scrollToIndex({index: currentIndex -1 });
        }
    };


  return (
    
    <SafeAreaView style={styles.sliderContainer}>
        <TouchableOpacity style={styles.arrowLeft} onPress={goToPreviusImage}>
            <FontAwesome name="chevron-left" size={30} color="white"/>
        </TouchableOpacity>
        <FlatList
            ref={flatListRef}
            showsHorizontalScrollIndicator={false}
            scrowT
            pagingEnabled
            horizontal
            data={images}
            keyExtractor={(item) => item.id}
            scrollToIndex
            renderItem={({item}) =>(
                <View style={styles.imageContainer(width)}>
                    <Image source={{uri: item.uri}} style={styles.image}/>
                </View>
            )}
        />
        <TouchableOpacity style={styles.arrowRight} onPress={goToNextImage}>
            <FontAwesome name="chevron-right" size={30} color="white"/>
        </TouchableOpacity>
    </SafeAreaView>
    
  )
}




export default ImageSlider;