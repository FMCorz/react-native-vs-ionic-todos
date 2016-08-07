import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class TodoApp extends Component {

  constructor(...args) {
    super(...args)

    // Set the initial state.
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
      }),
      onlyShowNotDone: false,
      todos: [
        this.makeTodo(3),
        this.makeTodo(2, true),
        this.makeTodo(1)
      ]
    }
  }

  addTodo() {
    // Inject a new todo at the start of the list.
    this.setState({
      todos: [this.makeTodo(), ...this.state.todos]
    });
  }

  makeTodo(number, done) {
    const id = number ? number : this.state.todos.length + 1;
    return {
      id: id,
      done: done ? true : false,
      text: 'Todo Item #' + id
    }
  }

  toggleTodo(todo) {
    let newTodo = {...todo};
    newTodo.done = !todo.done;
    const index = this.state.todos.indexOf(todo);
    // Recreate a list but replace the existing one.
    let todos = [...this.state.todos.slice(0, index), newTodo, ...this.state.todos.slice(index + 1)];
    this.setState({
      todos: todos
    });
  }

  renderTodo(todo) {
    return (
      <View style={styles.todo} key={todo.id}>
        <View>
          <Switch onValueChange={() => this.toggleTodo(todo)} value={todo.done} />
        </View>
        <View>
          <Text>{todo.text}</Text>
        </View>
      </View>
    )
  }

  render() {
    const todos = this.state.todos.filter((todo) => {
      if (this.state.onlyShowNotDone) {
        return !todo.done;
      }
      return true;
    });
    return (
      <View style={styles.container}>
        <View style={styles.options}>
          <TouchableOpacity onPress={() => this.addTodo()} style={styles.add}>
            <Text>+ Add a todo</Text>
          </TouchableOpacity>
          <View style={styles.hide}>
            <Text>Hide done</Text>
            <Switch
              onValueChange={(value) => this.setState({onlyShowNotDone: value})}
              value={this.state.onlyShowNotDone}/>
          </View>
        </View>
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(todos)}
          renderRow={this.renderTodo.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  add: {
    flex: 1,
    padding: 10
  },
  hide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  options: {
    flexDirection: 'row'
  },
  todo: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default TodoApp;
