//Daniel G sandbox playground_________________________________________

var Main = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList foods={['lettuce', 'avocados', 'steak', 'pile of food']}/> // Here's my GroceryList after Class refactor
  </div>
);

//need to refactor into Class
var GroceryList = (items) => (
<ul>
	{items.foods.map(food =>
		<GroceryListItem food={food} />
	)}
</ul>
);

class GroceryListItem extends React.Component {


  constructor(props) {
    super(props);
  }


  render() {

    return (
      <li>{this.props.food}</li>
    );

  }

}

ReactDOM.render(<Main/>, document.getElementById('app'));


//______________Below is Learn tutorial_______________________________



var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);

	// var onListItemClick = (event) => {
	// 	console.log('I got clicked');
	// };

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var TodoList = (props) => (


  <ul>
    {props.todos.map(todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class TodoListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
  }

  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {

    // `props` is no longer passed as an argument,
    // but instead accessed with `this.props`
    return (
      <li>{this.props.todo}</li>
    );

  }

}

ReactDOM.render(<App/>, document.getElementById('tutorial'));