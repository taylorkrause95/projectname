import React from 'react';

class DogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
      this.setstate({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }


  render() {
    return (
        <form className="dogform" action={'http://api.petfinder.com/pet.find'} method="get">
            <label>
                Breed:
                <input name={'breed'} type="text" />
            </label>
            <label>
                Location:
                <input name={'location'}  type="text" placeholder="City" />
            </label>
            <label>
                Age:
                <input name={'age'} placeholder="Age" type="text" />
            </label>
            <label>
                Sex:
                <input name={'sex'} type="text" placeholder="sex"/>
            </label>
            <label>
                Size:
                <input name={'size'} type="text" />
                <input type="text" name={'key'} value={'7d7127de0db19f217f7f0ebb59475ea5'} hidden />
                <input type="text" name={'format'} value={'xml'} hidden />
                <input type="text" name={'callback'} value={'handleData'} hidden />
            </label>
            <label>
                <input type="submit" value="Submit" />
            </label>
        </form>
    );
  }
}

export default DogForm;
