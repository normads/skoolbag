import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../../services/schools.service'

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {

    school = {
        name: 'School Name',
        address: {
            street: 'Street',
            suburb: 'Suburb',
            postcode: 'Postcode',
            state: 'State'
        },
        students: 0
    }

    constructor(private schools: SchoolsService) { }

    saveSchool() {
        this.schools.addSchool(this.school).subscribe((data) => {
            console.log(data);
        });
    }

    ngOnInit() {

    }

}
