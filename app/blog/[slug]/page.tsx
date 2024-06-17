import Image from "next/image";
import { client, urlFor } from "@/app/utils/sanity/client";
import { blogArticle } from "@/app/utils/interface";
import Head from "next/head";
import {PortableText} from '@portabletext/react'



export const revalidate = 1 // revalidate at most every hour

async function getData(slug: string) {
  const query = `
  *[_type == 'blog' && slug.current == '${slug}']  {
  title,
  smallDescription,
  keywords,
  image,
  altText,
  "currentSlug": slug.current,
  content,
}[0]`
const data = await client.fetch(query)
return data
}


export default async function fullArticle({params}: {params: {slug:string}}) {
    const data: blogArticle = await getData(params.slug)
    console.log(data)
    return (
        <>
        <Head>
            <title>{data.title}</title>
            <meta name="description" content={data.smallDescription} />
            <meta name="keywords" content={data.keywords.join(', ')} />
        </Head>
        <main>
            <h1>{data.title}</h1>
            <Image src={urlFor(data.image).url()} alt={data.altText} width={800} height={650} /> 
            <article className="prose dark:prose-invert">

                <PortableText
                value={data.content}
                
                />
            </article>
        </main>
        </>
    )
}