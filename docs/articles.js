module.exports = {
  paths: {
    '/api/articles': {
      get: {
        tags: ['Articles'],
        summary: 'Obtener todos los articulos',
        description: 'Devuelve todos los articulos del blog',
        operationId: 'getArticles',
        responses: {
          200: { description: 'Lista de articulos' },
          500: { description: 'Error del servidor' }
        }
      },
      post: {
        tags: ['Articles'],
        summary: 'Crear un articulo',
        description: 'Crea un nuevo articulo (solo admin)',
        operationId: 'createArticle',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Article'
              }
            }
          }
        },
        responses: {
          201: { description: 'Articulo creado' },
          401: { description: 'No autorizado' },
          403: { description: 'Acceso denegado - Solo admin' },
          500: { description: 'Error del servidor' }
        }
      }
    },
    '/api/articles/{id}': {
      get: {
        tags: ['Articles'],
        summary: 'Obtener articulo por ID',
        description: 'Devuelve un articulo especifico',
        operationId: 'getArticleById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID del articulo'
          }
        ],
        responses: {
          200: { description: 'Articulo encontrado' },
          404: { description: 'Articulo no encontrado' },
          500: { description: 'Error del servidor' }
        }
      },
      put: {
        tags: ['Articles'],
        summary: 'Actualizar articulo',
        description: 'Actualiza un articulo existente (solo admin)',
        operationId: 'updateArticle',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID del articulo'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Article'
              }
            }
          }
        },
        responses: {
          200: { description: 'Articulo actualizado' },
          401: { description: 'No autorizado' },
          403: { description: 'Acceso denegado - Solo admin' },
          404: { description: 'Articulo no encontrado' },
          500: { description: 'Error del servidor' }
        }
      },
      delete: {
        tags: ['Articles'],
        summary: 'Eliminar articulo',
        description: 'Elimina un articulo (solo admin)',
        operationId: 'deleteArticle',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID del articulo'
          }
        ],
        responses: {
          200: { description: 'Articulo eliminado' },
          401: { description: 'No autorizado' },
          403: { description: 'Acceso denegado - Solo admin' },
          404: { description: 'Articulo no encontrado' },
          500: { description: 'Error del servidor' }
        }
      }
    }
  }
};