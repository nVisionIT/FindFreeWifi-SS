import {Component, NgFor, bootstrap} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
@Component({
    selector: 'my-app',
	viewProviders: [HTTP_PROVIDERS],
    templateUrl: 'Cities.html',
	directives: [NgFor]
})

class PeopleComponent {
	
hrequest: Http;
result: Object;
location: Object;

  constructor(http: Http) {
  
    http.get('http://www.findfreewifi.co.za/publicjson/getcities')
      // Call map on the response observable to get the parsed people object
      //.map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
	  .map(res => res.json())
      .subscribe(cities => this.result = cities.data);
		 
	  
  }
  
  displayNearBy(obj: Object) {
        debugger;
        var link = 'http://www.findfreewifi.co.za/publicjson/Locations?cityName=' + obj.Name;
        this.hrequest.get(link).subscribe(res => {
            this.location = res.json().data;
        }); 

    }

}
bootstrap(PeopleComponent);