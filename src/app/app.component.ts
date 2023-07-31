import { Component } from '@angular/core';
import { CaptionItem } from './caption-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string | undefined ;
  imgMassage : string[] =[]
  count:number;
  captionList: CaptionItem[] =[
    {
      id: 1,
      message:'" David Schwimmer, Kissing a Fool "',
      emoji: './assets/picture/pic1.png'
    },
    {
      id: 2,
      message:'" Yoda, Star Wars "',
      emoji: './assets/picture/pic2.png'
    },
    {
      id: 3,
      message:'" Rafiki, The Lion King "',
      emoji: './assets/picture/pic3.png'
    },
    {
      id: 4,
      message:'" Ian Wallace, What a Girl Wants "',
      emoji: './assets/picture/pic4.png'
    },
    {
      id: 5,
      message:'" Green Goblin, Spider-Man "',
      emoji: './assets/picture/pic5.png'
    },
    {
      id: 6,
      message:'" Heath Ledger, 10 Things I Hate About You "',
      emoji: './assets/picture/pic6.png'
    },
    {
      id: 7,
      message:'" Empire Records "',
      emoji: './assets/picture/pic7.png'
    },
    {
      id: 8,
      message:'" Dumbledore, Harry Potter and the Chamber of Secrets "',
      emoji: './assets/picture/pic8.png'
    },
    {
      id: 9,
      message:'" Chris Gardner, The Pursuit of Happyness "',
      emoji: './assets/picture/pic9.png'
    },
    {
      id: 10,
      message:'" Ben Stiller, The Secret Life of Walter Mitty "',
      emoji: './assets/picture/pic10.png'
    },
    {
      id: 11,
      message:'" The Curious Case of Benjamin Button "',
      emoji: './assets/picture/pic11.png'
    },
    {
      id: 12,
      message:'" Mario Puzo, The Godfather "',
      emoji: './assets/picture/pic12.png'
    },
  ]
  prevCap: CaptionItem[]=[]
  pic: string | undefined

  constructor(){
    this.count = 0
    this.handleCilck()
  }
  random() {
    this.count++
    let randomIndex: number;
    let newCap: CaptionItem;
    if (this.captionList.length == this.prevCap.length) {
      return undefined
    }
    do {
      randomIndex = this.getRandomInt(this.captionList.length);
      newCap = this.captionList[randomIndex];
      
    } while (this.prevCap.includes(newCap));
  
    this.prevCap.push(newCap);
    console.log(this.prevCap.length);
    return newCap;
  }
  
  private getRandomInt(max : number){
    return Math.floor(Math.random() * max)  
  }
  handleCilck(){
    const currentCap = this.random();
    this.title = currentCap?.message;
    this.pic = currentCap?.emoji;
  }
  reset(){
    this.prevCap = []; 
    this.count = 0; 
    this.handleCilck();
  }
}
