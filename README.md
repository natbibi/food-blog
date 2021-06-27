# Project: Food Blog
## Description 
A food blog made in react. Connected to my [REST API](https://github.com/natbibi/my-rest-api) to fetch food post's data.

## Installation and Usage

Clone or download this repo:

To start client:   
    `npm install`   
    `npm run dev`  
The client will open on port 8080   

## Technologies  
- HTML, CSS, JavaScript  

### Dependencies: 

   - Client: axios, react, router-dom, react-router-dom, react-icons
   
### DevDependencies:
   
   - Client: babel 

## Process 
1. Create a front end in react with a previously made [react template](https://github.com/natbibi/react-template)
2. Add necessary pages, routes and add to navlink 
3. Using axios, fetch data from my [REST API](https://github.com/natbibi/my-rest-api) 

### TODOS
- [ ] add correct email address and activate formsubmit.io 
- [x] upload multiple images per post / UI in progress 🚧

## Bugs
- [x] unreponsive on mobile devices 
- [x] images not loading in production -> SOLVED changed from .png to .jpg, change casing to lower case and use relative path   
- [x] dynamic id routing not working since data is fetched in descending order -> SOLVED use .find and match.params  

## Changelog

### React-Client
1. Set up pages and components from my previously set up react template
2. Create a form component and render on Home page 
3. Add text, details and social icons
4. Fetch posts from api 

## Wins & Challenges
### Wins
- simple, clean, minimalist design   

### Challenges
- working with .png files  
