import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import * as _moment from 'moment';

interface VotingListInterface {
    value: string;
}

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];
    dataSource = new MatTableDataSource<Hero>(this.heroes)
    heroForm: FormGroup;
    votingList: VotingListInterface[] = [
        {value: 'PIS'},
        {value: 'PO'}
    ];

    displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'birthDate', 'voted', 'isGood', 'description', 'delete'];
    
    constructor(private heroService: HeroService, private fb: FormBuilder, private cdr: ChangeDetectorRef) {
        this.heroForm = this.fb.group({
            name: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            age: ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.min(1), Validators.max(120)]],
            birthDate: ['', [Validators.required]],
            voted: ['', [Validators.required]],
            isGood: [false, Validators.required],
            description: ['', [Validators.maxLength(512)]]
        });

    }

    ngOnInit(): void {
        this.getHeroes();
    //    this.heroForm.get('birthDate')?.valueChanges.subscribe((value: Date) => {
    //         if(value){
    //             this.calculateAge(value);
    //         }
    //     })
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.dataSource.data = heroes);
    }

    // calculateAge(date: Date): void{
    //     let age = new Date(Date.now() - date.getTime());
    //     this.heroForm.get('age')?.patchValue(Math.abs(age.getUTCFullYear() - 1970))
    // }

    // add hero to hero list function
    add(form: FormGroup) {
        if (form.invalid) {
            form.markAllAsTouched();
        } else {
            const heroObj: Hero = {...form.getRawValue()};
            console.log(heroObj);
            heroObj.birthDate = _moment(form.getRawValue().birthDate).format('YYYY-MM-DD')
            this.heroService.addHero({...heroObj} as Hero).subscribe(() => {
                this.getHeroes();
                this.heroForm.reset();
                this.cdr.detectChanges();
            })
        }

    }

    // delete hero from table
    delete(hero: Hero): void {
        this.heroService.deleteHero(hero.id).subscribe(() => {
            this.getHeroes();
            this.cdr.detectChanges();
        });
    }

    // generate JSON file
    generateJson(): void{
        let uri = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(this.dataSource.data));
        const anchorElement = document.createElement('a');
        anchorElement.href = uri;
        anchorElement.download = 'heroes.json';
        anchorElement.click();
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
