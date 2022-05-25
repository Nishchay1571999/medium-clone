import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { sanityclient } from '../../sanity'
import { Post } from '../../typings'
import Header from '../components/Header'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityclient)

function urlFor(param: { assets: { url: string } }) {
  return builder.image(param)
}
interface Props {
  post: Post
}

function Post({ post }: Props) {
  console.log(post)
  return (
    <div>
      <Header />
      <main className="w-85% flex flex-col items-center">
        <div className="flex items-center">
          <img
            className="h-50 w-full object-cover "
            src={urlFor(post.mainImage).url()}
            alt=""
          />
        </div>
        <article className='w-full%'>
          <h1 className="mt-3 text-5xl font-bold">{post.title}</h1>

          <h2>{post.description}</h2>
          <h3>{post._createdAt}</h3>
        </article>

        <div className="justify-end"></div>
      </main>
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    _createdAt,
    title,
    description,
    mainImage,
    slug,
    body
    }`

  const posts = await sanityclient.fetch(query)
  // {} inside a parentisies this says that we are going to return an object directly

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type =="post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      description,
      mainImage,
      slug,
      body
  }`
  console.log(params)

  const post = await sanityclient.fetch(query, { slug: params!.slug })
  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}
