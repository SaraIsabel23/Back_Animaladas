module.exports = {
  paths: {
    '/api/products': {
      get: {
        tags: ['Products'],
        summary: 'Obtener todos los productos',
        description: 'Devuelve todos los productos',
        operationId: 'getProducts',
        responses: {
          200: { description: 'Lista de productos' },
          500: { description: 'Error del servidor' }
        }
      },
      post: {
        tags: ['Products'],
        summary: 'Crear un producto',
        description: 'Crea un nuevo producto (solo admin)',
        operationId: 'createProduct',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Product'
              }
            }
          }
        },
        responses: {
          201: { description: 'Producto creado' },
          401: { description: 'No autorizado' },
          403: { description: 'Acceso denegado - Solo admin' },
          500: { description: 'Error del servidor' }
        }
      }
    },
    '/api/products/{id}': {
      get: {
        tags: ['Products'],
        summary: 'Obtener producto por ID',
        description: 'Devuelve un producto especifico',
        operationId: 'getProductById',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID del producto'
          }
        ],
        responses: {
          200: { description: 'Producto encontrado' },
          404: { description: 'Producto no encontrado' },
          500: { description: 'Error del servidor' }
        }
      },
      put: {
        tags: ['Products'],
        summary: 'Actualizar producto',
        description: 'Actualiza un producto existente (solo admin)',
        operationId: 'updateProduct',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID del producto'
          }
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Product'
              }
            }
          }
        },
        responses: {
          200: { description: 'Producto actualizado' },
          401: { description: 'No autorizado' },
          403: { description: 'Acceso denegado - Solo admin' },
          404: { description: 'Producto no encontrado' },
          500: { description: 'Error del servidor' }
        }
      },
      delete: {
        tags: ['Products'],
        summary: 'Eliminar producto',
        description: 'Elimina un producto (solo admin)',
        operationId: 'deleteProduct',
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
            description: 'ID del producto'
          }
        ],
        responses: {
          200: { description: 'Producto eliminado' },
          401: { description: 'No autorizado' },
          403: { description: 'Acceso denegado - Solo admin' },
          404: { description: 'Producto no encontrado' },
          500: { description: 'Error del servidor' }
        }
      }
    },
    '/api/products/category/{category}': {
      get: {
        tags: ['Products'],
        summary: 'Obtener productos por categoria',
        description: 'Devuelve productos de una categoria',
        operationId: 'getProductsByCategory',
        parameters: [
          {
            name: 'category',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              enum: ['Perros', 'Gatos', 'Pajaros', 'Roedores', 'Peces', 'Tortugas']
            },
            description: 'Categoria del producto'
          }
        ],
        responses: {
          200: { description: 'Lista de productos de la categoria' },
          500: { description: 'Error del servidor' }
        }
      }
    }
  }
};