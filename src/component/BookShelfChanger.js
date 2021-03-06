import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class BookShelfChanger extends Component {
  static propTypes = {
    book:PropTypes.object.isRequired,
    changingBookShelf:PropTypes.func.isRequired,
    shelf:PropTypes.string.isRequired,
  }
  render() {
    return (
        <div className="book-shelf-changer">
        <select onChange={event=>{
          this.props.changingBookShelf(this.props.book,event.target.value)
        }} value = {this.props.shelf}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
        </select>
    </div>
    )
  }
}
