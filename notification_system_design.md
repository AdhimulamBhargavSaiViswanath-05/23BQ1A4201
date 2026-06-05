Real Time Notification Center: 
Aim: Our main aim is to perform a real time notification system service
Steps:
 1. Firstly we have to create a notifications database: but the respective team have already given an api route: which is protected with authorization token which initially we have to authenticate it. 
 2. so: basically we will have to create a react project that helps you to get the notifications easier when we call that particular url. 
 3. I have chosen the project stack as: reactJs + TypeScript 
 4. Next I have updated the localhost port number from default 5173 to 3000. 
 5. Now, according to our main project we ahve to perform the basic ui and should call the authenticated notificaions into the ui which is i already having that token. 
 5. Here the authtenticatoin tokens are very limited that we access them with only few seconds to minutes and then they were expired too. so please make a note that you should have to add newly fresh authentication token. 
 6. but before goign to start yuo first reigster for the given portnumber: usign the url in the postman: https://4.224.186.213/evaluation-service/register & then after: youmust be authetnciated: so that toekn is created. 
 for teh registtaion it will asks the smaple data as: 
 {
  "email": "your_email@vvit.net",
  "name": "Your Full Name",
  "mobileNo": "9999999999",
  "githubUsername": "your-github-handle",
  "rollNo": "your_college_roll_number",
  "accessCode": "xgAsNC"
}
so that you can get the that registerd successfuly. and then after: you shoub be authenticaiotned wiht the client id and client secrert whihc are come from teh reigstionta repsonese. 

7. so this si abotu the registiton and the autnteicaion proess & tokne genration. 
8. in theporjct i have mainlu used teh very biac syntx: to show. so that it comes to match iwth given the task. 
9. 