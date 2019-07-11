class DealerHand extends Hand{

       
    constructor(id){
        let cardDiv = document.querySelector('.dealers-cards')
        let totalDiv = document.querySelector('#dealer-total')
        
        super(id, cardDiv, totalDiv)
        this.drawTwo(id)
        
    }

    play(user){
        if(this.total <= 17){
            this.hit().then(()=>{
                if(this.total <= 17){
                    this.play(user)
                }else {
                    user.winCheck()
                    
                }
            })
        } else {
            user.winCheck()
            
        }
    }

}