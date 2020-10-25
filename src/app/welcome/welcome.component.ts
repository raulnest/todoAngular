import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
  message = 'Some Welcome Message';
  welcomeMessageFromService: string;
  //ActivatedRoute
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['name']);

    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    //console.log('Get Welcome Message');
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log('Last line of Get Welcome Message');
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

    console.log('Last line of Get Welcome Message');
  }

  handleSuccessfulResponse(response) {
    console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }

}
