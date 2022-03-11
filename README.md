# real time chat
Here you can find a javascript real time chat build with built on
- Express as MVC framework 
- MongoDB as Database
- Socket.io for messages broadcasting
Here you can see a video: [real_time_chat](https://drive.google.com/file/d/1f_4DP2ff7EJcdZ87ppwKrlkA5Y3o09BY/view?usp=sharing)

## 1) pre-configuration (initialise a DB collection to stock the messages)
1. Use your mongodb to create a new db (you can choose the name you want) 
2. Insert a new collection called 'messages'
3. You will have now the connection string (link) for the db connections: copy it somewhere, you will need it in the next steps

## 2) repo configuration
1. Copy the file named [.env-sample](.env-sample) (that you can find in the root of the repo) into a new file called .env (place this new file it into the root)
2. (optional) - Inside the .env file now created you can set the PORT for the local server (3rd line of the file: PORT=XXXX)
3. (optional) - Replace the "secretkeyword" inside the .env file with the secret word you prefer
4. Paste the connection string obtained at the end of your db configuration (step 1.3) at the line 8 after "MONGODB_URL="

## 3) installation
6. Install packages with `npm i`
7. Start the app in development mode with `npm run dev`
8. (or) Start the app in production mode with `npm start`


