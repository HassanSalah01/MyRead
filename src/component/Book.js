import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types';



export default function Book(props) {
    const items = props.item;
    const books = props.books;
    const y  = books.filter((info)=>{
            return props.item.id ===info.id;
          })
    const checks = (y.length > 0 ) ? y[0].shelf :"none";
    // console.log(checks);

    // console.log(props.books)

  // const retreaveShelf = (book,test) =>{
  //     const newa = test.filter((info)=>{
  //       return book.id ===info.id;
  //     })
  //   }
    // const newBook = retreaveShelf(props.item,props.books)
    const Bookcover = items.imageLinks && items.imageLinks.thumbnail ? items.imageLinks.thumbnail : "./test"
    const title = items.title;
    const author = items.authors && items.authors.join(",");
    return (  

        <li key = {props.item.id}>
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${Bookcover})` }}></div>
            <BookShelfChanger book = {props.item} changingBookShelf = {props.changingBookShelf} shelf = {checks}/>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{author ? author :' Author : N/A'}</div>
        </div>
        </li>
    )
  }

  Book.propTypes = {
  item:PropTypes.object.isRequired,
  changingBookShelf:PropTypes.func.isRequired,
  books:PropTypes.array.isRequired,
}



// Refactor Class to function (no state req) later


// export default class Book extends Component {
//   items = this.props.item;

//   retreaveShelf = (book)=>{
//   const x =  this.props.Book.filter((info)=>{
//         return book.id ===info.id
//     })
//     (x.length >0)? x[0].shelf:'none'
//   }
  
// render() {
//   return (
    
//       <li key = {this.props.item.id}>
//       <div className="book">
//           <div className="book-top">
//           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.items.imageLinks.smallThumbnail})` }}></div>
//           <BookShelfChanger book = {this.props.item} changingBookShelf = {this.props.changingBookShelf} shelf = {this.retreaveShelf(this.props.item)}/>
//           </div>
//           <div className="book-title">{this.items.title}</div>
//           <div className="book-authors">{this.items.publisher}</div>
//       </div>
//       </li>
//   )
// }
// }
