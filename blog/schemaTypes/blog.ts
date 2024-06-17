export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titulo',
        },
        {
            title: 'Slug (lo que le sigue despues de la URL)',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200,
            }
          },
          {
            title: 'Imagen',
            name: 'image',
            type: 'image',
          },
          {
            title: 'Descripcion de la imagen',
            name: 'altText',
            type: 'text'
          },
          {
            title: 'Descripcion breve de la entrada o blog',
            name: 'smallDescription',
            type: 'text'
          },
          {
            title: 'Contentido del Blog', 
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
          },
          {
            title: 'Palabras Clave',
            name: 'keywords',
            type: 'array',
            of: [{type: 'string'}]
          }
    ]
}