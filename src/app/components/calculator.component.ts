import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'calculator',
    templateUrl: './calculator.component.html',
})
export class CalculatorComponent  { 
    device: string;
    inputValue: number;

    
    
    constructor(){
        this.device = 'calculator';
        this.inputValue = 4000;
    }
 }
