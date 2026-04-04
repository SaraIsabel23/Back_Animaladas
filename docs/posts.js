module.exports = {
  paths: {
    '/api/posts': {
      get: {
        tags: ['Posts'],
        summary: 'Obtener todos los posts',
        description: 'Devuelve todos los anuncios del tablon',
        operationId: 'getPosts',
        responses: {
          200: { description: 'Lista de posts' },
          500: { description: 'Error del servidor' }
        }
      },
      post: {
        tags: ['Posts'],
        summary: 'Crear un post',
        description: 'Crea un nuevo anuncio (usuario autenticado)',
        operationId: 'createPost',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Post'
              }
            }
          }
        },
        responses: {
          201: { description: 'Post creado' },
          401: { description: 'No autorizado' },
          500: { description: 'Error del servidor' }
        }
      }
    },
    '/api/posts/{id}': {
      get: {
        tags: ['Posts'],
        summary: 'Obtener post por ID',
        description: 'Devuelve un anuncio especifico',
        operationId: 'getPostById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID del post'
          }
        ],
        responses: {
          200: { description: 'Post encontrado' },
          404: { description: 'Post no encontrado' },
          500: { description: 'Error del servidor' }
        }
      },
      put: {
        tags: ['Posts'],
        summary: 'Actualizar post',
        description: 'Actualiza un anuncio (solo admin)',
        operationId: 'updatePost',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID del post'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Post'
              }
            }
          }
        },
        responses: {
          200: { description: 'Post actualizado' },
          401: { description: 'No autorizado' },
          403: { description: 'Acceso denegado - Solo admin' },
          404: { description: 'Post no encontrado' },
          500: { description: 'Error del servidor' }
        }
      },
      delete: {
        tags: ['Posts'],
        summary: 'Eliminar post',
        description: 'Elimina un anuncio (solo admin)',
        operationId: 'deletePost',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID del post'
          }
        ],
        responses: {
          200: { description: 'Post eliminado' },
          401: { description: 'No autorizado' },
          403: { description: 'Acceso denegado - Solo admin' },
          404: { description: 'Post no encontrado' },
          500: { description: 'Error del servidor' }
        }
      }
    },
    '/api/posts/type/{type}': {
      get: {
        tags: ['Posts'],
        summary: 'Obtener posts por tipo',
        description: 'Devuelve anuncios de un tipo especifico',
        operationId: 'getPostsByType',
        parameters: [
          {
            name: 'type',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              enum: ['Perdido', 'Encontrado', 'Adopcion']
            },
            description: 'Tipo de anuncio'
          }
        ],
        responses: {
          200: { description: 'Lista de posts del tipo' },
          500: { description: 'Error del servidor' }
        }
      }
    }
  }
};