import React, { Component } from "react";

class Item extends Component {
    createItem = item =>  {
        return (
            <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
                {item.text}
            </li>
        );
    }

    render() {
        const items = this.props.items;
        const listItems = items.map(this.createItem);
        return (
            <ul className="itemList">
                {listItems}
            </ul>
        );
    }
}


export default Item;