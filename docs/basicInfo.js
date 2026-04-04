module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Animaladas API',
    version: '1.0.0',
    description: 'API REST para la tienda de mascotas Animaladas',
    contact: {
      name: 'Animaladas',
      url: 'https://animaladas.netlify.app',
      email: 'animaladas2016@gmail.com'
    }
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Servidor de desarrollo'
    },
    {
      url: 'https://back-animaladas-api.onrender.com',
      description: 'Servidor de produccion'
    }
  ]
};