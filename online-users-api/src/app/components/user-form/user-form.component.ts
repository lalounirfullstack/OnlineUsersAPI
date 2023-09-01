import { Component, inject } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {UsersService} from "../../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;
  usersService = inject(UsersService)
  //Update Route
  activatedRoute = inject(ActivatedRoute)

  //Router - To route to Home
  router = inject(Router)

  constructor() {
    this.userForm = new FormGroup({
      first_name: new FormControl('', [
        Validators.required
      ]),
      last_name: new FormControl('', [
        Validators.required
      ]),
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        //At least 1: Upper Case, Lower Case, Digit, Special Character & Minimum 8 Character Length
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/)
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/)
      ])
    }, []);
  }

  /*Sweet Alert*/
  insertedUserMessage(){
    Swal.fire(
      ' ! Congrats !',
       'Usuario Insertado',
      'success');
  }

 updatedUserMessage(){
    Swal.fire(
      '! Congrats !',
      'Ussuario Actualizado',
      'success');
 }

  //Update User
  ngOnInit(){
    this.activatedRoute.params.subscribe(async(params: any) =>{
      let  id : string = (params.iduser);
      if(id){
        let response = await this.usersService.getbyIdPromise(id);

        this.userForm = new FormGroup({
          id: new FormControl(response.id,[]),
          first_name: new FormControl(response.first_name,[
            Validators.required
          ]),
          last_name: new FormControl(response.last_name,[
            Validators.required
          ]),
          username: new FormControl(response.username, [
            Validators.required
          ]),
          password: new FormControl(response.password, [
            Validators.required,
            //At least 1: Upper Case, Lower Case, Digit, Special Character & Minimum 8 Character Length
            Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
          ]),
          email: new FormControl(response.email,[
            Validators.required,
            Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/)
          ]),
          image: new FormControl(response.image, [
            Validators.required,
            Validators.pattern(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/)
          ]),
      },[]);

      }
    })
  }

  //Insert User
  async getDataForm(): Promise<void> {
    console.log(this.userForm.value);
    //Update
    if(this.userForm.value.id){
      //Update
      let response = await this.usersService.update(this.userForm.value)
      console.log(response);
      if(response){
        this.updatedUserMessage();
        //alert('User Updated');
          //Redirect to Home
        this.router.navigate(['/home']);
        } else{
          alert('Error ! Usuario No Actualizado');
        }
    } else{
      //To send to Service Inject Service
      //Get Response: Promise  from Service
      let response = await this.usersService.insert(this.userForm.value);
      //Response is an Object
      //If it has id it has inserted correctly
      if (response.id) {
        this.insertedUserMessage();
        //alert('User Inserted');
        this.userForm.reset();
        } else {
          alert('Error ! Usuario no Insertado trata de nuevo !');
        }
      }
      //Resets Form
      this.userForm.reset();
  }

  //Function to validate User Form Validation - Messages
  formValidator(formControlName:string, validator:string): boolean | undefined{
    return this.userForm.get(formControlName)?.hasError(validator) && this.userForm.get(formControlName)?.touched
  }


}

