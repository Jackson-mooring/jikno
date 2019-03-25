import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit {
    public typing = '';
    public txt = 'The page you are looking for cannot be found on this side of the Plannet.';
    public speed = 80;
    public count = 0;

    constructor() { }

    ngOnInit() {
        this.typeWriter();
    }

    public typeWriter() {
        const typeIt = setInterval( () => {
            if (this.typing.length >= this.txt.length) clearInterval(typeIt);
            this.typing += this.txt.charAt(this.count);
            this.count++;
        }, this.speed)
    }
}  
