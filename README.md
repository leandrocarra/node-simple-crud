# Development of a simple API RESTful with Node + Express & MongoDB
This repository is only intended to show how the creation of a simple CRUD

## Resources used in development:

- Node.Js - [INSTALL HERE](https://nodejs.org/en/)
- Express.Js ~ v.4.0;
- MongoDb - I used Mlab to make a POC [CREATE HERE](https://mlab.com/home)
- Mongoose ~4.x;
- PostMan (To test API); [INSTALL HERE](https://www.getpostman.com/)

## Testing with Postman:

If you want to test the APIs created in the project, first download the [Postman](https://www.getpostman.com/).
After you download Postman, you only have to perform the steps below to able to test every created API!

  ROUTE                   |       HTTP        |      description      |
------------------------- | ----------------- | --------------------- |
/api/products             |       GET         | Select All            |
/api/products             |       POST        | Create product        |
/api/products/:product_id |       GET         | Select by Id          |
/api/products/:product_id |       PUT         | Update by Id          |    
/api/products/:product_id |       DELETE      | Delete by Id          |

## Runing project
Install node

and then
```
npm install
npm start
```
The server will run in `http://localhost:8000/api`

Now, use PostMan to make request to API.
