import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueName: 'No One',
      valueFlavour: 'You are flavour-less'
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFlavourChange = this.handleFlavourChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    event.preventDefault();
    this.setState({valueName: event.target.value});
  }

  handleFlavourChange(event){
    event.preventDefault();
    this.setState({valueFlavour: event.target.value});
  }

  handleSubmit(event) {  //not yet
    event.preventDefault();
    alert('An essay was submitted: ' + this.state.valueFlavour);
  }

  render() {
    var nameVar = this.state.valueName;
    return (

      <Fragment>
        <div>
          <h1>Order Online Pizza at Sania's Pizza..Mr/Miss</h1>
          <h2>{nameVar}</h2>
        </div>

        <div>

          <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Enter Name:
              <input name="yourName" type="text" value={this.state.yourName} onChange={this.handleNameChange} />
            </label>
          </div>
          <div>
            <h3>Choose your Flavour (You can mix it up)</h3>
            <label>
              <select name='flavor' onChange={this.handleFlavourChange}>
                <option value="tikka">Tikka</option>
                <option value="fajita">Fajita</option>
                <option value="supreme">Supereme</option>
                <option value="pepperoni">Pepperoni</option>
              </select>
            </label>
          </div>
          <div>
             <input type="submit" value="Submit" />
          </div>
          </form>
        </div>
      </Fragment>


    );
  }
}

ReactDOM.render(
  <EssayForm />,
  document.getElementById('root')
);
