import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '2d7sklzu',
  dataset:"production" ,
  apiVersion: '2023-05-03' , // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}