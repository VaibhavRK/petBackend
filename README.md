I have made this Pet Backend on the based on given requirements.

I have used expressjs, mongoose, mongodb atlas, multer, dotenv, xlsx, nodejs to build this backend.

I have deployed this backend on heroku and you can use this link to get the pet data - 

https://pet-app-fastjob.herokuapp.com/api/pet

Now you can also post the excel file on the link using post method - 

https://pet-app-fastjob.herokuapp.com/api/pet


Now you can also get the specific pet data on the link using get method - 

https://pet-app-fastjob.herokuapp.com/api/pet/<petId>


Now you can also update data by using the link and using patch method - 

https://pet-app-fastjob.herokuapp.com/api/pet/<petId>


Now you can also delete data by using the link using delete method - 

https://pet-app-fastjob.herokuapp.com/api/pet/<petId>

I have used mongoose to connect with mongodb atlas and by using the express router i created all the required routes. And also i have created the controller file in which all request response function is going to handle.
After that i have import this router file to the app.js and use it as middleware.

For uploading excel files i have used multer for this. It takes the file and will save in the upload folder and convert the excel data into the json data and then i saved that json data in mongodb atlas.
