import React, { Component } from "react";
import "./app.css";

import News from '../news/news'
import Add from '../add/add'

const myNews = [
    {
      id: 1,
      author: 'Саша Печкин',
      text: 'В четверг, четвертого числа...',
      bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
      id: 2,
      author: 'Просто Вася',
      text: 'Считаю, что $ должен стоить 35 рублей!',
      bigText: 'А евро 42!'
    },
    {
      id: 3,
      author: 'Max Frontend',
      text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
      bigText: 'А евро опять выше 70.'
    },
    {
      id: 4,
      author: 'Гость',
      text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru',
      bigText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
    }
  ];

  export default class App extends Component {
    state = {
      news: myNews,
    }
    handleAddNews = (data) => {
      const nextNews = [data, ...this.state.news]
      this.setState({ news: nextNews })
    }
    render() {
      return (
        <React.Fragment>
          <Add onAddNews={this.handleAddNews}/>
          <h3>Новости</h3>
          <News data={this.state.news}/>
        </React.Fragment>
      )
    }
  }
