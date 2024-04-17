import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NewsTile from './NewsTile'
import connect from '../../../utils/connect'
import NewsPerCategory from './NewsPerCategory'
import FeaturedArticle from './FeaturedArticle'

const NewsScreen = () => {

  const [healthArticles, setHealthArticles] = useState([])
  const [scienceArticles, setScienceArticles] = useState([])
  const [featuredArticle, setFeaturedArticle] = useState(null)

  const fetchArticles = async () => {
    try {
      const response = await connect("news")
      const { filteredHealthArticles, filteredScienceArticles } = response.data
      const featuredHealth = filteredHealthArticles.shift()
      setFeaturedArticle(featuredHealth)
      setHealthArticles(filteredHealthArticles)
      setScienceArticles(filteredScienceArticles)
    } catch (error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <ScrollView style={styles.container}>
      <FeaturedArticle
        source={healthArticles[0]?.source.name}
        title={healthArticles[0]?.title}
        url={healthArticles[0]?.url}
        urlToImage={healthArticles[0]?.urlToImage}
        date={healthArticles[0]?.publishedAt}
      />
      <NewsPerCategory category="health" articles={healthArticles.slice(1)} />
      <FeaturedArticle
        source={scienceArticles[0]?.source.name}
        title={scienceArticles[0]?.title}
        url={scienceArticles[0]?.url}
        urlToImage={scienceArticles[0]?.urlToImage}
        date={scienceArticles[0]?.publishedAt}
      />
      <NewsPerCategory category="science" articles={scienceArticles.slice(1)} />
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {

  }
})

export default NewsScreen