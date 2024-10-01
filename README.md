# MoveCloud Website

The MoveCloud website is a React application that allows users to login and signup. Upon successful authentication, users are redirected to the MoveCloud app. This README file provides detailed instructions on how to set up and run the application.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Updating the Port](#updating-the-port)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the MoveCloud website, follow these steps:

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/movecloud-development/movecloud-website.git
    ```

2. Navigate to the project directory:
    ```bash
    cd movecloud-website
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```
    or you can use
    ```bash
    npm i
    ```

## Running the Application

To run the MoveCloud website, follow these steps:

1. Make sure you are in the project directory:
    ```bash
    cd movecloud-website
    ```

2. Start the application:
    ```bash
    npm run startMoveCloudWeb
    ```

The application will start and you can access it in your browser at `http://localhost:9001`.

## Updating the Port

By default, the MoveCloud website runs on port 3000. If you want to update the port, you can modify the webpack configuration file. Follow these steps:

1. Locate the webpack configuration file in the project directory: 
    ```plaintext
    /movecloud-website/webpack.config.js
    ```

2. Open the file in a text editor.

3. Look for the `devServer` section in the configuration and update the `port` property to your desired port number:
    ```javascript
    devServer: {
        contentBase: './dist',
        port: 3000 // change this to your desired port number
    }
    ```

4. Save the file.

Now, when you run the MoveCloud website using the `npm start` command, it will use the updated port.

## Authentication

The MoveCloud website provides authentication features allowing users to login and signup.

### Login

1. Navigate to the login page at `http://localhost:3000/login`.
2. Enter your credentials (username and password) and click the "Login" button.
3. Upon successful login, you will be redirected to the MoveCloud app at `http://localhost:9000`.

### Signup

1. Navigate to the signup page at `http://localhost:3000/signup`.
2. Enter your details (username, email, password) and click the "Signup" button.
3. Upon successful signup, you will be redirected to the login page where you can login with your new credentials.

### Redirection to MoveCloud App

After successful authentication (login), users are automatically redirected to the MoveCloud app, which can be accessed at `http://localhost:9001`.

## Contributing

We welcome contributions to the MoveCloud website! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on our [GitHub repository](https://github.com/movecloud-development/movecloud-website).

## License

The MoveCloud website is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
