import Link from 'next/link'
import React from 'react'
import { Post } from '../../typings'
import imageUrlBuilder from '@sanity/image-url'
import { sanityclient } from '../../sanity'

interface Props {
  posts: [Post]
}

const builder = imageUrlBuilder(sanityclient)

function urlFor(param: { assets: { url: string } }) {
  return builder.image(param)
}
function urlForstring(param: string) {
  return builder.image(param)
}

function Posts({ posts }: Props) {
  return (
    <div className="w-85% content-center">
      <div className="grid bg-white p-3 sm:grid-cols-2 sm:gap-2  md:grid-cols-3 md:gap-2   lg:grid-cols-4 lg:gap-3">
        {posts.map((post) => {
          return (
            <div className="flex flex-col content-center items-center rounded-lg p-5 text-center transition-shadow delay-150 ease-in-out group-hover:rounded-lg group-hover:bg-green-400">
              <Link href={`/post/${post.slug.current}`} key={post._id}>
                <div className=" group cursor-pointer overflow-hidden rounded-lg border hover:bg-green-400 hover:font-medium">
                  <img
                    className="hover:scale-120  object-cover transition delay-150 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-green-500 sm:w-60 lg:w-full"
                    src={urlFor(post.mainImage).url()!}
                    alt=""
                  />
                  <div>
                    <div className="sm:width-full relative mt-5">
                      <p className="text-lg font-bold">{post.title}</p>
                      <p className="right-0 text-sm font-serif group-hover:text-bold">{post.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Posts
