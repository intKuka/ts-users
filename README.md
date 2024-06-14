# Users CRUD API using Typescript

## Usings
- Node v20.10.0
- Express
- Postgres
- typeORM
- class-validator library

## Starting
To start you need to create .env file with all configuration settings (easiest way is to copy example.env and rename it into .env).

Don't forget to enter the root folder :)
```
cd users-expressJs
```

**DEV** _(runs project via ts-node)_
```
npm run local
```
**PROD** _(compiles project into javascript files and runs it)_
```
npm start
```

## Testing
[CRUD: Users - Postman Collection](https://github.com/user-attachments/files/15834979/CRUD-.Users.postman_collection.json)

### Patterns

*User Schema*
```
{
  "id": integer,
  "name": string,
  "age": integer
}
```
