import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  public todos = [];
  public onlyShowNotDone = false;

  constructor(public navCtrl: NavController) {
    this.todos = [
      this.makeTodo(3),
      this.makeTodo(2, true),
      this.makeTodo(1),
    ];
  }

  addTodo() {
    this.todos = [this.makeTodo(), ...this.todos];
  }

  makeTodo(number?: Number, done?: Boolean) {
    const id = number ? number : this.todos.length + 1;
    return {
      id: id,
      done: done ? true : false,
      text: 'Todo Item #' + id
    }
  }

  toggleTodo(todo) {
    todo.done = !todo.done
  }

  filteredTodos() {
    return this.todos.filter((todo) => {
      if (this.onlyShowNotDone) {
        return !todo.done;
      }
      return true;
    })
  }

}
