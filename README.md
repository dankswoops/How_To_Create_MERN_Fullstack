[Markdown Guide](https://markdown-it.github.io/)

# How to create a MERN fullstack

### Prerequisites
If this is your first time running MERN you'll need a few programs.
1. [VSCodium](https://vscodium.com/) : Code Editor - The non telemetry version of Visual Studio Code (get the extensions Live Server by ritwickdey & Tailwind CSS by bradlc)
1. [Node.js](https://nodejs.org/) : Framework Backbone - Node is the N of MERN that's required to run React.
1. [Github](https://github.com/) : Code Cloud - The main way code is shared, once you make your account, follow my profile so I can add you to collaberations. 
1. [WINDOWS ONLY Git Bash](https://git-scm.com/downloads) : Git Bash - How we push and pull from the code cloud. Linux and Mac use Terminal.
1. [SYSTEMS WITHOUT BASH ONLY](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) : Bash - You'll need to npm run start. [How do I configure bash?](https://stackoverflow.com/questions/42606837/how-do-i-use-bash-on-windows-from-the-visual-studio-code-integrated-terminal) 

### Create a file strucure for coding
1. Open your computers `Documents` folder
1. Create a folder called `Code`
1. Open VSCodium and Select open folder
1. Locate `Code` and select the folder itself
1. Inside Explorer tab, right click and open intergrated terminal, make sure bash is selected

### Test NodeJS is working
You should get a version return

    node -v

### Creating the project folder that gets replaced by githubs repo folder
Name this folder anything

    mkdir githubpushingfolder

Change directory to that folder

    cd githubpushingfolder
### Creating the root content folder
Create readme for the project

    touch README.md

Create the folder

    mkdir fullstack

Change directory to fullstack

    cd fullstack

### Creating the root content
Create the backend folder

    mkdir backend

Create the frontend folder

    mkdir frontend

Create the package seed

    npm init -y

Configure the `package.json`

    {
        "name": "fullstack",
        "version": "0.00",
        "scripts": {
            "start": "concurrently \"npm run backend\" \"npm run frontend\"",
            "backend": "cd backend && nodemon",
            "frontend": "cd frontend && npm start"
        }
    }

Install ConCurrently

    npm i concurrently

### Creating the backend
Changing directory to backend

    cd backend

Creating the main server file

    touch index.js

Updating `index.js`

    console.log("Test Passed")

Creating the package seed

    npm init -y

Updating `package.json`

    {
        "name": "backend",
        "version": "0.00",
        "main": "index.js",
        "type": "module",
        "scripts": {
            "start": "nodemon"
        }
    }

Installing Nodemon glonally

    npm i -g nodemon

Confirm test passed message, CTRL + C to stop

    nodemon

### Connecting to the database
Creating the secret password file

    touch .env

Update `.env`

    MONGO_URL="" ASK ME FOR THE TEAM KEY OR SIGN UP TO MONGO DB FOR FREE
    PORT="3001"

Install the required packages

    npm i body-parser dotenv express mongoose

Update `index.js`

    import express from 'express';
    import mongoose from 'mongoose';
    import bodyParser from "body-parser"
    import { config } from 'dotenv';
    config();

    // Initialize express app
    const app = express();

    // Middleware to parse request body
    app.use(bodyParser.json());

    // Connect to MongoDB using Mongoose
    mongoose.connect(process.env.MONGO_URL, {
    });

    // Check if MongoDB connection is successful
    mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
    });

    // Define route to handle POST requests from frontend
    // app.post('/your/api/endpoint', async (req, res) => {
    //     const inputData = new Data({
    //       data: req.body.data,
    //     });
    //     // Check if inputData exists
    //     if (!inputData.data) {
    //       return res.status(400).json({ error: 'Input data is required' });
    //     }
    //     // Do something with the received data, e.g., save it to the database
    //     try {
    //       await inputData.save();
    //       return res.status(200).json({ message: 'Received data successfully', data: inputData });
    //     } catch (error) {
    //       console.error('Error saving data:', error);
    //       return res.status(500).json({ error: 'Error saving data' });
    //     }
    //   });

    // Start the server
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

Test connection, CTRL + C to stop

    nodemon

### Creating the frontend
Changing directory backout

    cd ..

Changing directoy frontend

    cd frontend

Creating React with typescript, . means in the root folder, or add a name to create a sub folder

    npx create-react-app . --template typescript

Installing Tailwind

    npm install -D tailwindcss postcss autoprefixer 

Installing Tailwind 2

    npx tailwindcss init -p

Removing the garbage files

    rm public/logo192.png public/logo512.png public/manifest.json public/robots.txt src/App.css src/logo.svg src/serviceWorker.ts src/setupTests.ts src/reportWebVitals.ts src/react-app-env.d.ts src/App.test.tsx .gitignore README.md

Update `tailwind.config.js`

    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

Update `src/index.css`

    @tailwind base; @tailwind components; @tailwind utilities;

Update `src/App.tsx`

    function App() {
    return (
        <h1 className="h-screen bg-gray-500 text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
        </h1>
    );  
    }
    export default App;

Update `src/index.tsx`

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';
    const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
    root.render(<React.StrictMode><App /></React.StrictMode>);

Update `public/index.html`

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>React App</title>
    </head>
    <body>
        <noscript>Enable JavaScript.</noscript>
        <div id="root"></div>
    </body>
    </html>

Confirm it's working, CTRL + C to stop

    npm run start

### Checking the fullstack
Change directory backout

    cd ..

Test ConCurrently

    npm run start

### Before pushing to github
Confirm the code is solid before your first push!

Learning a little markdown and writting decent readmes is the difference between your code dying or being easy to clone.

If you use a .env file in your project, make sure to remove your credentials and turn the file to examle.env, leave it as env, and notate it well or it's a useless repo.

Leaving any links or pictures to give the user an idea of the product will also greatly help traffic and people willing to spin it up.

### Preparing to push to Github
Open `Documents/Code/githubpushingfolder` or whatever you called it

!Make sure you're not in code but the temp push folder with fullstack!

Right click and look for git bash on windows and terminal on mac or linux.

You can use `ls` to check your file path

### Pushing to Github, read each reply carefully
Link git to the root, file name colors will change on file update

    git init

This establishes the connection to the repo, change to your repo link

    git remote add origin https://github.com/dankswoops/How_To_Create_MERN_Fullstack.git

Add ALL the files for push que 

    git add .

Write a message about each push, useful for rolling back quickly via desc

    git commit -m "Your commit message here"

Sometimes it's orgin main, you got to read..

    git push origin master

Enter username and password. You will likely not be able to use your password and instead need a github token that you can create [HERE](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

### After the push
In your project root folder with fullstack create a .gitignore file in the project root and make the file contain 

    touch .gitignore

Update `.gitignore`

    node_modules
    /node_modules

Push one more time with add, commit, and push

You have now pushed node_modules in a working state and ignored all future updates in the folder path. Other users can now experince your code without having to package it together themselves. More importantly, when you commit one file change, dozens of node_module updates occure, this keep the push terminal tidy.

### Additional learning
From here we need to learn how to use our backend packages to write our first api and pass data from the front to the back to the database. Next comes middleware and learning to control that data being moved.
[More Here](https://www.youtube.com/watch?v=q7g14fooY7c&list=PLaAoUJDWH9WpmAUayPDh8zrwZoH_PZ4ON&index=9)