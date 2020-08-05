import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title;
  subtitle: string;
  loading = false;
  email: string;
  form: FormGroup;
  skills: string;
  bestSkill: string;
  totalPoints: number;

  constructor(private fb: FormBuilder) {
    var newTitle;
    newTitle = 'TypeScript';
    var version = '3.9';
    this.title = newTitle + ' ' + version;

    this.setSubtitle('Ricardo', 'Angular', '0');

    this.form = this.fb.group({
      username: '',
    });
  }

  dataTypes() {
    let name = 'Ricardo';
    let year = 2020;
    let bool = true;
    let today = new Date();
    let list = [1, 2, 3];
    let notSure = 20;
    let listAny = ['1', 2, false];
  }

  setSubtitle(name, course, version) {
    course = course || 'TypeScript';
    this.subtitle = `Bienvenido ${name} al curso de ${course} ${version}`;
  }

  onSubmit() {
    this.email = null;
    this.loading = true;

    const $this = this;
    const username = this.form.value.username;
    this.searchEmail(username, function(email) {
      $this.loading = false;
      $this.email = email || 'No encontrado';
    });
  }

  searchEmail(username, callback): void {
    setTimeout(function() {
      if (username.length > 3) {
        callback(username + '@everis.com');
      } else {
        callback(null);
      }
    }, 1000);
  }

  updateUser() {
    const name = 'Gerald';
    this.setSubtitle(name, 'Angular', '8');
  }

  newUser() {
    const name = 'Andres';
    this.setSubtitle(name, '', '');

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

    // * for...in
    const newSkills = [];
    for (const i in skills) {
      if (skills[i]) {
        newSkills.push(`${skills[i]} (${skills[i].length})`);
      }
    }
    this.skills = newSkills.join(', ');

    // * filter
    this.bestSkill = skills.filter(function(skill) {
      return skill.length > 8;
    })[0];

    // * indexOf
    this.bestSkill +=
      ' ' + (this.bestSkill.indexOf('Angular') !== -1 ? 'yes!' : 'pff!');

    this.totalPoints = 0;
    // * forEach
    skills.forEach(skill => (this.totalPoints += skill.length));
  }
}
