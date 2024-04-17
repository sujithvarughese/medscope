import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/styles'

const FeaturedArticle = ({ category, source, title, url, urlToImage, date }) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={{ uri: urlToImage }}
        alt="news-cover"
      >
        <View style={styles.bgFeatured}>
          <Text style={styles.textFeatured}>Featured Article</Text>
        </View>


        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textSource}>{source}</Text>
        </View>

      </ImageBackground>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
  image: {
    width: "100%",
    height: 240,
    justifyContent: "space-between",
  },
  textContainer: {
    padding: 8,
  },
  bgFeatured: {
    margin: 8,
    borderRadius: 12,
    backgroundColor: colors.color,
    width: 120,
    height: 20,
    justifyContent: "center"
  },
  textFeatured: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  textTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  textSource: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    fontStyle: "italic",
  }
})

export default FeaturedArticle