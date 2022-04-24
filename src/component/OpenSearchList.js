import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book';
import { Link } from 'react-router-dom';
import EmptyResult from './EmptyResult';
import PropTypes from 'prop-types'

export default class OpenSearchList extends Component {
  static propTypes = {
    Books :PropTypes.array.isRequired,
    changingBookShelf:PropTypes.func.isRequired,
  }
  state={
    query:"",
    books:[],
    timer:100
  }
  arrSize = this.state.books.length;
  timerQue = 0 ;

  // updateQuery = (query)=>{
  //   this.setState(()=>{
  //     return {query:query.trim()}
  //   })
  // }
  bookSearching = (e)=>{
    const que = e.target.value;
    // this.setState({
    //   timer: clearTimeout(this.state.timer)
    // })
    clearTimeout(this.timerQue);
    this.timerQue = setTimeout(async()=>{
      try{
        if(que.trim()){
          // console.log(que)
          const newBooks = await BooksAPI.search(que);
          // console.log(newBooks);
          if('error' in newBooks){
            // console.log("error")
            this.setState({books:[]})
          }else{
            this.setState({books:newBooks})
          }
        }else{
          this.setState({books:[]})
        }
      }catch(er){
        console.log(er.message)
      }
    },this.state.timer)}
  render() {
    return (
      <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'>
              <button className="close-search" >Close</button>
              </Link>
              <div className="search-books-input-wrapper"> 
                <input type="text" placeholder="Search by title or author"  onChange={this.bookSearching} />
              </div>
            </div>
            <div className="search-books-results">
              {this.state.books.length > 0 ? 
              (<ol className="books-grid">
                {this.state.books.map((info)=>{
                  return <Book  key = {info.id} item = {info} changingBookShelf={this.props.changingBookShelf} books={this.props.Books}/>
                })}
              </ol>):(<EmptyResult/>)}
            </div>
          </div>
    )
  }
}
// onClick={() => this.setState({ showSearchPage: false })}

 //   this.setState({
  //     timer:setTimeout(async()=>{
  //       try{
  //         if(que){
  //           const newBooks = await search(que);
  //           if('error' in newBooks){
  //             this.setState({books : []});
  //           }else{
  //             this.setState(()=>{
  //               return {books:newBooks}
  //             })
  //           }
  //         }
  //       }catch(e){
  //         console.log(e.message);
  //       }

  //     },1000)
  //   })
  // }