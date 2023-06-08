import React, {useState} from "react";
import {Star} from "./Star";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5;
}

export const Rating = (props: RatingPropsType) => {
    console.log("Rating is rendering");

    const [selectedStar, setSelectedStar] = useState<number>(0);
    const setStarHandler = (value: number) => {
      setSelectedStar(value)
    }



    return (
        <div>
            <Star selected={selectedStar > 0} callback={setStarHandler} value={1}/>
            <Star selected={selectedStar > 1} callback={setStarHandler} value={2}/>
            <Star selected={selectedStar > 2} callback={setStarHandler} value={3}/>
            <Star selected={selectedStar > 3} callback={setStarHandler} value={4}/>
            <Star selected={selectedStar > 4} callback={setStarHandler} value={5}/>
        </div>
    );
};
// }