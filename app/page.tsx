import Image from "next/image";
import { client, urlFor } from "./utils/sanity/client";
import { blogCard } from "./utils/interface";
import Link from "next/link";

export const revalidate = 1 // revalidate at most every hour

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
  title,
  smallDescription,
  altText,
  "currentSlug": slug.current,
  image,
}`
const data = await client.fetch(query)
return data
}

export default async function Home() {
  const data: blogCard[] = await getData()
  return (
    <main>
      {data.map((post, id) => (
        <div key={id}>
          <Link href={`/blog/${post.currentSlug}`}>
            <Image src={urlFor(post.image).url()} alt={post.altText} width={400} height={250} /> 
            <p>{post.title}</p>
            <p>{post.smallDescription}</p>
          </Link>
        </div>
      ))}
    </main>
  );
}
