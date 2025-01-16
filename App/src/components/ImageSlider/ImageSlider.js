import React,{useState, useRef, useEffect} from 'react';
import { SafeAreaView, FlatList, View, Image, Dimensions, TouchableOpacity } from 'react-native';


//Medidas da janela
const { width } = Dimensions.get('window');

//icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'

//Estilos
import styles from './ImageSlider.styles'



const ImageSlider = ({data, setCurrentIndexSlider}) => {

    //States
    const [currentIndex, setCurrentIndex] = useState(data.currentIndex);

    //Refs
    const flatListRef = useRef(null);
    
    useEffect(() => {
        flatListRef.current.scrollToIndex({index: currentIndex});
    }, [])

    const getItemLayout = (data, index) => ({
        length: width,   // Largura do item
        offset: width * index,  // Deslocamento baseado no índice
        index,  // Índice do item
    });

    //Função para mudar para proxima imagem atraves da flexa
    const goToNextImage = () => {
        if(currentIndex < data.images.length -1) {
            setCurrentIndex(currentIndex + 1);
            setCurrentIndexSlider(currentIndex + 1);
            flatListRef.current.scrollToIndex({index: currentIndex + 1});
            
        }
    };

    const goToPreviusImage = () => {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex -1);
            setCurrentIndexSlider(currentIndex -1);
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
            scrollEnabled={false}
            pagingEnabled
            horizontal
            data={data.images}
            keyExtractor={(item) => item.id}
            scrollToIndex
            getItemLayout={getItemLayout}
            renderItem={({item}) =>(
                <View style={styles.imageContainer(width)}>
                    <Image source={{uri: item.imgLink}} style={styles.image}/>
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