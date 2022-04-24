import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import LandingPage from './Views/LandingPage'
import OpenSearchList from './component/OpenSearchList'
import {Route} from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    Books:[]
  }
  async componentDidMount(){
    try{
      this.setState({Books :await BooksAPI.getAll()})
    }catch(err){
      console.log(err.message);
    }
  }
changingBookShelf=(book,newShelf)=>{
  try{
    BooksAPI.update(book,newShelf);
    book.shelf = newShelf;
    this.setState({Books:[...this.state.Books.filter((info)=>{
      return info.id !== book.id
    }),book]})
  }catch(err){
    console.log(err.message)
  }
  }



  render() {

    return (
      <div className="app">
        <Route exact path = '/'>
        <LandingPage Books = {this.state.Books} changingBookShelf={this.changingBookShelf}/>
        </Route>
        <Route exact path = '/search'>
        <OpenSearchList Books = {this.state.Books} changingBookShelf={this.changingBookShelf}/>
        </Route>
          
      </div>
    )
  }
}

export default BooksApp
