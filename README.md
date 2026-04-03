# Back_Animaladas - Proyecto final

API REST para la tienda de mascotas Animaladas, desarrollada con Node.js, Express y MongoDB.

## Demo

- **API:** https://back-animaladas-api.onrender.com/
- **Frontend:** https://animaladas.netlify.app/

### Tecnologias utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- JWT (autenticacion)
- Swagger (documentación API)
- Dotenv
- Cloudinary (subida de imagenes)
- Multer
- Bcrypt (encriptación de contraseñas)


### Instalación

1. Clonar el repositorio:
   git clone https://github.com/SaraIsabel23/Back_Animaladas.git

2. Instalar dependencias:
   npm install

3. Crear archivo .env basándote en .env.example y configura las variables de entorno en .env:
PORT=5000
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/nombre_db

JWT_SECRET=tu_secreto_jwt_seguro

CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret

4. Ejecutar el servidor:
   npm start


### Estructura del proyecto
```html
Back_Animaladas/
--src/
    -- config/
       -- cloudinary.js
       -- db.js
    -- controllers/
       -- articleController.js
       -- authController.js
       -- postController.js
       -- productController.js
    -- middlewares/
       -- adminMiddleware.js
       -- authMiddleware.js
       -- uploadCloudinary.js
    -- models/
       -- Article.js
       -- Post.js
       -- Product.js
       -- User.js
    -- routes/
       -- articleRoutes.js
       -- authRoutes.js
       -- postRoutes.js
       -- productRoutes.js
       -- uploadRoutes.js
-- .env.example
-- .gitignore
-- app.js
-- index.js
-- package.json
```


### Endpoints

AUTENTICACION

| Metodo  | Ruta                 | Descripcion         | Autenticación |
|-------- |----------------------|---------------------|---------------|
| POST    | /api/auth/register   | Registrar usuario   | No            |
| POST    | /api/auth/login      | Iniciar sesión      | No            |


PRODUCTOS

| Metodo | Ruta                             | Descripcion                     | Autenticación |
|--------|----------------------------------|---------------------------------|---------------|
| GET    | /api/products                    | Obtener todos los productos     | No            |
| GET    | /api/products/:id                | Obtener producto por ID         | No            |
| GET    | /api/products/category/:category | Obtener por categoría           | No            |
| POST   | /api/products                    | Crear producto                  | Admin         |
| PUT    | /api/products/:id                | Actualizar producto             | Admin         |
| DELETE | /api/products/:id                | Eliminar producto               | Admin         |


ARTÍCULOS (BLOG)

| Metodo    | Ruta                  | Descripcion                     | Autenticación |
|-----------|-----------------------|---------------------------------|---------------|
| GET       | /api/articles         | Obtener todos los artículos     | No            |
| GET       | /api/articles/:id     | Obtener artículo por ID         | No            |
| POST      | /api/articles         | Crear artículo                  | Admin         |
| PUT       | /api/articles/:id     | Actualizar artículo             | Admin         |
| DELETE    | /api/articles/:id     | Actualizar artículo             | Admin         |

POSTS (TABLÓN DE ANUNCIOS)

| Metodo    | Ruta                    | Descripcion              | Autenticación |
|-----------|-------------------------|--------------------------|---------------|
| GET       | /api/posts              | Obtener todos los posts  | No            |
| GET       | /api/posts/:id          | Obtener post por ID      | No            |
| GET       | /api/posts/type/:type   | Obtener post por tipo    | No            |
| POST      | /api/posts              | Crear post               | Usuario       |
| PUT       | /api/posts/:id          | Actualizar post          | Admin         |
| DELETE    | /api/posts/:id          | Eliminar post            | Admin         |

SUBIDA DE IMÁGENES

| Metodo    | Ruta          | Descripcion                | Autenticación |
|-----------|---------------|----------------------------|---------------|
| POST      | /api/upload   | Subir imágen a Cloudinary  | Usuario       |


### Modelos

User
```js
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: ['user', 'admin'])
}
```
Product
```js
{
  name: String,
  description: String,
  price: Number,
  category: String,
  subcategory: String,
  image: String,
  featured: Boolean
}
```
Article
```js
{
  title: String,
  content: String,
  image: String,
  createdAt: Date
}
```
Post
```js
{
  title: String,
  description: String,
  type: String (enum: ['Perdido', 'Encontrado', 'Adopcion']),
  image: String,
  contact: {
    kind: String (enum: ['Telefono', 'Email']),
    value: String
  },
  user: ObjectId (ref: User),
  createdAt: Date
}
```
#### Autenticación

La API usa JWT (JSON Web Tokens) para la autenticacion. Incluye el token en el header:
```html
Authorization: Bearer <token>
```

#### Autora

Sara Isabel del Sastre Ortega
Desarrollado como proyecto del bootcamp The Bridge.
