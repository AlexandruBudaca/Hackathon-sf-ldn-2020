# CYF-CAPGEMINI
CYF x Capgemini  - See the Future (SF)


README.md


## Prerequisites

Node.js

MongoDB Atlas account

 
### To run the server (after cloning repo)
```bash
# Install dependencies for server
npm install

# Install dependencies for front end (inside 'react-front-end' folder)
npm install

# Run the Express server only
npm run server

# Run the React client (front-end) only
npm run server

# Run the client & server (full application)
npm run dev


# Server runs on http://localhost:5000 and client on http://localhost:3000
```


Hand over document - has the project brief, must haves, should haves, could haves for the back end and the front end requirement. 

Hackathon Project Challange - See The Future July 2020 challenge. 

Previous Hackathon 2019 version link https://modest-hamilton-265580.netlify.app/
  
Hackathon 2020 new revamped live version created on the 6th July 2020, ending 28th July 2020 
- Link  https://seethefuture-hackaton20.netlify.app/

- Wireframe design July 2020:
https://www.figma.com/file/ZkIgq9U6jvm8fQrULDN9eT/SYF-(See-the-Future)-Week3?node-id=0%3A1

Project Brief and Hackathon Challenge 
The project brief required the team to revamp the current website with a new set of requirements. The DaCoders project team created a graduate and a company user for the purpose of helping student access companies that had partnered with Code Your Future.  
Graduates would be able to register, sign in, and view the job listings and opportunities page. 
The Company would be able to register, sign in, allow the company to upload jobs and post it to the job listing and opportunities page, and able to view the job listed 
 
For the Hackathon, the DaCoders team delivered the following requirements set by Product owner Code Your Future for this challenge.


Future development

1
Home page with Navbar
Done


2
Graduate Registration
Done


3
Graduate Login
Done


4
Graduate to view Job Opportunities
Done


5
Company Registration
Done


6
Company Login
Done


7
Company ability to add Job Opportunities
Done


8
Make the website work all the way through. This means linking up the front end and back end.
Done


9
This includes the Sign In and Register Screens
Done


10
Redesign of the Home Page must match the wireframe
Done


11
Redesign the Opportunities Page to match the wireframe
Done


12
GitHub repo for new project
Done


13
Wireframe
Done


14
Project Presentation for the Tuesday 28th July 2020
Done


15
Client update arranged for Friday show and tell 6:30pm
Done


16
Company information - pictures, video, additional description
Done


17
Search Functionality for Job Opportunities
Next Sprint


18
Company information - pictures, video, additional description
Next Sprint


19
Search Functionality for Job Opportunities
Next Sprint


20
Student profile
Next Sprint


21
Ability to upload CV's
Next Sprint


22
Banner displaying recently posted opportunities
Next Sprint


Team structure and Tools used


Front-end Developers
Will be writing the front-end in HTML, CSS and ReactJS 
Back-end Developer
Will require writing the back-end using NodeJS, MongoDB, Postman
Product Designer Combination of a UX/UI designer 
Will require writing the wireframe using Figma 
Project Manager 
To oversee and manage the direction of the activities using Trello, Google Doc etc 

Brief description of work completed and referencing the wireframe: https://www.figma.com/file/ZkIgq9U6jvm8fQrULDN9eT/SYF-(See-the-Future)-Week3?node-id=0%3A1


Page1 - Homepage / Graduate Login Form
Description
Key requirement - FORM SECTION must work. 
Graduates must log in and go directly to the Job Opportunities page. 
See page 1, on the wireframe: https://www.figma.com/file/ZkIgq9U6jvm8fQrULDN9eT/SYF-(See-the-Future)-Week3?node-id=0%3A1

Graduate LOGIN form has 2 input fields 
	input field 1 - user will enter their email address  
	input field 2 - enter password
Button - Login Button - links users  to Job Opportunities for Graduates page (p.6).
If the details they enter (email address and password) are correct it will grant them access after they click on the button. It will check the details they enter against the database if it matches it will allow them to sign in if not it will show an error message
Registration Link - 
Link position under the button, takes user to Graduate registration (page 3)
Footer sections with static links text on the left and live Registration links on the right. 


Page 2 - Company Sign In Form page
Company sign FORM SECTION allows the user to sign in and links to the New Job Opportunities page on p.5 on the wireframe. 
The Header and Footer section are the same format as on the homepage.

Page 3 - Graduate Registration Form Page
Graduate registration FORM SECTION allows the user to enter contact details. Only the Submit button should work.

Wireframe has 3 buttons - 
-Submit Button - for posting graduate details 
-Next Button - to take them to Job Opportunities For Graduates page (p6, on the wireframe)
Header and Footer section are the same format as on the homepage

Page 4 - Company Registration Form Page
Company registration FORM SECTION allows the user to enter contact details. Only the Submit button should work.

It has 3 buttons - 
-Edit Button - for editing the text if entered incorrectly
-Submit Button - for posting company details 
-Next Button - to take them to Enter Job Opportunities page (p5, on the wireframe)
Header and Footer section are the same format as on the homepage

Page 5 - Enter Job Opportunities Form page - (Job spec entered by Company)
Company enters all the job roles and job specifications in the FORM SECTION. Only the Submit button should work.

It has 3 buttons - 
-Edit Button - for editing the text if entered incorrectly
-Submit Button - for posting graduate details 
-Next Button - the job details are posted and listed on the Job Opportunities For Graduates page (p6, on the wireframe)
Header and Footer section are the same format as on the homepage

Page 6 - Job Opportunities for Graduates to view jobs
Job Opportunities for Graduates list jobs by companies who would like to employ CYF students who have graduated. 
1. Filter and Search section - allows the user to select job role, work hours, location - not a requirement
2. Job Listing section - show 3 job listings on the page from companies who have available opportunities that the graduate can apply for. Must Requirement
Header and Footer section are the same format as on the homepage

Wireframe link
https://www.figma.com/file/ZkIgq9U6jvm8fQrULDN9eT/SYF-(See-the-Future)-Week3?node-id=0%3A1

 