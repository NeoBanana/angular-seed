import { InMemoryDbService } from 'angular-in-memory-web-api';
/**
 * This is an example of a Hero-oriented InMemoryDbService.
 *
 * For demonstration purposes, it can return the database
 * synchronously as an object (default),
 * as an observable, or as a promise.
 *
 * Add the following line to `AppModule.imports`
 *   InMemoryWebApiModule.forRoot(HeroInMemDataService) // or HeroInMemDataOverrideService
 */
import { Injectable } from '@angular/core';

// tslint:disable:no-unused-variable
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
// tslint:enable:no-unused-variable
@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const participants = [
      {
        id: 1,
        region: 'lubuskie',
        city: 'lubsko',
        school_id: 1,
        school_type: 'liceum',
        school_name: 'ZSOiE'
      },
      {
        id: 2,
        region: 'lubuskie',
        city: 'lubsko',
        school_id: 2,
        school_type: 'liceum',
        school_name: 'liceum ogolnoksztalczace'
      }
    ];
    // classes: [
    //   {
    //     class: "4i",
    //     language: "Angielski",
    //     guardian: "Putin"
    //   },
    //   {
    //     class: "3i",
    //     language: "Angielski",
    //     guardian: "Putin"
    //   }
    // ]
    const editions = [
      {
        id: 1,
        nazwa: 'EDYCJA XIX',
        participants: [participants[0]]
      },
      {
        id: 2,
        nazwa: 'EDYCJA XX',
        participants: [participants[1]]
      },
      {
        id: 3,
        nazwa: 'EDYCJA XXI',
        participants: participants
      },
      {
        id: 4,
        nazwa: 'EDYCJA XXII',
        participants: participants
      }
    ];

    const sponsors = [
      {
        id: 1,
        name: 'Polskie Towarzystwo Matematyczne',
        href: 'http://www.ptm.org.pl/',
        src: 'http://www.mbg.uz.zgora.pl/ptm-logo-150.png'
      },
      {
        id: 2,
        name: 'Matematyka Bez Granic',
        href: 'http://www.mbg.uz.zgora.pl',
        src: 'http://www.mbg.uz.zgora.pl/logo.php'
      },
      {
        id: 3,
        name: 'Polskie Towarzystwo Matematyczne',
        href: 'http://www.ptm.org.pl/',
        src:
          'https://hdwallsource.com/img/2014/7/large-40566-41516-hd-wallpapers.jpg'
      },
      {
        id: 4,
        name: 'Polskie Towarzystwo Matematyczne',
        href: 'http://www.ptm.org.pl/',
        src: 'http://www.mbg.uz.zgora.pl/ptm-logo-150.png'
      },
      {
        id: 5,
        name: 'Polskie Towarzystwo Matematyczne',
        href: 'http://www.ptm.org.pl/',
        src: 'http://www.mbg.uz.zgora.pl/ptm-logo-150.png'
      }
    ];
    const committees = [
      {
        region: 'Krajowy Komitet Organizacyjny',
        address: {
          name: 'WMIE Uniwersytet Zielonogorski',
          street: 'ul.Szafrana 4a',
          postcode: '65-516',
          city: 'Zielona Gora'
        },
        moderator: {
          title: 'dr',
          firstname: 'Krystyna',
          surname: 'Białek',
          email: 'mbg@wmie.uz.zgora.pl',
          tel: '',
          fax: '',
          www: ''
        }
      },
      {
        region: 'region dolnośląsko-opolski',
        address: {
          name: 'Fundacja Matematyków Wrocławskich',
          street: 'pl. Grunwaldzki 2/4',
          postcode: '50-384',
          city: 'Wroclaw'
        },
        moderator: {
          title: 'mgr',
          firstname: 'Małgorzata',
          surname: 'Mikołajczyk',
          email: 'mikolaj@math.uni.wroc.pl',
          tel: '071 336 10 85',
          fax: '',
          www: 'www.fmw.uni.wroc.pl/'
        }
      },
      {
        region: 'region dolnośląsko-opolski',
        address: {
          name: 'Fundacja Matematyków Wrocławskich',
          street: 'pl. Grunwaldzki 2/4',
          postcode: '50-384',
          city: 'Wroclaw'
        },
        moderator: {
          title: 'mgr',
          firstname: 'Małgorzata',
          surname: 'Mikołajczyk',
          email: 'mikolaj@math.uni.wroc.pl',
          tel: '071 336 10 85',
          fax: '',
          www: 'www.fmw.uni.wroc.pl/'
        }
      },
      {
        region: 'region dolnośląsko-opolski',
        address: {
          name: 'Fundacja Matematyków Wrocławskich',
          street: 'pl. Grunwaldzki 2/4',
          postcode: '50-384',
          city: 'Wroclaw'
        },
        moderator: {
          title: 'mgr',
          firstname: 'Małgorzata',
          surname: 'Mikołajczyk',
          email: 'mikolaj@math.uni.wroc.pl',
          tel: '071 336 10 85',
          fax: '',
          www: 'www.fmw.uni.wroc.pl/'
        }
      },
      {
        region: 'region dolnośląsko-opolski',
        address: {
          name: 'Fundacja Matematyków Wrocławskich',
          street: 'pl. Grunwaldzki 2/4',
          postcode: '50-384',
          city: 'Wroclaw'
        },
        moderator: {
          title: 'mgr',
          firstname: 'Małgorzata',
          surname: 'Mikołajczyk',
          email: 'mikolaj@math.uni.wroc.pl',
          tel: '071 336 10 85',
          fax: '',
          www: 'www.fmw.uni.wroc.pl/'
        }
      }
    ];

    const db = { editions, sponsors, committees };

    return db;
  }
}
