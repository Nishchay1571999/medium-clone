import {
  createCurrentUserHook,
  createClient,
} from 'next-sanity'
import { ImageUrlBuilder } from '@sanity/image-url'

// lib/config.js

export const config = {

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-10-21', 
  useCdn: process.env.NODE_ENV === 'production',
}



// Set up the client for fetching data in getProps page function
export const sanityclient = createClient(config)

/**
 * Set up a helper function for the image using only asset refference data on the document
 *
 *
 */


// Helper function to fetch the data on current logged in user 

export const useCurrentUser = createCurrentUserHook(config)
