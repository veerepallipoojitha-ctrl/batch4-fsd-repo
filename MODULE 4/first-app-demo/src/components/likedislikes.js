import nature from '../nature.jpg';
import { useState } from 'react';

function Likedislikes() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    function like() {
        setLikes(likes + 1);
    }

    function dislike() {
        setDislikes(dislikes + 1);
    }

    return (
        <div>
            <h1>Likes and Dislikes</h1>

            <img src={nature} alt="Nature" />

            <button onClick={like}>
                👍 Like <span>{likes}</span>
            </button>

            <button onClick={dislike}>
                👎 Dislike <span>{dislikes}</span>
            </button>
        </div>
    );
}

export default Likedislikes;

