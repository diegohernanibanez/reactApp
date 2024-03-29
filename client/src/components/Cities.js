import React, { Component } from "react";
import axios from "axios";
import CitiesList from './CitiesList'
import { connect } from 'react-redux';
import updateEstado from '../actions/actionCity';


const URL = "http://localhost:5000/cities";

class Cities extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      ciudades: [],
    };
  }

  componentDidMount() {
    this.fetchQuotes();
  }
  
  fetchQuotes = () => {
    axios
      .get(URL)
      .then(response => {
        console.log(response);
        this.props.updateEstado()
        this.setState({ ciudades: response.data, isFetching: false });
        console.log(this.state.ciudades);
      })
      .catch(e => console.log(e));
  };

  render() {

    const title = "Cities";

    return (
      
      <div className="App">
        <h2 className="App-title">{title}</h2>
        <div>
          {!this.props.item
            ? " " :  <CitiesList data={this.state.ciudades} />
          }
        </div>
      </div>
    );
  }

}

const mapStateProps = state => {
  return {
    item: state.reducer.mostrar
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateEstado: () => dispatch(updateEstado()),
  };
};
export default connect(mapStateProps, mapDispatchToProps)(Cities);