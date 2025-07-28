# My React App

This is a simple React application that demonstrates the use of functional components and props.

## Project Structure

```
my-react-app
├── src
│   ├── components
│   │   └── HelloWorld.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Components

### HelloWorld

The `HelloWorld` component is a functional component that accepts a prop called `name`. It displays a greeting message that includes the value of the `name` prop.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate into the project directory:
   ```
   cd my-react-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage

You can use the `HelloWorld` component in your application by importing it and passing the `name` prop. For example:

```jsx
<HelloWorld name="Your Name" />
```

This will display "Hello, Your Name!" on the screen.