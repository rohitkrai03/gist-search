import { Component, OnInit } from '@angular/core';
import { GetUserService } from './get-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gist Search';

  constructor(private getuser: GetUserService,
    private router: Router) {
    }

  onUserSearch(user: string = null) {
    if (user != null) {
      console.log('Recieved user ' + user);
    } else {
      console.log('ERROR: username not recieved from search component' + user);
    }
    console.log('Sending user to get-user service');
    console.log('SUCCESS: sent user ' + user + ' to get-user service');
    this.getuser.getuser(user);
  }

  ngOnInit() {
    this.router.navigate(['']);
  }
}
/*
{
  {
    this.profileservice.getuserprofile(user).subscribe(profile => {
      this.profilerecord = profile;
      console.log(this.profilerecord);
    });

    this.reposervice.getuserrepo(user).subscribe(repo => {
      this.reporecord = repo;
      console.log(this.reporecord);
    });

    this.gistservice.getusergist(user).subscribe(gist => {
      this.gistrecord = gist;
      console.log(this.gistrecord);
    });
  }
} */
