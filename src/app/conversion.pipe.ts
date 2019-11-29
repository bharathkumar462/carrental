import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {
   units = [ "", "One", "Two", "Three", "Four",
			"Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
			"Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
			"Eighteen", "Nineteen" ];

	tens = [ 
			"", 		
			"",		
			"Twenty",
			"Thirty", 	
			"Forty", 	
			"Fifty", 	
			"Sixty", 	
			"Seventy",	
			"Eighty", 	
			"Ninety" 	
  ];

	 convert(num:number) {
		if (num < 20) {
			return this.units[num];
		}

		if (num < 100) {
			return this.tens[Math.floor(num / 10)] + ((num % 10 != 0) ? " " : "") + this.units[num % 10];
		}

		if (num < 1000) {
			return this.units[Math.floor(num / 100)] + " Hundred" + ((num % 100 != 0) ? " " : "") + this.convert(num % 100);
		}

		if (num < 100000) {
			return this.convert(Math.floor(num / 1000)) + " Thousand" + ((num % 10000 != 0) ? " " : "") + this.convert(num % 1000);
		}
	}
  transform(value: any, ...args: any[]): any {
   
    return this.convert(value);
  }
    

}
