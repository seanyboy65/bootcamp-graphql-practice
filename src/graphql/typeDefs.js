const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    books(author: Author!): [Book!]!
    book(id: ID!): Book!
    author(id: ID!: Author!
    publisher: Publisher!

  }
  type Mutation: {
    addBook(input: addBookInput): Book!
    addAuthor(input: addAuthorInput): Author!
    deleteBook(id:ID!): Book!
    deleteAuthor(id: ID!): Author!
  }
  type Address: {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }
  type Publisher:{
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
  }
  type Author: {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int!
    address: Address!
  }
  type Book: {
    id: ID!
    title: String!
    language: String!
    numPages: Int!
    datePublished: String!
    bestseller: Boolean
    author: Author!
    publisher: Publisher!
  }
  input addBookInput: {
    title: String!
    language: String!
    numPages: Int!
    datePublished: String!
    bestseller: Boolean
    author: Author!
    publisher: Publisher!
  }
  input addAuthorInput: {
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int!
    address: Address!
  }

`
