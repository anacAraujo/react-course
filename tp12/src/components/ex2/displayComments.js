import {useState} from "react";
import AddComment from "./addComment";

function DisplayComments() {
   
    const [comments, setComments] = useState([]);

    //creiar um novo array a custa do primriro mais o novo
    function add(newComment) {
        setComments([...comments, newComment]);
        console.log(comments);
    }

    if (comments.length > 0) {
        let display = comments.map((comment) => {return (<li>{comment}</li>)})
        return (
            <div>
                <h3>Comments:</h3>
                <ul>
                    {display}
                </ul>
                <AddComment add={add}></AddComment>
            </div>
        )
    } else {
        return (
            <div>
                <AddComment add={add}></AddComment>
            </div>
        )
    }
}

export { DisplayComments };
