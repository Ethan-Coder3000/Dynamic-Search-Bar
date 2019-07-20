import React,{Component} from 'react';
import ReactSearchBox from 'react-search-box';

export default class Home extends Component {
  state={
    search:'',
  };
  data = [
    {
      key: 'Cape Town',
      value: 'Cape Town,SA',
    },
    {
      key: 'Durban',
      value: 'Durban,SA',
    },
    {
      key: 'PE',
      value: 'PE,SA',
    },
    {
      key: 'Johannesburg',
      value: 'Johannesburg,SA',
    },
    {
      key: 'Pretoria',
      value: 'Pretoria,SA',
    },
    {
      key: 'Delhi',
      value: 'Delhi,India',
    },
    {
      key: 'Gujarat',
      value: 'Gujarat,India'
    },
    {
      key: 'Big Ben',
      value: 'Big Ben,UK',
    },
    {
      key: 'California',
      value: 'California,USA',
    },
    {
      key: 'London',
      value: 'London,UK',
    }
  ]

  searchValue=(search)=>{
    this.setState({search});
    function func(a) {
      var arrayData = ["Cape Town","Durban","PE","Johannesburg","Pretoria", "Delhi",
      "Gujarat","Big Ben","California","London"];
      var output = arrayData.indexOf(a); 
  
    return output
  } 
    var indexVal = func(search.key);
    console.log(indexVal);
    
    
  }
  
  render(){
    return (
      <div id="Home">
        <div className="container">
          <div>
        <ReactSearchBox
          placeholder="Dynamic search bar"
          value=""
          data={this.data}
          onSelect={this.searchValue}
        />
        </div>
        </div>
      </div>
    )
  }
  
}

