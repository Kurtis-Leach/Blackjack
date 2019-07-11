

const newDeck = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'



document.addEventListener('DOMContentLoaded', ()=>{
    


    let startBtn = document.getElementById('start')
    let hitBtn = document.getElementById('hit')
    let stayBtn = document.getElementById('stay')
    let total = document.getElementById('total')
    let dealerTotal = document.getElementById('dealer-total')
    let winAlert = document.querySelector('#winner')
    
   
    
    preGameGif()
    preGameGif()
    preGameGif()

    

    let user; //grabs instance of UserHand
    let dealer;
    
    hitBtn.style.display = 'none'
    stayBtn.style.display = 'none'
    total.style.display = 'none'
    dealerTotal.style.display = 'none'
    
   

    startBtn.addEventListener('click', ()=>{
        let gifs = document.querySelectorAll('.gifs')
        gifs.forEach( gif => gif.remove())
        winAlert.innerText = ''
        hitBtn.style.display = 'inline'
        stayBtn.style.display = 'inline'
        getDeck(newDeck).then((deck)=> {
            dealer = new DealerHand(deck.deck_id)
            user = new UserHand(deck.deck_id, dealer, stayBtn)
        })

    })

    hitBtn.addEventListener('click', ()=>{
        user.hit()
    })

    stayBtn.addEventListener('click', ()=>{
        console.log('CLIICIICIKCKK')
        user.stay()
        hitBtn.style.display = 'none'
        stayBtn.style.display = 'none'
    })



    
})



function getDeck(deckUrl){
let fet = fetch(deckUrl)
    .then(rsp => rsp.json())
   return fet
}  
        


function dealCards(url, num){
    let address = url + num
    fetch(address)
    .then(rsp => rsp.json())
    .then(result => {
        console.log(result)
    })
}
function preGameGif(){
    let gif = document.createElement('img')
    gif.src = 'https://camo.githubusercontent.com/01ee857f12b45ddd41369434b2954ba463c5b29e/687474703a2f2f7374617469632e76656c76657463616368652e6f72672f70616765732f323031382f30362f31332f70617274792d676f706865722f70617274792d676f706865722e676966'
    gif.className = 'gifs'
    let gifDiv = document.querySelector('.pregame')
    gifDiv.append(gif)
}