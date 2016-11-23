import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h3>{{title}}</h3>
            <input [(ngModel)]="input" (ngModelChange)='cal()' placeholer='6+6'><br>
            <label><span style='color:green;' >Result:</span>{{res}}</label> <br>
            <button (click)='cal()' >OK</button>
  `
})
export class AppComponent { 
    title = 'Simple Calculator';
    input = ''
    res = 0;

    cal() {
        try{
            this.res = eval(this.input);
        }
        catch(ex){
            try{
                this.res = 0;
            }
            catch(ex2){
                
            }
            
        }
    }
}
