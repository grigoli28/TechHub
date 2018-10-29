import React, { Component } from 'react';
import List from './List';
import Item from './Item';
import './App.css';

class App extends Component {
  itemInput = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { key: 1, text: 'Item 1', },
        { key: 2, text: 'Item 2', }
      ],
      currentItem: {
        key: '',
        text: '',
      },
    };
  }

  handleInput = event => {
    const text = event.target.value;
    const currentItem = { text, key: Date.now() };
    this.setState({ currentItem });
  }

  addItem = event => {
    event.preventDefault();
    const newValue = this.state.currentItem;
    if (newValue.text !== '') {
      const items = [...this.state.items, newValue];
      this.setState({
        items,
        currentItem: {
          key: '',
          text: ''
        }
      });
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item=> item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="App">
        <List
          itemInput={this.itemInput}
          addItem={this.addItem}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <Item items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;