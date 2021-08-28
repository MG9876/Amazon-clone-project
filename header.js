  // snapshot helps in auto refreshing or autoloading changes on web page its a ((snapshot is a websocket))
      // EventListner helps in auto loading changes 
// EventListner listens to any changes in database

function getCartItems() {
    db.collection("cart-items").onSnapshot((Snapshot) => {
        let totalCount = 0;
     Snapshot.forEach((doc)=>{
            totalCount += doc.data().quantity;

        })
       setCartCounter(totalCount);
    })
}

function setCartCounter(totalCount){

    document.querySelector(".cart-item-number").innerText =totalCount

}

getCartItems();