-Maybe add an interesting fact section? With interesting one liner shock values ...with a read blog post link. 
-Another TODO: Add a pencil logo and lead to it to a new screen showing forum/discussion page/comment page.
-Another TODO: make logo an asci art of a flower or something
-Another TODO: fix inline elements of the icons in sidedrawer
-ANother TODO: cyberpunk name generator (ie. lipit0r) , allows users to add their own suggestions which gets updated to the generator.
--->one per host. per day.
-Another TODO: timur.bio


> npm init -y
> created front-end and backend folders
> installed dependencies: nodemon express dotenv
> npm i --save-dev nodemon and concurrently
>>installed dev dependencies: concurrently and nodemon

> cd front end folder > run npx create-react-app .
> go in to back end folder and set up server. js to see them running
> now set up our scripts


>cd backend, create server.js and begin building out our express server.
>changed git repository from front end to the root folder
>>created a new .gitignore file in the root folder, and then CP contents to the that root .gitignore
>>rm -rf .git in the front end folder >> git init in the root folder
>>Add .env to the .gitignore folder as well.

> updated the package.json scripts "scripts" section
>test with npm run dev 


>Set up Mongoose, connect via mongoose URL and dotenv environment to config > db.js file.
>>connect with express server by calling mongoose service and setting up async await error

>Backend/models> schemaOfYourData_File.js where you create the schema and call mongoose.model function
>>export the module 

>Backend/data > actual data that would be added to the database. so far copy and pasted based on model schema.

>Backend/seederScript.js has the function importData defined, and them immediatley called
>>takes the data from model, and the dummy data from /data and then updates when seederScript.js is called in the script of package.json
>>>data:import script in package.json calls the seeedeScript.js 

>in server.js, add app.use(express.json) as we will be using json data imported from app client
>in server.js, add at the top const queryRoutes = require('./routes/queryRoutes') (whereby the routes has not been set up but we're using the query Routes for the app.use below.
>> app.use('/queries', queryRoutes); any request going to htpp:///localhost:5000/queries will have access to these routes.
>>>go ahead and create a routes.js file in backend/routes
>next set up the controller folder, with queryController.js

>In routes, instead of the (req res) function parameters,
//@desc GET all queries from db
//@route GET /api/queries
//@access Public
//router.get('/searches', (req,res) => {
    
//}) 
>Once we have the controllers set up we just import them into the routes file and then call as show as is in the searchRoutes.js


----__-_-----
Now moved to front end.

went and cleaned up all the folders on the left side. 

in App.js, we deleted return parenthesis and wrapped the entire page /app in between a div with className "app"

Created components folder with Backdrop and SideDrawer, and Screen folder with various screens.

npm installing some more necessary tools:
npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension

Imported {BrowserRouter as Router, Switch, Route} from 'react-router-dom' in app.js

See ScreenShot: Wrappped our app.js in <Switch> tags and now don't need div anymore.

rafce in each screen ; import CSS ; add main div with className of screen type


import {useState} from 'react' //everytime we click on the backdrop it should close the sidedrawer, sideToggle variable and show prop.
destructure the show prop in the argument for sideDrawer and backdrop.

then put into CSS:
transform: translateX(-100%); //pushes the side drawer to the left of the screen
transition: all 0.3s ease-out;

then if the show string is appended to the array sidedrawerclass (assigned as the className for sidedrawer) and then join so it is like: " x y z" as classname
