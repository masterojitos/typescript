import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { User, UserResponse, Password } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string;
  subtitle: string;
  loading = false;
  email: string;
  form: FormGroup;
  user: User;
  bestSkill: string;
  totalPoints: number;
  userDepartment: string;

  constructor(private fb: FormBuilder) {
    // * let & const
    let newTitle: string;
    newTitle = 'TypeScript';
    const version = '3.9';

    // * Template String
    this.title = `${newTitle} ${version}`;

    // * Utility Type
    // const userResponse: Readonly<UserResponse> = {
    const userResponse: UserResponse = {
      name1: 'Ricardo',
      name2: 'García',
    };
    // userResponse.name1 = 'Ricky';
    const user = new User(userResponse);
    this.setSubtitle(user, 'Angular', '');

    this.form = this.fb.group({
      username: '',
    });
  }

  // * Data Types
  dataTypes(): void {
    const name: string = 'Ricardo';

    const year: number = 2020;

    const bool: boolean = true;

    const today: Date = new Date();

    const list: number[] = [1, 2, 3];
    const list2: Array<number> = [1, 2, 3];

    let notSure: any = 20;
    notSure = 'maybe a string instead';
    notSure = bool;

    let listTuple: [string, number, boolean] = ['1', 2, true];
    const listAny: any[] = ['1', 2, false];
    listAny[1] = '2';

    enum Color {
      Red = 1,
      Green,
      Blue,
    }
    const color: Color = Color.Green;
  }

  // * Functions and Parameters
  setSubtitle(user: User, course: string = 'TypeScript', version?: string) {
    this.user = user;
    // * Null Coalescing
    version = version ?? '0';
    this.subtitle = `Bienvenido ${this.user.firstname}, al curso de ${course} ${version}`;
    // * Decorator
    // this.subtitle = `Bienvenido ${user.firstname}
    //   de ${user.getProfile().community},
    //   al curso de ${course} ${version}`;
    if (this.user.password) {
      const password =
        typeof this.user.password === 'string'
          ? this.user.password
          : (this.user.password as Password).password;
      this.subtitle += '<br>Su nueva contraseña es: ' + password;
    }
  }

  async onSubmit() {
    this.loading = true;
    this.email = null;
    // * Try / Catch / Finally
    try {
      const { username } = this.form.value;
      // * Async / Await
      this.email = await this.searchEmail(username);
    } catch (error) {
      this.email = 'No encontrado';
    } finally {
      this.loading = false;
    }
  }

  searchEmail(username: string): Promise<string> {
    // * Promises
    return new Promise((resolve, reject) => {
      // * Arrow Functions
      setTimeout(() => {
        if (username.length > 3) {
          resolve(username + '@everis.com');
        } else {
          reject();
        }
      }, 1000);
    });
  }

  // * Rest Parameters
  updateUser(...args: string[]) {
    const userResponse = {
      name1: args[0],
      name2: args[1],
    };
    this.user.update(userResponse);

    // * Optional Chaining
    this.userDepartment = this.user.ubigeo?.department;

    this.setSubtitle(this.user, 'Angular', '8');
  }

  newUser() {
    // * Type Assertion
    let userResponse = {
      name1: 'Andres',
    } as UserResponse;

    // * for...of
    const skills = [
      'Angular',
      'React',
      'Ionic',
      'React Native',
      'Node.js',
      'MongoDB',
      'Firebase',
      'Git',
      'Scrum',
      'UX',
    ];

    // * for...of
    const newSkills = [];
    for (const skill of skills) {
      // * padStart
      newSkills.push(`${skill} (${String(skill.length).padStart(2, '0')})`);
    }

    // * map
    // const newSkills = skills.map(
    //   skill => `${skill} (${String(skill.length).padStart(2, '0')})`,
    // );

    // * findIndex
    // this.bestSkill = skills[skills.findIndex(skill => skill.length > 8)];

    // * find
    this.bestSkill = skills.find(skill => skill.length > 8);

    // * includes
    this.bestSkill +=
      ' ' + (this.bestSkill.includes('Angular') ? 'yes!' : 'pff!');

    // * reduce
    this.totalPoints = skills.reduce((total, skill) => total + skill.length, 0);

    // * Spread Operator
    userResponse = {
      ...userResponse,
      password: 'abc',
      skills: newSkills.join(', '),
    };
    const user = new User(userResponse);
    this.setSubtitle(user);
  }
}
