# GraphQL Notes & Interview Questions

> A comprehensive guide to GraphQL, including schema design, queries, mutations, and best practices.

---

## 📚 Contents

1. [Why GraphQL?](#why-graphql) - REST vs GraphQL
2. [Schema](#schema) - Type definitions
3. [RootQuery](#rootquery) - Entry points
4. [Nested Query](#nested-query) - Relationships
5. [Mutations](#mutations) - Data modification

---
section 1 Introduction

## What is GraphQl?
GraphQL is a query language for your API. Instead of many fixed endpoints, you have one endpoint and you ask for exactly the data you need.

One endpoint
Everything goes through POST /graphql. No more /users, /posts, /comments.

## Why GraphQL?

REST API's data is tightly cuples with each other. So If we sent data to client it tightly connected with each other so data will be in over Fetch.

Restful routing with highly related or relational data can be quite challenging, that's why we use GraphQL.

It solves over-serving of data (Heavily nested data).


scetion 2 schema and types 

---

## Schema

Schema is something which tells GraphQL that what kind of data we have in our database and what is the relation between them.

GraphQL.js is library which interacts JS application to GraphQL.

---

## Writing Query for Schema

```javascript
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});
```

---

## RootQuery

A GraphQL root query is the entry point for querying your GraphQL schema.

```javascript
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: GraphQLList(UserType),
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // Fetch user from your data source
        return fetchUsers(); // Replace with your data fetching logic
      },
    },
    users: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        // Fetch users from your data source
        return fetchUsers(); // Replace with your data fetching logic
      },
    },
    posts: {
      type: GraphQLList(PostType),
      resolve(parent, args) {
        // Fetch posts from your data source
        return fetchPosts(); // Replace with your data fetching logic
      },
    },
  },
});
```

---

## Nested Query

Nested query is all about relation of query or data with other query or data.

```javascript
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLString },
    author: {
      type: UserType,
      resolve(parent, args) {
        // Fetch the author for this specific post
        return fetchUserById(parent.authorId);
      },
    },
  }),
});
```

---

## Mutations

Mutations in GraphQL are used to modify data (create, update, or delete).

```javascript
// Mutation type
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        // Replace this with your database logic
        const newUser = {
          id: Date.now().toString(),
          name: args.name,
          email: args.email,
        };
        mockUsers.push(newUser);
        return newUser;
      },
    },
    createPost: {
      type: PostType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        content: { type: GraphQLString },
        authorId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        // Replace this with your database logic
        const newPost = {
          id: Date.now().toString(),
          title: args.title,
          content: args.content,
          authorId: args.authorId,
        };
        mockPosts.push(newPost);
        return newPost;
      },
    },
  },
});
```
