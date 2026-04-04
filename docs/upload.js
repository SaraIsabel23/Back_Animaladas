module.exports = {
  paths: {
    '/api/upload': {
      post: {
        tags: ['Upload'],
        summary: 'Subir imagen',
        description: 'Sube una imagen a Cloudinary',
        operationId: 'uploadImage',
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  image: {
                    type: 'string',
                    description: 'Imagen en formato base64'
                  }
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Imagen subida correctamente',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    url: {
                      type: 'string',
                      example: 'https://res.cloudinary.com/...'
                    }
                  }
                }
              }
            }
          },
          401: { description: 'No autorizado' },
          500: { description: 'Error del servidor' }
        }
      }
    }
  }
};