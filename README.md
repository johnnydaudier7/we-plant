
# 🌱 WePlant e-commerce 🌱

Welcome to WePlant, an online platform where you can browse and purchase a wide variety of plants, from succulents to decorative trees. This project has been developed solely for educational purposes using modern technologies to provide a smooth, secure and engaging user experience.

## 🛠️ Technologies Used

### Frontend

#### React
The user interface has been developed with React, a JavaScript library that allows the creation of reusable components, making the user experience fast and dynamic.

#### React Router
React Router is used to manage the navigation of the application, allowing a smooth transition between different pages, such as the store, shopping cart and product detail page.

#### React icons
To improve the aesthetics of the application, we used React Icons to integrate attractive and functional icons into the interface.



### Forms Management and Validation
#### React Hook Form
The payment processing form uses React Hook Form to handle data capture and validation efficiently and with high performance.
#### Yup
The validation of the data entered in the forms is performed by Yup, which allows you to define simple and robust validation rules.
#### Hook Form Resolvers
Integrate Yup with React Hook Form to validate the form easily and smoothly.

### Payment Processing
#### Stripe
The payment platform is managed through Stripe, allowing users to make secure and reliable transactions directly from the online store.

### Cloud Services
#### Firebase
We use Firebase to handle data reading and storage. This allows us to manage user and orders information in a scalable and real-time manner.


## Installation
1. Clone the repository on your local machine:
```bash
git clone https://github.com/johnnydaudier7/we-plant.git
```


2. Install the dependencies by executing the following command in the root of the project:
```
npm install  
```

3. Start the development server:
```
npm start
``` 
4. Access the application in your browser at http://localhost:3000

## 📦 File Structure
```
/src
 ├── /components       # Reusable components (Navbar, Footer, Cards)
 ├── /services         # Custom Hooks to handle reusable logic
 ├── /Firebase         # Firebase config
 ├── /assets           # Project image files
 ├── /utils            # Helper functions
 ├── /context          # useContext API to control the overall status of the shopping cart 
 └── App.js            # Main entry point of application
```

## 🤝 Contributions
Contributions are welcome! If you wish to contribute, please open an issue or send a pull request.

## 📄 License
[MIT](https://choosealicense.com/licenses/mit/)