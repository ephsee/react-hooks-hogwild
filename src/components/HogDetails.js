




 function HogDetails(hog){
       
        console.log(hog.hog.specialty)
        return(
            
                <ul>
                <li>{hog.hog.specialty}</li>
                <li>{hog.hog.weight}</li>
                <li>{hog.hog.greased? "hella greased":"Dry Pig"}</li>
                <li>{hog.hog["highest medal achieved"]}</li>
                
                
                </ul>

            
        )
    }


export default HogDetails