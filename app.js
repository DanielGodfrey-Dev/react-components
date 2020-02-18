//Daniel G sandbox playground_________________________________________

var Main = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList foods={['lettuce', 'avocados', 'steak', 'pile of food']}/> // Here's my GroceryList after Class refactor & mouseOver functionality
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

    this.state = {
    	flipped: false
    };
  }

  mouseOut() {
    console.log('mouse is out!')
    this.setState({flipped: false});
  }
  
  mouseOver() {
  	console.log('in yo!!')
    this.setState({flipped: true});
  }


  render() {

  	var style = {
      fontWeight: this.state.flipped ? 'bold' : 'normal'

    };

    return (
      <li style={style} onMouseEnter={this.mouseOver.bind(this)} onMouseLeave={this.mouseOut.bind(this)}>{this.props.food}</li>
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
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('tutorial'));