import React, { Component } from 'react';
import AceEditor from 'react-ace';
import Giveback from './OP';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"

class App extends Component{
  state={
    code:''
  }

  handleRun = () =>{
    console.log(this.state.code)
  }

  
  handleChange = (newVal) =>{
    this.setState({
      code:newVal
    })
  }

  render(){
    return(
      <div>
      <AceEditor     
      mode="python"
      width='1000px'
      height='500px'
      theme="monokai"
      onChange={this.handleChange}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true
      }}
      /> 
      <button onClick={this.handleRun}>RUN CODE</button>
       <Giveback/>  
       
    </div>
    );
  }
}

export default App;