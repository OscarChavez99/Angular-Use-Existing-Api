# AngularUseExistingApi

This project demonstrates how to call an existing API from the internet, which is stored at the following URL:

https://jsonplaceholder.typicode.com/todos/

![image](https://github.com/user-attachments/assets/030c3ba5-fcd4-4871-a2b3-fa382ebb5c1f)

You can retrieve information about a specific user by adding the user ID to the URL:

![image](https://github.com/user-attachments/assets/1c239bc4-c98a-4b4f-9674-a8b168af4507)

## How it works

We enter the user **ID** we want to retrieve in the input field and then press the button

![image](https://github.com/user-attachments/assets/dd0fb321-ae28-4c5f-9294-f1260e477118)

As we can see, the information is displayed in the mat-cards.

![image](https://github.com/user-attachments/assets/b62641fb-a8f5-4b59-9844-b5b3b78d818e)

This is possible because our form has an input called "searchID"

![image](https://github.com/user-attachments/assets/35478c7f-cfbd-4a11-91e4-cc97b229b05f)

When the button is pressed, we call the **getUser** method:

![image](https://github.com/user-attachments/assets/b7a47f51-6b02-4887-a148-73a79678e9c7)

The method retrieves the value from the input and passes it to the URL that calls the API

![image](https://github.com/user-attachments/assets/c2989a7f-6fb1-4d38-8ec9-bb4715dbffc0)

Then, we fetch the information from the API and display it in the HTML:

![image](https://github.com/user-attachments/assets/c6bf36c8-e9ee-4d19-aeb6-d49ea502c26d)

![image](https://github.com/user-attachments/assets/4007df99-fb39-4676-a117-7cb2650e7b31)
