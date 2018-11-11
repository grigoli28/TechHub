import React, { Component } from "react";
import axios from "axios";

function hocCRUD(CustomComponent, API_URL) {
  return class extends Component {
    state = {
      data: []
    };

    componentDidMount() {
      this.get();
    }

    get = () => {
      axios
        .get(API_URL)
        .then(res => res.data)
        .then(data => this.setState({ data }));
    };

    create = newData => {
      axios
        .post(API_URL, newData)
        .then(res => res.data)
        .then(newItem => {
          const data = [...this.state.data, newItem];
          this.setState({ data });
        });
    };

    update = id => {
      axios
        .patch(`${API_URL}/${id}`)
        .then(res => res.data)
        .then(updatedItem => {
          const data = this.state.data.map(item => {
            if (item.id !== updatedItem.id) return item;
            return {
              ...item,
              ...updatedItem
            };
          });
          this.setState({ data });
        });
    };

    remove = id => {
      axios
        .delete(`${API_URL}/${id}`)
        .then(res => res.data)
        .then(() => {
          const data = this.state.data.filter(item => item.id !== id);
          this.setState({ data });
        });
    };

    render() {
      return (
        <CustomComponent
          data={this.state.data}
          create={this.create}
          update={this.update}
          remove={this.remove}
          get={this.get}
          {...this.props}
        />
      );
    }
  };
}

export default hocCRUD;
