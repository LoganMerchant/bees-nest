
[![License Badge](https://img.shields.io/badge/License-MIT_License-blueviolet.svg)](https://shields.io/)

# Beez-Nest


## Description
Beez-Nest is a CLI content management system for an employer looking to manage their roster of employees. With version 1.0 of this application, an employer can do the following:
* View all departments, roles, or employees.
* Add a department, role, or employee.
* Update an employee's role within the company.


## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Licenses](#licenses)
  * [Questions](#questions)


## Installation
To install this application, you will need to clone this repository to your local machine with `git clone https://github.com/LoganMerchant/bees-nest.git`. Once that is done, run `npm install` in the newly-cloned application and it should be ready to go.


## Usage
** [Node.js](https://nodejs.org/en/) is required for this application **
<br>
<br>
To use this project, type `npm start` or `node index.js` from your command line. Once the application is up-and-running, look through the list of possible actions you can take, select one, and answer any following prompts. Once you are finished with the application, navigate down to `Quit the application.` to exit.
<br>
You can find a video walkthrough [here](https://drive.google.com/file/d/1BUj8PRpM8Bp6cjNHlp6EO1wfotdwbPei/view?usp=sharing).


## How to Contribute
Future contributions are plentiful. To start, how `initalize()` is called needs to be updated in `prompts.js` to not rely on a timeout. Due to the nature of inquirer, it would execute prompts before a query could be made, which would result in a very ugly console. 
<br> 
Beyond that, future contributions should expand the list of potential options for an employer to take. An example of an expanded option could include deleting a department, role, or employee.


## Licenses
This project is registered with the following license(s), to find out more visit [Choose a License](https://choosealicense.com/licenses):
* MIT License

## Questions
Check me out on [GitHub](https://www.github.com/loganmerchant). 
<br>
<br>
If you have any further questions, please reach out here: merchantclogan@gmail.com
  
