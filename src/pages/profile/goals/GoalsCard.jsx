// import React from "react";
// import Cards from "./cards/Card";
// import "./Style.css";
// import Button from "./buttons/Pagination";
// import "./buttons/btn.css";
// import Input from "./input/Input";
// import { Link } from "react-router-dom";
// const GoalsCard = () => {
//     return (
//         <>
//             <div className="continer">
//                 <div className="heading">
//                  {/* <Link ><p>&lt;</p></Link> */}
//                     <h1>Awesome! Let's find your Goal</h1>
//                     <p className="smalltext"> pick from the Options below</p>
//                 </div>
//                 <div>
//                     <Input />
//                 </div>

//                 <div className="filter">
//                     <p>100 Goals available </p>
//                     <i class="fa-light fa-filter"></i>
//                 </div>
//             </div>
//             <div className="Line"></div>

//             <div className="display">
//                 <div className="cards">
//                     <Cards
//                         imgSrc="image.jpg"
//                         imgAlt=""
//                         icon={<i class="fa-regular fa-bookmark"></i>}
//                         title="i love my kidney"
//                         description="every thing you need to focuse  on your post operation "
//                     />
//                     <Cards
//                         imgSrc="image.jpg"
//                         icon={<i class="fa-regular fa-bookmark"></i>}
//                         imgAlt=""
//                         title="i love my kidney"
//                         description="every thing you need to focuse  on your post operation "
//                     />
//                     <Cards
//                         imgSrc="image.jpg"
//                         imgAlt=""
//                         icon={<i class="fa-regular fa-bookmark"></i>}
//                         title="i love my kidney "
//                         description="every thing you need to focuse  on your post operation "
//                     />
//                 </div>
//                 <div>
//                     <Cards
//                         imgSrc="image.jpg"
//                         icon={<i class="fa-regular fa-bookmark"></i>}
//                         imgAlt=""
//                         title="i love my kidney"
//                         description="every thing you need to focuse  on your post operation "
//                     />
//                     <Cards
//                         imgSrc="image.jpg"
//                         imgAlt=""
//                         icon={<i class="fa-regular fa-bookmark"></i>}
//                         title="i love my kidney"
//                         description="every thing you need to focuse  on your post operation "
//                     />
//                     <Cards
//                         imgSrc="image.jpg"
//                         imgAlt=""
//                         icon={<i class="fa-regular fa-bookmark"></i>}
//                         title="i love my kidney"
//                         description="every thing you need to focuse  on your post operation "
//                     />
//                 </div>
//                 <div>
//                     <Cards
//                         imgSrc="image.jpg"
//                         imgAlt=""
//                         icon={<i class="fa-regular fa-bookmark"></i>}
//                         title="i love my kidney"
//                         description="everything you need to focuse  on your post operation "
//                     />
//                     <Cards
//                         imgSrc="image.jpg"
//                         imgAlt=""
//                         icon={<i class="fa-regular fa-bookmark"></i>}
//                         title="i love my kidney"
//                         description="everything you need to focuse  on your post operation "
//                     />
//                     <Cards
//                         imgSrc="image.jpg"
//                         imgAlt=""
//                         icon={<i class="fa-regular fa-bookmark"></i>}
//                         title="i love my kidney"
//                         description="everything you need to focuse  on your post operation "
//                     />
//                 </div>
//             </div>
//             <div className="btnvalue">
//                 <Button
//                     className="previous"
//                     value={<i class="fa-solid fa-chevron-left"></i>}
//                 />
//                 <Button value={1}  />
//                 <Button value={2} />
//                 <Button value={3} />
//                 <Button value={4} />
//                 <Button
//                     className="next"
//                     value={<i class="fa-solid fa-chevron-right"></i>}
//                 />
//             </div>
//         </>
//     );
// };

// export default GoalsCard

import React, { useEffect, useState } from "react";
import "./Style.css";
import GoalsCrdList from "./GoalsCrdList";
import Pagination from "./pagination";
import Input from "./input/Input";

const GoalsCard = (props) => {
    const cards = new Array(504).fill({
        imgSrc: "image.jpg",
        imgAlt: "Image",
        title: "i love my kidney",
        icon: <i class="fa-regular fa-bookmark"></i>,
        description: "Everything you need to focus on your post operation care",
    });

    const [cardsData, setcardsData] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [postprepage, setpostprepage] = useState(9);

    useEffect(() => {
        setcardsData(CurrentPost);
    }, []);
    const lastpostindex = currentPage * postprepage;
    const fisrtpostindex = lastpostindex - postprepage;
    const CurrentPost = cards.slice(fisrtpostindex, lastpostindex);
    console.log(cardsData);
    return (
        <div>
            <div className="Heading-continer">
                <button className="Back-Butoon">
                    &lt;
                </button>

                <h1> Awesome! Let's find your Goal.</h1>
                <h5>Pick from the Option below</h5>
            </div>
            <div>
                <Input />
            </div>
            <div className="filter">
                <span>Goals 100</span>
                <span>
                    <i class="fal fa-filter"></i>
                </span>
            </div>
            <center>
                <hr className="horizental-line" />
            </center>
            <div className="main-continer">
                <GoalsCrdList cardsData={CurrentPost} />
            </div>
            <div>
                <Pagination
                    totalPosts={cards.length}
                    PostPerPage={postprepage}
                    setCurrentPage={setcurrentPage}
                />
            </div>
        </div>
    );
};

export default GoalsCard;
