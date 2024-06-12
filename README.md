# Blog Content API ✍️🖥️☕
##### PT.BR 🇧🇷
A **Blog Content** é uma API que gerencia os conteúdos de um blog, fornecendo operações para uma base de dados que contém entidades como Usuário, Postagem e Categoria.<br>
Esse projeto foi base para o estudo relacional entre entidades em um banco de dados, com endpoints criados a partir de um diagrama de entidade-relacionamento (disponível abaixo). Além disso, a API conta com autenticação de tokens para acesso.
##### Tecnologias utilizadas:
- JavaScript
- Node.js
- Sequelize
- Express
- MySQL
- Docker

##### Diagrama de entidade-relacionamento (DER):
![Diagrama entidade-relacionamento da API Blog Content](https://github.com/bran-do/blog-content-api/assets/131308486/68087218-1ec9-4b3f-a8a6-55866c768fc8)

<details>
  <summary>Requisitos de desenvolvimento</summary>
  <br>
  <ol>
    <li>Crie migrations para as tabelas <code>users</code>, <code>categories</code>, <code>blog_posts</code>, <code>posts_categories</code></li>
    <li>Crie o modelo <code>User</code> com as propriedades corretas</li>
    <li>Crie o endpoint POST <code>/login</code></li>
    <li>Crie o endpoint POST <code>/user</code></li>
    <li>Crie o endpoint GET <code>/user</code></li>
    <li>Crie o endpoint GET <code>/user/:id</code></li>
    <li>Crie o modelo <code>Category</code> com as propriedades corretas</li>
    <li>Crie o endpoint POST <code>/categories</code></li>
    <li>Crie o endpoint GET <code>/categories</code></li>
    <li>Crie o modelo <code>BlogPost</code> com as propriedades e associações corretas</li>
    <li>Crie o modelo <code>PostCategory</code> com as propriedades e associações corretas</li>
    <li>Crie o endpoint POST <code>/post</code></li>
    <li>Crie o endpoint GET <code>/post</code></li>
    <li>Crie o endpoint GET <code>/post/:id</code></li>
    <li>Crie o endpoint PUT <code>/post/:id</code></li>
  </ol>
</details>
<hr>

##### EN 🇬🇧/🇺🇸
**Blog Content** is an API that manages blog content, offering operations to a database containing entities such as User, Post and Category.
This project was part of a study about entity relationship in databases, with endpoints developed from an entity relationship diagram (above). Furthermore, this API have token authentication.
##### Technology tools used:
- JavaScript
- Node.js
- Sequelize
- Express
- MySQL
- Docker

<details>
  <summary>Development requirements</summary>
  <br>
  <ol>
    <li>Create migrations fro <code>users</code>, <code>categories</code>, <code>blog_posts</code>, <code>posts_categories</code> tables</li>
    <li>Create <code>User</code> model with the correct attributes</li>
    <li>Create POST <code>/login</code> endpoint</li>
    <li>Create POST <code>/user</code> endpoint</li>
    <li>Create GET <code>/user</code> endpoint</li>
    <li>Create GET <code>/user/:id</code> endpoint</li>
    <li>Create <code>Category</code> endpoint with correct attributes</li>
    <li>Create POST <code>/categories</code> endpoint</li>
    <li>Create GET <code>/categories</code> endpoint</li>
    <li>Create <code>BlogPost</code> model with correct attributes and associations</li>
    <li>Create <code>PostCategory</code> model with correct attributes and associations</li>
    <li>Create POST <code>/post</code> endpoint</li>
    <li>Create GET <code>/post</code> endpoint</li>
    <li>Create GET <code>/post/:id</code> endpoint</li>
    <li>Create GET <code>/post/:id</code> endpoint</li>
  </ol>
</details>
