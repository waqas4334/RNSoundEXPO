import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Dimensions } from 'react-native';
// import { AdMobBanner } from 'expo-ads-admob';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 3 - 10;

const SoundsScreen = () => {
  // useEffect(() => {
  //   // Initialize Google AdMob
  //   AdMobInterstitial.setAdUnitID('your-ad-unit-id');
  //   AdMobInterstitial.requestAdAsync();
  // }, []);

  const cards = [
    {
      id: 1,
      title: 'Sound 1',
      image: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 2,
      title: 'Sound 2',
      image: 'https://picsum.photos/id/238/200/300',
    },
    {
      id: 3,
      title: 'Sound 3',
      image: 'https://picsum.photos/id/239/200/300',
    },
    {
      id: 4,
      title: 'Sound 4',
      image: 'https://picsum.photos/id/240/200/300',
    },
    {
      id: 5,
      title: 'Sound 5',
      image: 'https://picsum.photos/id/241/200/300',
    },
    {
      id: 6,
      title: 'Sound 6',
      image: 'https://picsum.photos/id/242/200/300',
    }, 
    {
      id: 7,
      title: 'Sound 7',
      image: 'https://picsum.photos/id/240/200/300',
    },
    {
      id: 8,
      title: 'Sound 8',
      image: 'https://picsum.photos/id/241/200/300',
    },
    {
      id: 9,
      title: 'Sound 9',
      image: 'https://picsum.photos/id/242/200/300',
    },
  ];

  return (
    <View style={styles.container}>
      {/* <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="your-ad-unit-id"
        servePersonalizedAds={true}
        style={styles.adBanner}
      /> */}
      <ImageBackground
          source={require('../../assets/images/backgroundImageSound.jpg')}
          style={{ width: '100%', height: '100%' }}
          blurRadius={1}
        >

      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {cards.map(card => (
          <View key={card.id} style={styles.card}>
            <ImageBackground source={{ uri: card.image }} style={styles.cardImage}>
              <Text style={styles.cardTitle}>{card.title}</Text>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
</ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  adBanner: {
    width: '100%',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 5,
    borderRadius: 5,
  },
});

export { SoundsScreen };
