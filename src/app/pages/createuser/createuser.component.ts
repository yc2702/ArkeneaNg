import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  private UsesrForm: FormGroup;
  userData = [];
  File_Data;
  isSubmited: boolean = false
  constructor(private fb: FormBuilder, private service: UserService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe(params => {

      if (params) {

        this.getUser(params)
      }
      console.log(params)
    });

    this.createUserForm()
  }

  ngOnInit() {
  }

  createUserForm() {
    this.UsesrForm = this.fb.group({
      _id: [],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.compose([Validators.email, Validators.required])],
      PhoneNumber: ['', Validators.required],
      ProfileImage: ['', Validators.required],
      File: []
    });
  }



  submitForm() {
    this.isSubmited = true;

    if (this.UsesrForm.valid) {
      if (this.UsesrForm.value._id) {
        this.service.updateUser(this.UsesrForm.value).subscribe(res => {

          alert('User Updated')
          this.router.navigateByUrl('')
        }, err => {

          console.log(err)
        })
      } else {
        this.service.createUser(this.UsesrForm.value).subscribe(res => {
          console.log(res);

          alert('User Created')

        }, err => {

          console.log(err)
        })
      }
    }
  }


  getUser(id) {
    this.service.getUserDetail(id.id).subscribe(res => {
      console.log(res)

      this.userData = JSON.parse(JSON.stringify(res)).data


    }, err => {
      console.log(err)


    }
    )
  }

  onFileChange(event) {

    let File = event.target.files[0]
    this.ConvertToBase64(File);

  }

  ConvertToBase64(File) {

    let reader = new FileReader();
    reader.readAsDataURL(File);


    reader.onload = () => {
      this.File_Data = reader.result.toString().split(',')[1];

      this.UsesrForm.value.File = this.File_Data

    }
  }
}
