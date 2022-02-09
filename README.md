# Heart Clothing | E-commerce react app  :dress: :jeans:
Simple ecommerce react-redux js app with firebase and redux-saga.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Installation and running

In the project directory, you can run:

- `npm install`
- `npm run start` app wil be loaded on `http://localhost:3000`


## Sample of Project
![rhome](https://user-images.githubusercontent.com/87421798/153181463-6edf0e29-8499-42db-a8c7-b19075c27ac0.png)


## Snapshots of Project


<details>
<summary>product-overview</summary>
<p>
  
![rwomen](https://user-images.githubusercontent.com/87421798/153181478-a274ffd4-8fe9-4cfa-8fc4-92a44bc8abf5.png)
  
</p>
</details>

<details>
 <summary>Shopping Cart</summary>
 <p>
   
 ![rcart](https://user-images.githubusercontent.com/87421798/153181455-b0c4de2a-90c3-45a2-8324-6df1204205a7.png)
   
</p>
</details>

<details>
 <summary>SignIn and SignUp</summary>
 <p>
   
![rsign](https://user-images.githubusercontent.com/87421798/153181474-f371252b-568e-4559-bc48-a903b25f1310.png)
   
</p>
</details>

<details>
 <summary>Payment using Stripe</summary>
 <p>
   

 ![rpay1](https://user-images.githubusercontent.com/87421798/153181468-65cd1826-0988-452e-8424-fe3064c09d8e.png) 
![rpay2](https://user-images.githubusercontent.com/87421798/153181472-1ab2d9a4-3621-4d12-8796-1272b8abc9ea.png)

</p>
</details>



## Features
- Home, Products, Product Details, Cart, SignIn & SignUp with validation, Profile and Error pages
- State management with Redux
- Responsive design with Styled-components
- Add proucts to cart and see cart simultaneously
- Product Details page with image magnify
- Cart with increment, decrement and remove product abilities
- Local Login/Register with validation
- Login with Google OAuth, client side auth
- Firebase used for Oauth and database.
- Loading state with spinner with text or default spinner
- Full card Checkout with stripe


## Libraries used

- React with Hooks, Redux, Redux Saga
- React with styled-components 
- Axios, firebase


## Microservices

- React-UI Service: Front-end client UI which displays data and makes API calls using Axios API.
- Common Data Service: Handles client request to provide common data such as product, filters, categories and order information, etc.
- Authentication Service: Creates user account and handles username/password authentication.
- Payment Service: Handles payment requests from the client and makes a subsequent request to Stripe API for money deduction.
- Search Suggestion Service: Provide default search suggestions and provides suggestions based on a prefix using Hashmap. The service creates the Hashmap based on available data 
  from the database with various combinations and populates the map.
  
  
## Contact
Feel free to reach me ->
- Email - <nehaprajapati1150@gmail.com> 
- LinkedIn - https://linkedin.com/in/neha-prajapati-1150
- Twitter - https://twitter.com/NehaPra03810819

