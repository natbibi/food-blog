# Project: Food Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/6a27d0fa-401c-418b-9287-3c99a94a2854/deploy-status)](https://app.netlify.com/sites/stesfood/deploys)
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

   - Client: bootstrap, react, react-bootstrap, router-dom, react-router-dom, react-icons, styled-components
   
### DevDependencies:
   
   - Client: babel, webpack, axios, testing-library, jest, loaders, sass, 

## Process 
1. Create a front end in react with a previously made [react template](https://github.com/natbibi/react-template)
2. Add necessary pages, routes and add to navlink 
3. Using axios, fetch data from my [REST API](https://github.com/natbibi/my-rest-api) 

### TODOS
- [x] add correct email address and activate formsubmit.io 
- [x] upload multiple images per post / UI in progress 🚧
- [ ] add [search filter](https://www.django-rest-framework.org/api-guide/filtering/#djangofilterbackend) option
- [ ] add options to switch between gallery view and list view
- [x] render 'eatin' when posts have been added - match style of 'eatout'
- [ ] improve mobile burger nav UX - closing nav bar on click of link
- [ ] improve load speeds - currently images take long to load, esp on mobile devices

## Bugs
- [x] unreponsive on mobile devices 
- [x] images not loading in production -> SOLVED changed from .png to .jpg, change casing to lower case and use relative path   
- [x] dynamic id routing not working since data is fetched in descending order -> SOLVED use .find and match.params 
- [x] nav bar background blocking text in mobile 
- [x] favicon not displaying in dev or production -> link to url instead (https://i.ibb.co/tYjPmCW/stemoji.png)

## Changelog

### React-Client
1. Set up pages and components from my previously set up react template
2. Create a form component and render on Home page 
3. Add text, details and social icons
4. Fetch posts from api 
5. Add styling top improve UI and new features to improve UX
5. Add test suite

## Wins & Challenges
### Wins
- simple, clean, minimalist design   

### Challenges
- working with .png files  
- react testing library config
