import React from 'react';


class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            shape : "",
            length:  "",
            width: "",
            a:  "",
            b: "",
            c: "",
            radius :"", 
            shapeEntered:false,
            showResult: false,
            result:"",
        }

        this.getResult = this.getResult.bind(this);
    }

    getResult(e){
      e.preventDefault();
      this.setState({showResult: true});
      if(this.state.shape.toLocaleLowerCase() === 'square'){
          let area = parseInt(this.state.length) * parseInt(this.state.length);
          let output = `name:square, dimension:${this.state.length} x ${this.state.length}, area: ${area}`;
          this.setState({result: output});
      }
      if(this.state.shape.toLocaleLowerCase() === 'rectangle'){
        let area = parseInt(this.state.length) * parseInt(this.state.width);
        let output = `name:square, dimension:${this.state.length} x ${this.state.length}, area: ${area}`;
        this.setState({result: output});
      } 

      if(this.state.shape.toLocaleLowerCase() === 'triangle'){
        const perimeter = (parseInt(this.state.a) + parseInt(this.state.b) + parseInt(this.state.c))/2;
        const area =  Math.sqrt(perimeter*((perimeter-this.state.a)*(perimeter-this.state.b)*(perimeter-this.state.c)));   
        let output = `name:square, dimension: a${this.state.a} x b${this.state.b} x b${this.state.c}, area: ${area}`;
        this.setState({result: output});
      } 

      if(this.state.shape.toLocaleLowerCase() === 'circle'){
        let area = parseInt(this.state.radius) * parseInt(this.state.radius) * Math.PI;
        let output = `name:square, dimension:${this.state.radius}, area: ${area}`;
        this.setState({result: output});
      } 
  }

    render(){
        return(
            <div className="app">
              <div>
                <form >
                  <div>
                    <label>
                        Enter the shape: 
                        <input type="text" 
                          name={this.state.shape} 
                          value={this.state.shape}
                          onChange = {(e)=>this.setState({shape: e.target.value,shapeEntered:true})}
                          />
                        <br></br>
                    </label>
                  </div>
                  {
                    this.state.shapeEntered && this.state.shape.toLocaleLowerCase() === 'square' && (
                      <div>
                      <label>
                          Please enter length:
                          <input value={this.state.length} onChange={(e)=>this.setState({length: e.target.value})} />
                      </label>
                    </div>
                    )
                  }
                  {
                    this.state.shapeEntered && this.state.shape.toLocaleLowerCase() === 'rectangle' && (
                      <div>
                      <label>
                          Please enter length:
                          <input value={this.state.length} onChange={(e)=>this.setState({length: e.target.value})}/>
                      </label>
                      <br></br>
                        <label>
                          Please enter width:
                        <input value={this.state.width} onChange={(e)=>this.setState({width: e.target.value})}/>
                  </label>
                    </div>
                    )
                  }
                  {
                    this.state.shapeEntered && this.state.shape.toLocaleLowerCase() === 'triangle' && (
                      <div>
                      <label>
                          Please enter side1:
                          <input value={this.state.a} onChange={(e)=>this.setState({a: e.target.value})}/>
                      </label>
                      <br></br>
                        <label>
                          Please enter side2:
                        <input value={this.state.b} onChange={(e)=>this.setState({b: e.target.value})}/>
                      </label>
                      <br></br>
                      <label>
                        Please enter side3:
                      <input value={this.state.c} onChange={(e)=>this.setState({c: e.target.value})}/>
                    </label>
                    </div>
                    )
                  }
                  {
                    this.state.shapeEntered && this.state.shape.toLocaleLowerCase() === 'circle' && (
                      <div>
                      <label>
                          Please enter radius:
                          <input value={this.state.radius} onChange={(e)=>this.setState({radius: e.target.value})}/>
                      </label>
                    </div>
                    )
                  }
                    <input type="submit" value="Submit" onClick={this.getResult}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    {
                      this.state.showResult && this.state.result
                    }
                </form>  
              </div>

            </div>
         )
    }
}

export default App;