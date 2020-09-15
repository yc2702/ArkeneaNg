import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userlist: any[] = [];

  constructor(private service: UserService, private router: Router) {
    this.getUserlist()
  }

  ngOnInit() {
  }

  getUserlist() {
    this.service.getUserList().subscribe(res => {


      console.log(res)

      this.userlist = JSON.parse(JSON.stringify(res)).data

    }, err => {
      console.log(err)
    })


  }

  createUser() {
    this.router.navigateByUrl('createuser')
  }


  deleteUser(id) {
    this.service.deleteUser(id).subscribe(res => {
      console.log(res)
      alert(JSON.parse(JSON.stringify(res)).msg)

      this.getUserlist()
    }, err => {

      console.log(err)
    })
  }


  editUser(id) {
    this.router.navigateByUrl('updateUser/' + id)
  }

}
