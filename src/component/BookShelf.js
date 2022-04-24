import PropTypes from 'prop-types';
import React from 'react'
import Book from './Book'
import EmptyBook from './EmptyBook';

export default function BookShelf(props) {
    const books=props.Books;
    const currentShelf = props.name.dbName;
    const newArr = books.filter((info)=>{
        return info.shelf === currentShelf;
    })
    return (
              <div className="bookshelf">
                    <h2 className="bookshelf-title">{props.name.bookTitle}</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {newArr.length!==0?(newArr.map((item)=>{
                            return <Book key={item.id}  item={item} changingBookShelf={props.changingBookShelf} books={props.Books}/>
                         })):<EmptyBook/>}
                    </ol>
                    </div>
                </div>
            )
}
BookShelf.propTypes = {
    name:PropTypes.object.isRequired,
    Books:PropTypes.array.isRequired,
    changingBookShelf:PropTypes.func.isRequired,
}


// export default class BookShelf extends Component {
    // currentShelf = ;
    // newArr = this.props.name.Books;
//   render() {
//       console.log(typeof(newArr.bind(this)))
//     return (
//       <div className="bookshelf">
//             <h2 className="bookshelf-title">{this.props.name.bookTitle}</h2>
//             <div className="bookshelf-books">
//             <ol className="books-grid">
//                 {this.names.newArr.filter((info)=>{
//                     return info.shelf === this.currentShelf;
//                 }).map((item)=>{
//                     return <Book key = {item.id} item = {item}/>
//                  })}
//             </ol>
//             </div>
//         </div>
//     )
//   }
// }
