## Overview
![image](https://github.com/vidhisha28/Atlan-sql-editor/assets/84218189/0b8fa332-d8bf-4ec5-9898-203e8c0606a5)

The SQL Editor is a web application that provides a user-friendly interface for executing SQL queries. It allows users to interact with a database by entering SQL commands and viewing the results.
Queries that you can run : 
SELECT * FROM Customers
SELECT * FROM Categories
SELECT * FROM Employee_territories;
SELECT * FROM Employees;
SELECT * FROM Orders;
SELECT * FROM Products;

## Technology Stack

This project is built using [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), and it utilizes the [React](https://reactjs.org/) JavaScript framework for building the user interface. The application includes various packages and dependencies to enhance functionality and streamline development.

## Installation

To run the Atlan SQL Editor locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/vidhisha28/Atlan-sql-editor.git
Navigate to the project directory:

bash
Copy code
cd Atlan-sql-editor
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
## Deployed link 
https://stellular-lebkuchen-a8ba3c.netlify.app/
## Page Load Time
Used Lighthouse chrome-developer tools to check the performance of the SQL editor: 
![performance-1](https://github.com/vidhisha28/Atlan-sql-editor/assets/84218189/4456c234-efd6-4115-8437-84898e83a3ba)

![performance-2](https://github.com/vidhisha28/Atlan-sql-editor/assets/84218189/2671a7ab-7820-46b3-bf83-074faf7cb00b)



## Performance Optimizations
To enhance the load time and overall performance of the application, the following optimizations were implemented:

 Code Splitting: Utilized React's code splitting to load only the necessary components when required, improving initial page load times.

 Lazy Loading: Employed lazy loading for certain components, ensuring that resources are fetched only when needed, minimizing the initial payload.

 Minification and Compression: Implemented code minification and compression techniques to reduce file sizes and accelerate download times.

 Cache Management: Configured appropriate caching strategies for static assets to reduce server requests and improve subsequent page loads.

 Bundle Analysis: Regularly analyzed the application bundle to identify and eliminate unnecessary dependencies, optimizing the overall size of the application.

### Contribution
Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.
