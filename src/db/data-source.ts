import { DataSource } from "typeorm";
import path from "path";

const PostgresDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // TODO: retrieve from yaml
  synchronize: true,
  logging: ["query", "error", "warn"],
  maxQueryExecutionTime: 500,
  entities: [path.join(__dirname, "../entities/*{.js,.ts}")],
  connectTimeoutMS: 10000,
  applicationName: "Users App",
});

PostgresDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export default PostgresDataSource;
