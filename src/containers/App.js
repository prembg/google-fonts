import React, { Component } from 'react';
import MainMenu from '../components/MainMenu.js';
import SearchMenu from '../components/SearchMenu.js';
import CardList from '../components/CardList.js';
import Scroll from '../components/Scroll.js';
import Footer from '../components/Footer.js';





class App extends Component {
  constructor() {
    super()
    this.state = {
      fonts: [],
      searchfield: '',
      textfield: 'Text1',
      size: '40'
    }
  }

  componentDidMount(){
    fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyA5GrPS2LztYbvuq-S38sx6CieY17p9FOY')
    .then(response=> response.json())
    .then(data=> this.setState({fonts: data.items}));
    
  }


  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value })
  }

  onTextChange = (event) => {
    this.setState({textfield: event.target.value })
  }

  onSearchReset = () => {
    this.setState({searchfield: '' })
  }

  onFontSizeChange = (event) => {
    this.setState({size: event.target.value })
  }

  render () {
    const {fonts, searchfield, textfield, size} = this.state;
    const filteredFonts = fonts.filter(font => {
      return font.family.toLowerCase().includes(searchfield.toLowerCase());
      })
    
    
    return (
      <div className='tc center'>
        <MainMenu />
        <SearchMenu 
          searchChange={this.onSearchChange} 
          textChange={this.onTextChange} 
          sizeChange={this.onFontSizeChange}
          searchReset={this.onSearchReset}
          />
        <Scroll>
          <CardList fonts={filteredFonts} textfield={textfield} size={this.state.size}/>
        </Scroll>
        <Footer />
      </div>
    )
  }
}
  

export default App;




