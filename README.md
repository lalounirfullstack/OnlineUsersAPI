# Angular-Online-Users-API
## General Information
Angular Application that interacts with an External API (peticiones.online.users) and makes request to create,
read, update delete users from the API and displays results in the Angular App. 

## External API  ✅
https://peticiones.online/users

This API offers the following Actions:
+ Get All Users : https://peticiones.online/api/users
  + Returns Array of Objects with all users data.
  + Provides Pagination - Used to render Users in multiple Pages.
+ Get User By ID: https://peticiones.online/api/users/IDUSUARIO
  + Returns users that matches provided ID
  + Error if user cannot be found.
+ Create New User: https://peticiones.online/api/users
  + Simulates the creation of a new User using a fictitious ID.
  + Returns the user that has been created.
+ Update User: https://peticiones.online/api/users/IDUSUARIO
  + Simulates the update of a user.
  + Returns user that has been updated.
  + Error if user does not exist.
+ Delete User: https://peticiones.online/api/users/IDUSUARIO
  + Simulates deletion of a User.
  + Returns info of the user that has been deleted.
  + Error if the user does not exist.

## CSS (Bootstrap/Bulma) ✅
+ Uses Bootstrap and Bulma as frameworks the CSS.
> Bootstrap:  
> Styles: "node_modules/bootstrap/dist/css/bootstrap.min.css"
> JS: "node_modules/bootstrap/dist/js/bootstrap.bundle.js"
> Bulma
> Styles: "node_modules/bulma/css/bulma.css"

## Library
+ SweetAlert2
  +   Used to  display Alerts when user is deleted/updated.

## Pages ✅
+ Home : Displays Full user List from API.
+ User-View - Displays User Details
+ c404 - Page Not Found

## Routes ✅
+ /Home - Load Users List.
+ /user/1 - User View by UserId.
+ /newuser - Form to create a user.
+ /updateuser/1 Form preloaded with user data to allow update on the User.

## Components ✅
+ Header - Logo  & Page Navigation
+ User-Form - Create/Update User Form
+ User-Card - User details card.

## Interface ✅
+  User Data from API is controlled by the Interface:
  + _id: string
  + id: number
  + first_name: string
  + last_name: string
  + username: string
  + email: string
  + image: string
  + password: string

## Services ✅
+ User Services that support the method to interacts with the data from the API such as:
  + getAll();
  + getByUserId();
  + insertUser();
  + updateUserById();
  + deleteUserById();
  + getByIdPromise();
+ User Filter: used to filtered Users when Search is used.
  +setSearchTerm()

## Form Validations ✅
+ All Fields are mandatory
+ Email correct format
+ Password correct format & Length

## Images ✅
+ View Details
+ Update
+ Delete
+ Home
+ Social Images (not functionally linked)
  + Facebook
  + LinkedIn
  + Instagram
  + Twitter
  + SnapChat

## Buttons ✅
> Page Home:
> View Details | Update | Delete
> Page: View User:
> Delete | Update | Back To Home
> Form:
> Send | Cancel
