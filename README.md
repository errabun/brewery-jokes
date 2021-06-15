# Brew n' Jokes

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [New Learning](#newlearning)
* [Author](#author)
* [Technologies](#technologies)

## Description

 - This project was a solo project assigned by [Turing School of Software and Design](www.turing.edu).  I was given 7 days to build an application that targeted a small niche audience based on a couple different made up personas and user stories.  I was a brewery manager in my past career and would often find that jokes are the best ice breakers when you bellying up to your local brew pub.  With that in mind, I thought it would be nice to have a resource that lets users find a breweries based on zip code and arm those users with a solid dad joke to use after selecting a brewery to visit.  

- Persona 1: [John Smith](https://docs.google.com/document/d/1af4IiB6spwmB7mprl8qW1BYcLe4TahmEGmvScPByprI/edit?usp=sharing)
- Persona 2: [Greg Jones](https://docs.google.com/document/d/1K2gL_rv3O_Bq9qW3Xi84UiW1mQ0PTCeqfh-oJbRI20I/edit?usp=sharing)

### Notable features

 - Built using React framework
 - Use of Router to enable user to navigate using back and forward browser controls.
 - Tested with Cypress acceptance testing including the use of stubbed fetch data and happy/sad paths
 - Utilized responsive design for mobile, tablet or desktop viewing
 - Ability for user to favorite different breweries and jokes
 - Utilized a modular file structure for easy file navigation

### Deploy Link

[Check it out!](https://brew-n-jokes.herokuapp.com/)

## Installation
1. Clone down this [repo](https://github.com/errabun/brewery-jokes)
2. CD into project directory
3. Run npm i to install all project dependencies
4. Run npm start to begin the server
5. Application should be shown in separate window once npm start is complete


## Walkthrough

- Visit the [homepage](https://brew-n-jokes.herokuapp.com/) where the user will be prompted to enter a zip code in which they'd like to find a list of breweries
- Once redirected, the user will be able to look over a list of breweries that are located in the zip you previously entered.  The user will then have the option to visit the breweries websites, get their address, or add to your list of favorites
- Once the user selects a brewery they are interested in visiting, they will be taken to another page where they will be prompted with a random 'dad joke'.  The user will be able to get another randomly fetched joke, add any of the jokes to a list of favorites, or select a joke they'd like to use. 
- Lastly, the user will get a recap of their selections including the brewery name, address, url and the joke they decided to try out on their next visit.  
- At any time, the user will be able to access their favorites list by clicking the link in the upper right hand corner.

Dashboard

<img src="https://media.giphy.com/media/bO4jLxSAKPeKeqNe8X/giphy.gif" width="400">

Breweries & Jokes

<img src='https://media.giphy.com/media/g4lxp3Y9yTbOAfgtW9/giphy.gif' width='400'>
                   
Recap & Favorites

<img src='https://media.giphy.com/media/wrD5n2aSXlEgoRKwbb/giphy.gif' width='400'>

Lighthouse Report 

![Lighthouse Report](https://user-images.githubusercontent.com/73191225/121983542-b99ab880-cd4e-11eb-80d6-36cfe712925b.png)

## New Learning

- React fundamentals
- Router
- Cypress Acceptance Testing
- Typechecking with PropTypes

### Learning Goals

- Demonstrate mastery of the technologies we have learned and been working with over the past 4 weeks including React, Router, Asynchronous JavaScript, and end to end testing with Cypress.
- Work within project constraints to deliver a product for a made up niche audience, which helps solve a problem unique to them. 
- Display data from several API's in a way that applies directly to the niche audience. 
- Ability for users to store/manipulate the data displayed in the application through favoriting of breweries and jokes
- Mulitple views handled by Router

### Project Progression

Given the short amount of time that was provided to complete this project, it was essential to define an achievable MVP.  The planning phase mainly consisted of figuring out what features were going to be highlighted and what could be considered 'nice-to-have'.  After designing some wireframes of how I envisioned the app to be displayed and how the user flow was going work, I noticed that I was going to need several different components for each of the different pages within the application.  I am happy with my understanding of all the different technologies that were required to be in the app, as once I had all the components in place, the whole thing came together nicely.

### Reflections

All in all, I am very pleased with how this application came to life.  It is very close to what I had in mind when I was in the planning stages, and did not come with too many problems or issues throughout the development.  A couple of minor issues that took up some time included adding a background image with very low opacity, prop drilling for some nested components, and some assertions within Cypress.  There are still a few features in which I am hoping to integrate in the near future including the utilization of the Google Maps API, so the user can get directions from wherever they are located to the closest brewery, or to any brewery of their choosing.  

## Author
<table>
    <tr>
        <td> Eric Rabun <a href="https://github.com/errabun">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/73191225?v=4" alt="E. Rabun" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
    <tr>
        <td>Framework</td>
        <td>Functionality</td>
        <td>Structure</td>
        <td>Styling</td>
    </tr>
    </tr>
        <td><img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="react" width="100" height="auto" /></td>
        <td><img src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="html" width="100" height="auto" /></td>
        <td><img src="https://www.pinclipart.com/picdir/middle/175-1759459_eng-a-med-kamel-frameworks-css-css-logo.png" alt="css" width="100" height="auto" /></td>
    </tr>
</table>
