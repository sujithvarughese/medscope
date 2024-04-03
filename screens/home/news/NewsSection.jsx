import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NewsTile from './NewsTile'
import connect from '../../../utils/connect'
import NewsPerCategory from './NewsPerCategory'

const NewsSection = () => {

  const [healthArticles, setHealthArticles] = useState([])
  const [scienceArticles, setScienceArticles] = useState([])

  const fetchArticles = async () => {
    try {
      const response = await connect("news")
      const { filteredHealthArticles, filteredScienceArticles } = response.data
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
    <View style={styles.container}>
      <NewsPerCategory category="health" articles={healthArticles} />
      <NewsPerCategory category="science" articles={scienceArticles} />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    gap: 12
  }
})

export default NewsSection