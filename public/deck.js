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
        return `${this['value']} of ${this['suit']}`
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
        let suits = ["Cups", "Pentacles", "Wands", "Swords"];
        let values = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Page','Knight','Queen','King'];
        let majors = ['The Fool','The Magician','The High Priestess','The Empress','The Emperor','The Hierophant','The Lovers','The Chariot','Strength','The Hermit',
        'Wheel of Fortune','Justice','The Hanged Man','Death','Ace of Cups','Temperance','The Devil','The Tower','The Star','The Moon','The Sun','Judgement','The World'];
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
        //we need to remove the cards that have been drawn from the list
        let card = this.cards.pop();
        return card;        
    }
    deal_card(card,num1, num2){
        

        let numA = Math.abs(Math.cos(num1))
        let numB = Math.abs(Math.cos(num2))
        let rand = Math.random()*100; + numA*3 + numB*5
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
        do{
            var num1 = prompt("Think of a number and write it");   

        }while(!/^[0-9]|-[0-9]+$/.test(num1) && num1 != null)

        var response = prompt("Write your question or a relevant thought")
        var num2 = 0;
        for(const element of response){
            num2 += element.charCodeAt(0);
        }
        alert("your number of power is: " + num2)

        if ( num1 != null){
            for (let i = 1; i < 11; i++){

                let removedCard = this.remove_card();
                var crd = this.deal_card(removedCard,num1);

                //we put the removed card back in to restore it inside the list
                this.return_card(removedCard)

                console.log("position",i,":",crd);
                cross.push(`${crd}\n`);            
            }  
            return cross;
        }


        
        
    }

    
}

let d = new Deck();




function reading(){
    var reading = d.cross();



    var readingList = [];
    for (let i = 1; i < 11; i++){

        //we store the card name in a variable

        var cardName = reading[i-1];
        readingList.push(`Position ${i}: ${cardName}`);


        //we check if we have a reversed card or not and style accordingly
        //we generate the card path from the card name without the "reversed" part
        let pattern = / reversed/g;
        let cardPath = cardName.replace(pattern,'')
        var img = document.createElement('img');
        img.setAttribute("id", "TarotPic");
        img.src = `images/${cardPath}.jpg`

        
        if (pattern.test(cardName) == true){
            img.style.transform = "rotateY(180deg) rotateX(180deg)";
        }

        console.log(img.src)
        document.getElementById(`pos${i}`).appendChild(img);
        document.getElementById(`line${i}`).textContent=readingList[i-1];

    }
    //let List =  readingList.join("\r\n");
    //document.getElementById('theReading').textContent = List;

}






function empty(element) {
    //with this function we empty out site from previous reading
    element.innerHTML = ""; 
 }



var timesClicked = 0;

function WhichClick() {
    timesClicked++;

    if (timesClicked>1) {
        for (let i = 1; i < 11; i++){
            let parent = document.getElementById(`pos${i}`);
            let line = document.getElementById(`line${i}`);
            empty(parent);
            empty(line);
            
        }
    } 
}