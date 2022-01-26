function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }





class Card {
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
 

        }
    turn(){
        return `${this['value']} of ${this['suit']} `
    }
}

class MajorArcana {
    constructor(major){
        this.major = major;

        }
    turn(){
        return this['major']
    }
    }

class Deck{
    constructor(){
        let suits = ["Cups", "Pentacles", "Clubs", "Swords"];
        let values = ['Ace','2','3','4','5','6','7','8','9','10','Paige','Knight','Queen','King'];
        let majors = ['The Fool','The Magician','The High Priestess','The Empress','The Emperor','The Hierophant','The Lovers','The Chariot','Strength','The Hermit',
        'Wheel of Fortune','Justice','The Hanged Man','Death','Temperance','The Devil','The Tower','The Star','The Moon','The Sun','Judgement','The World'];
        this.cards = [];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++){
                this.cards.push(new Card(values[j],suits[i]).turn())
            }
        }
        for (let i = 0; i < majors.length; i++){
            this.cards.push(new MajorArcana(majors[i]).turn())
        }
        // console.log(this.cards)
 
    }
    count(){
    return this.cards.length;
    }
    

    remove_card(){
  
        let card = this.cards.pop();
        return card;        
    }
    deal_card(card){
        let rand = Math.random()*100;
        if (rand > 40){
            
            return card
        }
        else{
            
            return `${card} reversed`
            
        }
    }

    return_card(card){
        this.cards.unshift(card)
    }

        
        
    

    
    
    cross(){

        shuffle(this.cards)
        let cross = [];
        for (let i = 1; i < 11; i++){
            let removedCard = this.remove_card();
            var crd = this.deal_card(removedCard);
            this.return_card(removedCard)
            console.log("position",i,":",crd);
            cross.push(`${crd}\n`);            
        }  
        return cross;
        


        
        
    }

    
}

let d = new Deck();

function empty(element) {
    element.innerHTML = ""; 
 }


function reading(){
    var reading = d.cross();


    for (let i = 1; i < 11; i++){
        let parent = document.getElementById(`pos${i}`);
        empty(parent);
    }
    var readingList = [];
    for (let i = 1; i < 11; i++){

        var cardName = reading[i-1];
        readingList.push(`Position ${i}: ${cardName}`);

        let pattern = / reversed/g;
        let cardPath = cardName.replace(pattern,'')
        var img = document.createElement('img');
        img.src = `images/${cardPath}.jpg`

        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";
        
        if (pattern.test(cardName) == true){
            img.style.transform = "scaleY(-1)"
        }

        console.log(img.src)
        document.getElementById(`pos${i}`).appendChild(img)
        document.getElementById('theReading').textContent = readingList.join("\r\n");

    }
    
}
