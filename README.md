# Full-Stack Development
> Crash-course JavaScript, HTML, and CSS 

## Objective
* This course will teach you the fundamentals of Web Technology
  * HTML, CSS, JavaScript (and even some Python)
  * the difference between client and server-side code   
  * how to build a web server
  * how to communicate between clients and servers using HTTP calls 
  * and other fun things like git (version control) and APIs
* By the end of the course, you'll have built a full-stack Todo-List app

## Instructions
* Each folder includes starter code for the project
* Once you finish one assignment, PM me on UC-One and I'll review it 
* I'll be updating this repository incrementally

## Assignment 1.5
With your newly built frontend webpage (HTML and CSS), it's time to build the backend server. The backend server will store the todos, which will be displayed once the user loads the webpage. 

To do this, we'll use a JavaScript framework called express. Express runs on Node.js, a tool that allows you to write JavaScript outside of the web browser. (To try this out, open up the integrated terminal in VS Code (or any terminal), and type `node`. Now you're in a JavaScript environment (type `6 + 6`). This is similar to opening up the Chrome browser console and typing in JavaScript code). 

The API (application programming interface, basically the instructions for how to do specific actions) for express requires decent knowledge of JavaScript. So for this assignment, I've assigned some tutorials to get you more familiar with JavaScript. 

![Screen Shot 2018-05-21 at 11.47.29 AM](https://i.imgur.com/fxmxDal.png)

#### Necessary 
1. For Node.js: https://glitch.com/~node-beginner (Make a remix).

Read each lesson and write the code from scratch (I'd erase the .js files they give you, and start coding fresh). Take a picture of the final project's code and upload it to the 1.5 folder.

#### Optional
1. If the top tutorial is a little complicated: https://glitch.com/~javascripting (Make a remix)
2. There are more tutorials at: https://glitch.com/learn-to-code 



## Assignment 1
You're job will be to create the front-end of the Todo-List app. The front-end of a web application is what the user sees. For instance, when you go to YouTube.com, what you, the user, see is the front-end. When you click on a video, the front-end will make a request to the backend for the video data to display to the user.  

![YouTube](http://1.bp.blogspot.com/-alWzGL6_b_U/UsRTthrNNiI/AAAAAAAAMps/wjvmyo0BdTA/s1600/Old+YouTube+homepage.png)

The Todo-List front end will have several requirements.
1. It must have an `h1` tag, which will display the title of the app: (Call it what you want)
2. It must have a list of elements. The html tags you will use are `ul` and `li`.
3. You must include an input field for a user to add a to-do
4. You must include a button to add a to-do
4. It must have an image. The image doesn't have anything to do with functionality. It's just good knowledge to know how to display an image.
5. You must designate some styles in main.css, that will link in index.html. Learning how to use relative links and paths is very useful. 
6. You must use the Bulma CSS framework. Read this getting started page in bulma's documentation for how to use the Bulma CDN https://bulma.io/documentation/overview/start/. A hint of what you'll have to do, is link the CSS file in the `head` tags of the index.html page.

An example of what the to-do list can look like is displayed below: 

<img src="https://i.imgur.com/5xKSfzd.png" width="300">

### Tips
1. I'd advise you to code everything on https://www.codepen.io, and then export it from there. If you have trouble copying your codepen project into this repository, just message me.

