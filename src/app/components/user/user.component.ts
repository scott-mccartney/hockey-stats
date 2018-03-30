import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
      this.setUsername(this.route.snapshot.params.username);
    }

    setUsername(id: string): void {
      this.username = id;
    }
}
