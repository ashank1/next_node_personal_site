//Requires
//Custom functions
const { getSteamLinks, updateStatus, getUsers } = require('./dataFunctions.js')
const { scrapeSteamStatus, scrapeYoutube } = require('./scrapeFunctions.js')

//Node.js requires
const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const app = express();
const port = 3002;

//App Variables

//Routes

//Connect to DB
//All mongo related actions have to take place here
//Creates an object array for each user on the system
mongoose.connect('mongodb://127.0.0.1:27017/test');
mongoose.connection.on('connected', async () => {
  //On succeful connection
  console.log("connected")
  let steamInfo = []; let steamLinks = [];
  //starts process every minute to updat data on database
  cron.schedule('* * * * *', async () => { 
  //gets all user ids
  let users = await getUsers();
  //gets steam links for all users       gets link item from Steam Link request by users Id from users array. link item value at 0 is transfered to steam links array
  for(let i = 0; i < users.length; i++) { let linksItem = await getSteamLinks(users[i].uId); steamLinks[i] = linksItem[0] }
  //gets steam data for all users        from Steam link, scrapes website then returns values as object to steamInfo object array
  for (let i = 0; i < steamLinks.length; i++) { let infoItem = await scrapeSteamStatus(steamLinks[i].link); steamInfo.push(infoItem) }
  //combines users back to linked data from services
  for (let i = 0; i < users.length; i++) { Object.assign(users[i], values = {steam: steamInfo[i]}); }
  //updates the status
  for (let i = 0; i < users.length; i++){ updateStatus(users[i]);}
  })//Chron task ends here
})


let data = '<h1>Nothing to display</h1>';

//App paths
app.use(require('./routes'))
app.get('/', (req, res) => { res.send(data); });
app.listen(port, () => { console.log(`Server is running on port ${port}`); });