# Hot-Restaurant--Node.js-Express.js

By:

Soheila Lotfi 

Overview:
Overall purpose is to help schedule reservation requests. 
Restaurant has just 5 tables available. 
First five requests get a reservation, every request after that is sent to the waiting list.



# Development Phases

## Initial Instructions

I built a Node / Express based web applications for handling reservation requests.

the application is made up of two parts: 
1) A front-end set of HTML/CSS/JS pages for entering and viewing data and 
2) A back-end composed of Node/Express and basic JS for storing, updating, and relaying reservation data.


---------------------

## Phase I 

* Create the front-end (visuals) for home page, reservation form, and reservation views.

* Create a basic server using Express.JS

* Create a set of routes for getting and posting table data

* Create a set of routes for displaying the HTML pages

* Use jQuery to run AJAX calls to GET and POST data from users to the Express server

---------------------


## Phase II 

Create a basic Express server.

"Listening at PORT 3000" when the command node server.js is run.
 

Create three HTML files one called home.html, another called tables.html, and another called reserve.html. 

---------------------


## Phase III - For this third phase, aim to complete the following

Create a set of variables (hint: arrays of objects) for holding the reservation and waitlist data

Create a set of routes that then display this data as JSONs. Users should be given these JSONs
if they visit the appropriate page (i.e. if a user visits localhost:3000/api/tables they should see a JSON of table data).

---------------------


## Phase IV 


Create the logic that handles reservation requests. 

Then create the necessary code on the tables.html page such that it can retrieve data from the  API (creating an AJAX GET request to retrieve the data).

Then create the necessary code on the reserve.html page such that it can send data to the  API (creating an AJAX POST request to send the data).


---------------------




