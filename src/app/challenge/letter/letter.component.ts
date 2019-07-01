import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalService } from 'src/app/local.service';

export interface word {
  id: string,
  word: string,
  linkImg: string
}
export interface letterItem {
  id: string,
  word: string,
  linkImg: string
}

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss'],
  providers: [ LocalService ]
})

export class LetterComponent {
  letterItem = {
    id: 'Аа',
    word: 'Арбуз',
    linkImg: 'https://fruitonline.ru/image/cache/catalog/miniwatermelon-800x1000.jpg'
  }
  word: string
  wordList: Array<word>
  wordRef: Array<string>
  
  constructor(private ar: ActivatedRoute, private ls:LocalService) {
    this.wordList = ls.get('wordList')
    this.wordRef = ls.get('wordReference')

    ar.params.subscribe(param => {
      this.letterItem = this.wordList.find(el => {
        return param.id === el.id
      })
      const randomWord = this.findRandomWord(this.letterItem.id[1], this.wordRef)
      this.word = this.getSpanWord(randomWord, this.letterItem.id[1])
    })
  }
  
  changeWord(event){
    if(event.target.tagName === 'SPAN') event.target.style.color = 'red'
  }

  findRandomWord(letter, ref){
    const matchingRef = ref.filter((word) => {
      if(word.indexOf(letter.toLowerCase()) !== -1) return word
    })
    const getRandomIdx = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    const randomIdx = getRandomIdx(0, matchingRef.length)
    const randomWord = matchingRef[randomIdx]
    return randomWord
  }

  getSpanWord(str, letter){
      const arr = str.split(letter)
      console.log(arr)
      let word = ''
      arr.forEach((el, idx) => {
        if(arr.length - 1 === idx){
          if(!el) return
          else word = word + el
        } 
        else word = word + el + `<span>${letter}</span>`
      })
      return word
  }
}
