export interface blogCard{
    title: string, 
    smallDescription: string,
    image: any,
    altText: string,
    currentSlug: string,
}

export interface blogArticle {
    title: string,
    altText: string,
    image: any, 
    content: any, 
    currentSlug: string,
    smallDescription: string,
    keywords: string[],
}