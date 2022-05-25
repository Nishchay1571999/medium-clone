import { NextPage } from 'next'
import Link from 'next/link'
import Banner from './components/Banner'
import Header from './components/Header'
import Posts from './components/Posts'
import { sanityclient } from '../sanity'
import {Post} from '../typings'




interface Props{
  posts:[Post]
}


function Home({ posts }: Props){
  return (
    <div className="max-w-5xl mx-auto">
      <title>Medium Blog</title>
      <Header />
      <Banner />
      <Posts posts={posts}/>
    </div>
  )
}

export default Home




export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
    _id,
    _createdAt,
    title,
    description,
    mainImage,
    slug,
    body,
  }`
  const posts = await sanityclient.fetch(query);

  return {
    props:{
      posts
    }
  }
}



