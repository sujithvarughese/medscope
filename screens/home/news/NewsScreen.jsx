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
      const featured = filteredHealthArticles.shift()
      setFeaturedArticle(featured)
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
        source={featuredArticle?.source.name}
        title={featuredArticle?.title}
        url={featuredArticle?.url}
        urlToImage={featuredArticle?.urlToImage}
        date={featuredArticle?.publishedAt}
      />
      <NewsPerCategory category="health" articles={healthArticles} />
      <NewsPerCategory category="science" articles={scienceArticles} />
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {

  }
})

export default NewsScreen