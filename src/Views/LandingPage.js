import React, { Component } from 'react'
import { Header } from '../component/Header'
import SerachButton from '../component/SerachButton'
import BookShelf from '../component/BookShelf'
import PropTypes from 'prop-types'
export default class LandingPage extends Component {
  static propTypes = {
    Books :PropTypes.array.isRequired,
    changingBookShelf:PropTypes.func.isRequired,
  }
  render() {
    return (
        <div className="list-books">
        <Header/>
        <BookShelf name = {{bookTitle:"currently reading",dbName:"currentlyReading"}} Books = {this.props.Books} changingBookShelf = {this.props.changingBookShelf} />
        <BookShelf name = {{bookTitle:"Want To Read ",dbName:"wantToRead"}} Books = {this.props.Books} changingBookShelf = {this.props.changingBookShelf}/>
        <BookShelf name = {{bookTitle:"Done Reading",dbName:"read"}} Books = {this.props.Books} changingBookShelf = {this.props.changingBookShelf}/>
        <SerachButton/>
        </div>
    )
  }
}

