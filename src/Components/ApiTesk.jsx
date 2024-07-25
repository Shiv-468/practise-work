import React, { useEffect, useState } from "react";

const ApiTesk = () => {
    const [dogImage, setDogImage] = useState(null);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random/5")
            .then((response) => response.json())
            .then((data) => setDogImage(data.message));
    }, []);
    return (
        <section className="pt-5">
            <h2>Api Task</h2>


            <div className="App">
                {dogImage &&
                    dogImage.map((dog) => (
                        <img width={"300px"} height={"200px"} src={dog}></img>
                    ))}
            </div>
        </section>
    );
};

export default ApiTesk;