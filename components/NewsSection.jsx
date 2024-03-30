import { ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import { useEffect, useState } from 'react'
import NewsTile from './NewsTile'

const NewsSection = () => {

  const [newsArticles, setNewsArticles] = useState([])

  const fetchArticles = async () => {
    try {
      const response = await axios("http://localhost:8800/api/v1/news")
      const { articles } = response.data
      setNewsArticles(articles)
    } catch (error) {
      throw new Error(error)
    }
  }
  useEffect(() => {
    fetchArticles()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Latest Health News</Text>
      <ScrollView style={styles.container} horizontal={true}>
        {newsArticles?.map((article, index) => <NewsTile key={index} author={article.author} title={article.title} url={article.url} urlToImage={article.urlToImage}/>)}
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {

  },
  text: {
    fontWeight: "700"
  }
})

export default NewsSection