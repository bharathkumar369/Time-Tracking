// import React from "react";
// import jsonData from "./data.json"

// const TimeTracking = () => {

//     const [timeFrame,setTimeFrame] = React.useState("daily");

//     const [data,setData] = React.useState([]);

//     React.useEffect(() =>{
//        setData(jsonData) 
//     },[]);

//     const daily = () => {
//         setTimeFrame("daily")
//     }

//     const weekly = () => {
//         setTimeFrame("weekly")
//     }

//     const monthly = () => {
//         setTimeFrame("monthly")
//     }

//     const changeDaily = () => {
//         if(data.title === "work"){
//            return [data].timeframes[setTimeFrame]
//         }
//     }

//     return(   

//     <div className='main-div'>

//         <div className="left-div">
//             <div className="left-div-top">
//                 <div>
//                     <img src="../../images/image-jeremy.png" alt="" className="image"/>
//                 </div>
//                 <div>
//                     <p className="assign">Report for</p>
//                     <h1 className="name">Jeremy Robson</h1>
//                 </div>
//             </div>
//             <div className="left-div-bottom">
//                 <div> <p className="estimation" onClick={daily}>Daily</p></div>
//                 <div> <p className="estimation" onClick={weekly}>Weekly</p></div>
//                 <div> <p className="estimation" onClick={monthly}>Monthly</p></div>              
//             </div>
//         </div>

//         <div className="side-div-container">

//             <div className="side-above">
//                 <div className="side-above-1">
//                     <div className="side-top-1">
//                         <div>
//                             <img src="../../images/icon-work.svg" alt="" className="icon"/>
//                         </div>             
//                     </div>
//                     <div className="side-top-below-1">
//                         <div>
//                             <div className="ellipsis-div">
//                                 <p>Work</p>
//                                 <img src="../../images/icon-ellipsis.svg" alt="" className="dots"/>
//                             </div>
//                             <div>
//                                 <p className="total-hrs">{changeDaily} hrs</p>
//                                 <p className="last-seen">Last seen </p>
//                             </div>                        
//                         </div>                                        
//                     </div>
//                 </div>
//                 <div className="side-above-1">
//                     <div className="side-top-2">
//                         <div>
//                             <img src="../../images/icon-play.svg" alt="" className="icon"/>
//                         </div>             
//                     </div>
//                     <div className="side-top-below-2">
//                         <div>
//                             <div className="ellipsis-div">
//                                 <p>Play</p>
//                                 <img src="../../images/icon-ellipsis.svg" alt="" className="dots"/>
//                             </div>
//                             <div>
//                                 <p className="total-hrs">{} hrs</p>
//                                 <p className="last-seen">Last seen - {} hrs </p>
//                             </div>                        
//                         </div>  
//                     </div>
//                 </div>
//                 <div className="side-above-1">
//                     <div className="side-top-3">
//                         <div>
//                             <img src="../../images/icon-study.svg" alt="" className="icon"/>
//                         </div>             
//                     </div>
//                     <div className="side-top-below-3">
//                         <div>
//                             <div className="ellipsis-div">
//                                 <p>Study</p>
//                                 <img src="../../images/icon-ellipsis.svg" alt="" className="dots"/>
//                             </div>
//                             <div>
//                                 <p className="total-hrs">{} hrs</p>
//                                 <p className="last-seen">Last seen - {} hrs </p>
//                             </div>                        
//                         </div>  
//                     </div>
//                 </div>
//             </div>
//             <div className="side-below">
//                 <div className="side-above-1">
//                     <div className="side-below-1">
//                         <div>
//                             <img src="../../images/icon-exercise.svg" alt="" className="icon"/>
//                         </div>             
//                     </div>
//                     <div className="side-bottom-below-1">
//                         <div>
//                             <div className="ellipsis-div">
//                                 <p>Exercise</p>
//                                 <img src="../../images/icon-ellipsis.svg" alt="" className="dots"/>
//                             </div>
//                             <div>
//                                 <p className="total-hrs">{} hrs</p>
//                                 <p className="last-seen">Last seen - {} hrs </p>
//                             </div>                        
//                         </div>  
//                     </div>
//                 </div>
//                 <div className="side-above-1">
//                     <div className="side-below-2">
//                         <div>
//                             <img src="../../images/icon-social.svg" alt="" className="icon"/>
//                         </div>             
//                     </div>
//                     <div className="side-bottom-below-2">
//                         <div>
//                             <div className="ellipsis-div">
//                                 <p>Social</p>
//                                 <img src="../../images/icon-ellipsis.svg" alt="" className="dots"/>
//                             </div>
//                             <div>
//                                 <p className="total-hrs">{} hrs</p>
//                                 <p className="last-seen">Last seen - {} hrs </p>
//                             </div>                        
//                         </div>  
//                     </div>
//                 </div>
//                 <div className="side-above-1">
//                     <div className="side-below-3">
//                         <div>
//                             <img src="../../images/icon-self-care.svg" alt="" className="icon"/>
//                         </div>             
//                     </div>
//                     <div className="side-bottom-below-3">
//                         <div>
//                             <div className="ellipsis-div">
//                                 <p>Self Care</p>
//                                 <img src="../../images/icon-ellipsis.svg" alt="" className="dots"/>
//                             </div>
//                             <div>
//                                 <p className="total-hrs">{} hrs</p>
//                                 <p className="last-seen">Last seen - {} hrs </p>
//                             </div>                        
//                         </div>  
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>       
//     )
// }
// export default TimeTracking;






///////////////////////////----- Revised Version ------///////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import jsonData from "./data.json"

const TimeTracking = () => {

    const [timeFrame,setTimeFrame] = React.useState("daily");

    const [data,setData] = React.useState([]);

    React.useEffect(() =>{
       setData(jsonData) 
    },[]);

    const daily = () => {
        setTimeFrame("daily")
    }

    const weekly = () => {
        setTimeFrame("weekly")
    }

    const monthly = () => {
        setTimeFrame("monthly")
    }

    const backgroundColors = ["hsl(15, 100%, 70%)","hsl(195, 74%, 62%)",
            "hsl(348, 100%, 68%)","hsl(145, 58%, 55%)","hsl(264, 64%, 52%)",
        "hsl(43, 84%, 65%)"]

    return(   

    <div className='main-div'>

        <div className="left-div">
            <div className="left-div-top">
                <div>
                    <img src="../../images/image-jeremy.png" alt="" className="image"/>
                </div>
                <div>
                    <p className="assign">Report for</p>
                    <h1 className="name">Jeremy Robson</h1>
                </div>
            </div>
            <div className="left-div-bottom">
                <div> <p className="estimation" onClick={daily}>Daily</p></div>
                <div> <p className="estimation" onClick={weekly}>Weekly</p></div>
                <div> <p className="estimation" onClick={monthly}>Monthly</p></div>              
            </div>
        </div>

        <div className="side-div-container">
            {data.map((item,index) => (
                <div className="side-above-1" >
                    <div className="side-top-above" key={index} style={{ backgroundColor: backgroundColors[index % backgroundColors.length] }}>
                        <div>
                            <img src={`../../images/icon-${item.title.toLowerCase()}.svg`} alt="" className="icon"/>
                        </div>
                    </div>

                    <div className="side-top-below-1">
                         <div>
                            <div className="ellipsis-div">
                               <p>{item.title}</p>
                               <img src="../../images/icon-ellipsis.svg" alt="" className="dots"/>
                           </div>
                            <div>
                               <p className="total-hrs">{item.timeframes[timeFrame].current} hrs</p>
                                <p className="last-seen">Last seen - {item.timeframes[timeFrame].previous} hrs </p>
                           </div>                        
                       </div>                                        
                    </div>
                </div>
            ))}
        </div>
    </div>       
    )
}
export default TimeTracking;