module.exports = {
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          _id: { type: 'string', example: '507f1f77bcf86cd799439011' },
          name: { type: 'string', example: 'Juan Garcia' },
          email: { type: 'string', example: 'juan@email.com' },
          role: { type: 'string', enum: ['user', 'admin'], example: 'user' }
        }
      },
      Product: {
        type: 'object',
        properties: {
          _id: { type: 'string', example: '507f1f77bcf86cd799439011' },
          name: { type: 'string', example: 'Pienso Premium Perro' },
          description: { type: 'string', example: 'Pienso de alta calidad para perros adultos' },
          price: { type: 'number', example: 29.99 },
          category: { type: 'string', enum: ['Perros', 'Gatos', 'Pajaros', 'Roedores', 'Peces', 'Tortugas'], example: 'Perros' },
          subcategory: { type: 'string', example: 'Alimentacion' },
          image: { type: 'string', example: 'https://res.cloudinary.com/...' },
          featured: { type: 'boolean', example: true }
        }
      },
      Article: {
        type: 'object',
        properties: {
          _id: { type: 'string', example: '507f1f77bcf86cd799439011' },
          title: { type: 'string', example: 'Como cuidar a tu gato en verano' },
          content: { type: 'string', example: 'El verano puede ser duro para nuestras mascotas...' },
          image: { type: 'string', example: 'https://res.cloudinary.com/...' },
          createdAt: { type: 'string', format: 'date-time' }
        }
      },
      Post: {
        type: 'object',
        properties: {
          _id: { type: 'string', example: '507f1f77bcf86cd799439011' },
          title: { type: 'string', example: 'Perro perdido en Vallecas' },
          description: { type: 'string', example: 'Se ha perdido un perro de raza pastor aleman...' },
          type: { type: 'string', enum: ['Perdido', 'Encontrado', 'Adopcion'], example: 'Perdido' },
          image: { type: 'string', example: 'https://res.cloudinary.com/...' },
          contact: {
            type: 'object',
            properties: {
              kind: { type: 'string', enum: ['Telefono', 'Email'], example: 'Telefono' },
              value: { type: 'string', example: '612345678' }
            }
          },
          user: { $ref: '#/components/schemas/User' },
          createdAt: { type: 'string', format: 'date-time' }
        }
      },
      LoginRequest: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', example: 'usuario@email.com' },
          password: { type: 'string', example: 'password123' }
        }
      },
      RegisterRequest: {
        type: 'object',
        required: ['name', 'email', 'password'],
        properties: {
          name: { type: 'string', example: 'Juan Garcia' },
          email: { type: 'string', example: 'juan@email.com' },
          password: { type: 'string', example: 'password123' }
        }
      },
      AuthResponse: {
        type: 'object',
        properties: {
          token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' },
          user: { $ref: '#/components/schemas/User' }
        }
      },
      Error: {
        type: 'object',
        properties: {
          error: { type: 'string', example: 'Mensaje de error' }
        }
      }
    }
  }
};