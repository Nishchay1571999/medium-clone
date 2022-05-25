import React from 'react'

function Banner() {
  return (
    <div className="flex items-center justify-between border-y border-black bg-green-400 px-5 py-10 lg:py-10 max-w-5xl">
      <div className="space-y-5 px-10">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          is a place to write read and connect
        </h1>
        <h2>
          This is a easy place to write and share wha you think and connect with
          millions of people.
        </h2>
      </div>
      <div>
        <img
          className="hidden bg-yellow-400 w-[30rem] md:inline-flex lg:h-full mr-2"
          src="https://miro.medium.com/max/1146/1*jcY-BmXNNrWTJCOchzqJrQ.jpeg"
          alt="Medium logo"
        />
      </div>
    </div>
  )
}

export default Banner
