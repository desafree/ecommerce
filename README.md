# E-commerce practice project


##### How to run

```bash
  # run json server
  json-server --watch -p 3001 data.json
  # run project
  npm run start
```

##### Root Environment variables
To run the project, you need to create a .env file in the root folder containing the following environment variables:
```bash
    REACT_APP_API_URL=http://localhost:3001/items --> use port used for you json-server
```
