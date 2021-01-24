Creating the first Seed
Suppose we want to insert some data into a few tables by default. If we follow up on previous example we can consider creating a demo user for User table.

To manage all data migrations you can use seeders. Seed files are some change in data that can be used to populate database table with sample data or test data.

Let's create a seed file which will add a demo user to our User table.

npx sequelize-cli seed:generate --name demo-user
