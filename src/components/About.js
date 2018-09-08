import React, {Component} from 'react'

export default class About extends Component {
  render(){
    return(
      <div className="about">
        <h1>About Us</h1>
        <br />

        <p>DogFinder was founded and created by three students who were working on a React App Development project. When tasked an assigment to create an app designed to resolve a problem to solution, they thought of this great idea called DogFinder. We saw a flaw in the way rescue groups go about adopting their animals to the public. We did not feel there was an efficient way to search for the dog you're looking for. You have to visit many different rescue groups to find the perfect dog. Instead, we created DogFinder, designed to locate dogs across the nation for you in just a few seconds. All you need to do is enter in a bit of information about the kind of  dog you're looking for and your search will be matched within seconds.</p>

        <h2>Who are the Founders?</h2>
        <br />
        <p className="founders">
        Daniel
        Maria
        Taylor
        </p>
   </div>
    )
  }
};
