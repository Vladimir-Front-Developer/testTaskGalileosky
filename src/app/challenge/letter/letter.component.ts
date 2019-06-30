import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {
  wordList: Array<object> = [
    {
      id: 'Аа',
      word: 'Арбуз',
      linkImg: 'https://fruitonline.ru/image/cache/catalog/miniwatermelon-800x1000.jpg'
    },
    {
      id: 'Бб',
      word: 'Банан',
      linkImg: 'https://av.ru/product/h51/h10/8954151862302.jpg'
    },
    {
      id: 'Вв',
      word: 'Вишня',
      linkImg: 'https://edaplus.info/food_pictures/cherry.jpg'
    },
    {
      id: 'Гг',
      word: 'Горох',
      linkImg: 'https://foodsinfo.ru/wp-content/uploads/2017/06/goroh-18.jpg'
    },
    {
      id: 'Дд',
      word: 'Дыня',
      linkImg: 'https://av.ru/product/hbc/h13/8953463406622.jpg'
    },
    {
      id: 'Ее',
      word: 'Ежевика',
      linkImg: 'https://images.lady.mail.ru/454805/'
    }
  ]
  letterItem: object
  wordRef: Array<string> = [
    'трактор', 'машина', 'кабина', 'область', 'кавер', 'ветер', 'огород', 'город'
  ]
  constructor(private ar: ActivatedRoute) {
    ar.params.subscribe(param => {
      this.letterItem = this.wordList.find(el => {
        return param.id === el.id
      })
    })
  }

  ngOnInit() {
    const randomWord = this.findRandomWord(this.letterItem.id[1], this.wordRef)
    console.log(randomWord)
  }

  findRandomWord(letter, ref){
    const matchingRef = ref.filter((word) => {
      if(word.indexOf(letter.toLowerCase()) !== -1) return word
    })
    const getRandomIdx = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    const randomIdx = getRandomIdx(0, matchingRef.length)
    return matchingRef[randomIdx]
  }

}
