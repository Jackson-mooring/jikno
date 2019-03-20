import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.sass']
})
export class NotFoundComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        typeWriter();
    }
}
        let i = 0;
function typeWriter() {

        const txt = 'The Page You are Looking for Cannot be Found On This Side Of The Plannet.';
        if (i < txt.length) {
        const speed = 50;
        document.getElementById('content').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
