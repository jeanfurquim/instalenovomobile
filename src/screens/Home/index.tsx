import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import eletricista from "../../assets/images/eletricista.png";
import icone from "../../assets/images/icon.png";
import { cores, temas, text } from "../../default_styles/index";
import useTheme from "../../hooks/useThemes";
import {
  CarouselSlide,
  CarouselWrapper,
  Container,
  Dot,
  DotsWrapper,
  FooterWrapper,
} from "./styles";
import { carouselData } from "../../utils/carouselData";
import Body from "../../components/texts/Body";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const carouselSlideWidth = Dimensions.get("window").width;

const Home = () => {
  const theme = useTheme();
  const [carouselIndex, setCarouselIndex] = useState(0);

  const { navigate } = useNavigation<Nav>();
  type Nav = {
    navigate: (value: string) => void;
  };

  const [carouselRef, setCarouselRef] = useState<ScrollView | null>(null);

  function handleCarouselSlide() {
    if (carouselIndex < carouselData.length - 1) {
      const nextIndex = carouselIndex + 1;

      carouselRef?.scrollTo({
        x: nextIndex * carouselSlideWidth,
      });
      setCarouselIndex(nextIndex);
    }
  }

  function handleCarouselSlideDot(index: number) {
    carouselRef?.scrollTo({
      x: index * carouselSlideWidth,
    });
    setCarouselIndex(index);
  }

  return (
    <SafeAreaView className="pt-8" style={temas.container}>
      <View style={temas.containerCard}>
        <Image source={eletricista} className="h-56 w-64" />
        <View style={temas.textContainer}>
          <Text
            className="text-white text-center text-2xl"
            style={text.headline}
          >
            ASSISTENTE TÉCNICO
          </Text>
          <Text
            className="text-white text-center text-2xl"
            style={text.headline}
          >
            VIRTUAL
          </Text>
        </View>
        <View className="w-full">
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            ref={(ref) => setCarouselRef(ref)}
            onMomentumScrollEnd={(event) => {
              const index = Math.round(
                event.nativeEvent.contentOffset.x / carouselSlideWidth
              );
              setCarouselIndex(index);
            }}
          >
            {carouselData.map((item) => {
              return (
                <CarouselSlide key={item.id} width={carouselSlideWidth}>
                  <Text className="text-gray-400 text-center text-sm">
                    {item.subtitle}
                  </Text>
                </CarouselSlide>
              );
            })}
          </ScrollView>
        </View>
        <DotsWrapper>
          <Dot
            active={carouselIndex == 0}
            onPress={() => handleCarouselSlideDot(0)}
          />
          <Dot
            active={carouselIndex == 1}
            onPress={() => handleCarouselSlideDot(1)}
          />
          <Dot
            active={carouselIndex == 2}
            onPress={() => handleCarouselSlideDot(2)}
          />
        </DotsWrapper>
        <FooterWrapper>
          {carouselIndex < 2 ? (
            <Button
              title={
                carouselIndex === carouselData.length - 1
                  ? "Iniciar"
                  : "Próximo"
              }
              background={theme.colors.background.secondary}
              onPress={handleCarouselSlide}
            />
          ) : (
            <Button
              title={
                carouselIndex === carouselData.length - 1
                  ? "Iniciar"
                  : "Próximo"
              }
              background={theme.colors.background.secondary}
              onPress={() => navigate("Buscar")}
            />
          )}

          <Button
            title="Instale Soft"
            background="transparent"
            icon={<Image source={icone} className="h-5 w-5" />}
          />
        </FooterWrapper>
      </View>
    </SafeAreaView>
  );
};

export default Home;
