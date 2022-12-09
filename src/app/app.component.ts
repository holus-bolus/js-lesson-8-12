import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
}

//Union type is used only for specific values

function reducer(action: 'uppercase' | 'lowercase', string: string): string {
  if (action === 'uppercase') {
    return string.toUpperCase();
  }
  if (action == 'lowercase') {
    return string.toLowerCase();
  }
  return string;
}

reducer('uppercase', 'Oleksii');

const button = document.querySelector('button');

button?.addEventListener('click', () => {
  console.log('button');
});

const link = document.querySelector('a');

link?.addEventListener('click', () => {
  console.log(link.href);
});

interface User {
  name: string;
  lastName: string;
  age: number;
  newVar?: string[];
}

type Number = number | string;

const variable: Number = '2';

const user: User = {
  name: 'John',
  lastName: 'Doe',
  age: 20,
};

const users: User[] = [];

function someFunc(arg: typeof variable) {
  return arg;
}

users.push(user);

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}
async function start(): Promise<string> {
  return 'string';
}

const result = start();

console.log(result);
export {};
