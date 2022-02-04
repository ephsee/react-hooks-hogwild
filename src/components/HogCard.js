import React, {useState} from "react";
import HogDetails from "./HogDetails"



function HogCard({ hogs }){
   const [showPig, setShowPig] = useState(false)
   function handleShowPig(){
       setShowPig((showPig)=>!showPig)
   }




   
    
   
    return(
        <>
            {hogs.map(hog=>
            <div className="pigTile"  onClick={handleShowPig} key ={hog.name}>
                <p>{hog.name} </p>
                
                <img className="minPigTile" src ={hog.image} alt={hog.name}></img>
                {showPig?<HogDetails hog = {hog}/>:null}
                
            </div>
            )
            }
        </>
    )
}


export default HogCard;