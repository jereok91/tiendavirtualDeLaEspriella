import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

 
  constructor(private router: Router,  
    private activatedRoute: ActivatedRoute,  
    private titleService: Title)
  {
  
  }
  public page404=true;

  ngOnInit()
  {
    this.router.events.pipe(  
      filter(event => event instanceof NavigationEnd),  
    ).subscribe(() => {  
      const rt = this.getChild(this.activatedRoute);  
      rt.data.subscribe(data => {  
        this.page404= this.revisarPage404(data.title);
        this.titleService.setTitle(data.title)});  
    }); 
  }
  getChild(activatedRoute: ActivatedRoute) {  
    if (activatedRoute.firstChild) {  
      return this.getChild(activatedRoute.firstChild);  
    } else {  
      return activatedRoute;  
    }  
  
  }

  revisarPage404 (title: String ){

    if (title == "404 Pagina"|| title == "Contactenos" ) {
      return true
    }else{
      return false
    }
     
  }




}
