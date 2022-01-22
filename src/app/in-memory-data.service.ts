import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        "id": 11,
        "name": "Horne",
        "surname": "Bryan",
        "isGood": true,
        "voted": "PO",
        "description": "Tempor dolore officia aliqua adipisicing sit duis ipsum reprehenderit est ut anim irure aliqua veniam. Incididunt incididunt do eu incididunt irure consectetur sunt ut veniam proident commodo esse. Anim nulla quis qui dolor exercitation et exercitation consequat nulla mollit veniam commodo anim velit.\r\n",
        "age": 21,
        "birthDate": "1996-08-15"
      },
      {
        "id": 12,
        "name": "Mari",
        "surname": "West",
        "isGood": true,
        "voted": "PIS",
        "description": "Dolore consequat id incididunt officia consectetur id excepteur. Anim labore aliqua ut in ex incididunt. Adipisicing et ut irure nostrud sint nisi officia commodo commodo cupidatat. Enim occaecat sunt adipisicing officia ad ex. Ipsum aute nisi irure excepteur adipisicing minim officia elit laboris anim culpa ut nulla.\r\n",
        "age": 30,
        "birthDate": "2019-04-17"
      },
      {
        "id": 13,
        "name": "Jerry",
        "surname": "Cash",
        "isGood": true,
        "voted": "PIS",
        "description": "Aute mollit consequat culpa irure aute aliqua eu laboris. Exercitation voluptate cupidatat occaecat cillum. Tempor laboris ullamco veniam ipsum nostrud ea consequat esse. Excepteur aliqua occaecat labore commodo consequat officia. Non occaecat laboris sit ipsum consectetur. Labore adipisicing incididunt non dolor Lorem aliquip et. Ad Lorem tempor commodo magna anim irure.\r\n",
        "age": 37,
        "birthDate": "1991-04-06"
      },
      {
        "id": 14,
        "name": "Lourdes",
        "surname": "Bennett",
        "isGood": true,
        "voted": "PIS",
        "description": "Qui incididunt Lorem laboris ipsum culpa in officia deserunt eiusmod nulla. Excepteur proident exercitation dolore cillum fugiat aute in eiusmod reprehenderit nulla. Lorem amet id adipisicing velit irure officia ad qui.\r\n",
        "age": 24,
        "birthDate": "1992-05-08"
      },
      {
        "id": 15,
        "name": "Edwina",
        "surname": "Calderon",
        "isGood": false,
        "voted": "PIS",
        "description": "Nostrud dolore aute commodo cillum velit anim cupidatat irure aliquip laborum laboris nisi consequat. Et sint eu aliquip nulla voluptate non ea duis exercitation laboris. Ad anim officia enim nulla ullamco ex quis sunt voluptate. Do tempor dolore pariatur nulla. Consequat esse ut occaecat culpa nulla velit in occaecat. Aliqua et id pariatur dolor laboris est sint in minim est exercitation sunt veniam. Enim exercitation consectetur labore do.\r\n",
        "age": 26,
        "birthDate": "2021-11-21"
      },
      {
        "id": 16,
        "name": "Edith",
        "surname": "Burke",
        "isGood": false,
        "voted": "PIS",
        "description": "Aute fugiat esse ullamco elit. Anim cillum minim deserunt non ullamco aliquip duis consectetur labore sit Lorem. Cupidatat esse cillum ullamco nisi irure labore anim exercitation aliquip eu commodo nulla ut adipisicing. Sunt aliqua fugiat nostrud enim enim. Velit fugiat dolor Lorem ea incididunt anim fugiat occaecat in aute.\r\n",
        "age": 29,
        "birthDate": "2010-03-04"
      },
      {
        "id": 17,
        "name": "Richards",
        "surname": "Strong",
        "isGood": true,
        "voted": "PIS",
        "description": "Nulla Lorem sint ullamco veniam aliquip incididunt irure ipsum est. Cillum nulla enim culpa sint ut pariatur irure dolor. Enim fugiat non ipsum labore sit nisi ea mollit magna commodo.\r\n",
        "age": 29,
        "birthDate": "1993-10-18"
      },
      {
        "id": 18,
        "name": "Fields",
        "surname": "Buck",
        "isGood": true,
        "voted": "PIS",
        "description": "Sit esse fugiat voluptate sit elit ullamco tempor dolor enim cillum excepteur adipisicing eiusmod. Irure tempor laboris eiusmod sint. Sunt quis anim quis ea nulla id deserunt consectetur exercitation eu culpa in Lorem consectetur. Do velit incididunt sit consectetur laborum consequat adipisicing.\r\n",
        "age": 29,
        "birthDate": "1996-01-20"
      },
      {
        "id": 19,
        "name": "Diane",
        "surname": "Middleton",
        "isGood": false,
        "voted": "PIS",
        "description": "Incididunt sit cupidatat occaecat laborum eu incididunt ipsum occaecat deserunt qui ea est dolore id. Eiusmod minim amet magna fugiat elit sunt cillum. Dolor ullamco tempor nisi ut culpa in id consectetur sunt. Ex dolor culpa Lorem enim cillum duis eiusmod. Ex pariatur quis qui cupidatat sunt esse ipsum et enim.\r\n",
        "age": 35,
        "birthDate": "2002-03-14"
      },
      {
        "id": 20,
        "name": "Kenya",
        "surname": "Carr",
        "isGood": true,
        "voted": "PIS",
        "description": "Occaecat nulla aliqua exercitation ut laboris qui sint. Sint velit voluptate elit qui velit fugiat aute labore officia id esse. Deserunt amet consequat ea enim non exercitation.\r\n",
        "age": 20,
        "birthDate": "1997-05-22"
      }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
