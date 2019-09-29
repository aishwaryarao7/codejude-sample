import React from 'react';

class Calc extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={a: 0, b: 0, c: 0}
  }

  addNumbers(a, b) {
    const temp = Number(a)+Number(b);
    this.setState({c: temp});
  }

  render() {
    const { a,b,c } = this.state;
    return (
      <div>
        <div>
          <div>
            Enter first number: <input value={a} onChange={(e) => {this.setState({a: e.target.value})}} />            
          </div>
          <div>
            Enter second number: <input value={b} onChange={(e) => {this.setState({b: e.target.value})}} />            
          </div>
          <div>
            <button onClick={()=>{this.addNumbers(a, b)}}>Display Result</button>          
          </div>
          <div>
            Result: <div>{c}</div>            
          </div>
        </div>
      </div>
    )
  }
}

export default Calc;