import React from "react";
import Cards from "./cards/Card";
import "./Style.css";
import Button from "./buttons/Btn";
import "./buttons/btn.css";
import Input from "./input/Input";
const Goals = () => {
    return (
        <>
            <div className="continer">
                <div className="heading">
                    <h1>Awesome! Let's find your Goal</h1>
                    <p className="smalltext"> pick from the Options below</p>
                </div>
                <div>
                    <Input />
                </div>
               

                <div className="filter">
                    <p>100 Goals available </p>
                    <i class="fa-light fa-filter"></i>
                </div>
            </div>
            <div className="Line"></div>

            <div className="display">
                <div className="cards">
                    <Cards
                        imgSrc="image.jpg"
                        imgAlt=""
                        icon={<i class="fa-regular fa-bookmark"></i>}
                        title="i love my kidney"
                        description="every thing you need to focuse  on your post operation "
                    />
                    <Cards
                        imgSrc="image.jpg"
                        icon={<i class="fa-regular fa-bookmark"></i>}
                        imgAlt=""
                        title="i love my kidney"
                        description="every thing you need to focuse  on your post operation "
                    />
                    <Cards
                        imgSrc="image.jpg"
                        imgAlt=""
                        icon={<i class="fa-regular fa-bookmark"></i>}
                        title="i love my kidney "
                        description="every thing you need to focuse  on your post operation "
                    />
                </div>
                <div>
                    <Cards
                        imgSrc="image.jpg"
                        icon={<i class="fa-regular fa-bookmark"></i>}
                        imgAlt=""
                        title="i love my kidney"
                        description="every thing you need to focuse  on your post operation "
                    />
                    <Cards
                        imgSrc="image.jpg"
                        imgAlt=""
                        icon={<i class="fa-regular fa-bookmark"></i>}
                        title="i love my kidney"
                        description="every thing you need to focuse  on your post operation "
                    />
                    <Cards
                        imgSrc="image.jpg"
                        imgAlt=""
                        icon={<i class="fa-regular fa-bookmark"></i>}
                        title="i love my kidney"
                        description="every thing you need to focuse  on your post operation "
                    />
                </div>
                <div>
                    <Cards
                        imgSrc="image.jpg"
                        imgAlt=""
                        icon={<i class="fa-regular fa-bookmark"></i>}
                        title="i love my kidney"
                        description="everything you need to focuse  on your post operation "
                    />
                    <Cards
                        imgSrc="image.jpg"
                        imgAlt=""
                        icon={<i class="fa-regular fa-bookmark"></i>}
                        title="i love my kidney"
                        description="everything you need to focuse  on your post operation "
                    />
                    <Cards
                        imgSrc="image.jpg"
                        imgAlt=""
                        icon={<i class="fa-regular fa-bookmark"></i>}
                        title="i love my kidney"
                        description="everything you need to focuse  on your post operation "
                    />
                </div>
            </div>
            <div className="btnvalue">
                <Button
                    className="previous"
                    value={<i class="fa-solid fa-chevron-left"></i>}
                />
                <Button value={1}  />
                <Button value={2} />
                <Button value={3} />
                <Button value={4} />
                <Button 
                    className="next"
                    value={<i class="fa-solid fa-chevron-right"></i>}
                />
            </div>
        </>
    );
};

export default Goals;
