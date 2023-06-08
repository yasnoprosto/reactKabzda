import React, {useState} from "react";
import {Star} from "./Star";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5;
}

export const Rating = (props: RatingPropsType) => {
    console.log("Rating is rendering");

    const [selectedStar, setSelectedStar] = useState<number>(0);

    return (
        <div>
            <Star selected={selectedStar > 0} /><button onClick={() => {setSelectedStar(1)}}>1</button>
            <Star selected={selectedStar > 1} /><button onClick={() => {setSelectedStar(2)}}>2</button>
            <Star selected={selectedStar > 2} /><button onClick={() => {setSelectedStar(3)}}>3</button>
            <Star selected={selectedStar > 3} /><button onClick={() => {setSelectedStar(4)}}>4</button>
            <Star selected={selectedStar > 4} /><button onClick={() => {setSelectedStar(5)}}>5</button>
        </div>
    );
};
// }