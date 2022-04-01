# code-assignment
 - To run the code on the VS-Code using npm(if any packages needs to install). Though all the packages are installed.
 
# To re-check please install
 - npm install node-fetch, npm install xhr2, npm install, npm install fs, npm install form-data
 - Also, we can check the package.json file for the packages installed.
 
 # Please follow below instructions
 - "node list-get.js" to GET the data from the API and in the terminal/console it will give the payload.
 - "node add-post.js" will add the data mentioned inside the code to the API. Please change the data inside the code to see the changes in the API.
 - "node delete.js" to delete the data from the API. As of now I'm getting "Authentication Missing Token" error.
 - "node update-put.js" to append the data to the API.  As of now I'm getting "Authentication Missing Token" error.

# SUMMARY
 - Passing the API url to "GET","POST","PUT" and "DELETE" calling methods. For the "PUT" and "POST" I added random data to the API whereas in "PUT" I tried to append the data as I need to update the existing data in the API.
 - The idea is to create different files for different purposes. Just to make the code more modular. If anyone wants to add or change the code then the other processes will not get affected.
 - Also checks the images attached.

# FUTRUE IMPROVEMENTS

 - 1. I can add authentication.
 - 2. I can make one method which will call all the other defined processes in different files for the different functions like "GET", "POST" and others.
 - 3. More refinement in the code in the terms of calling the functions. For e.g., GET/device1/ID, POST/device10/ID to make it more efficient. 
 - 4. Can add .gitignore file as well to avoid unwanted hidden files.
