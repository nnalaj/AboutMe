import React from "react";
// import csharp from "./logos/CSS.png"

//TODO:
//add resume details and have them output in a block on the screen
//add headshot or something
//maybe add icons to social links
//style the thing (working on)
//skills:  ['./../public/logos/c#.png', "./logos/CSS.png", "./logos/html.png","./logos/java.png","./logos/JS.png","./logos/mongodb.png","./logos/sql.png"],

const Resume =() => {
        
const resumeData = {
        summary:"Current Winthrop student studying Digital Information and Web Application Design looking to start a career in web application development.",
        summary2: "/t Winthrop University has provided me with strong foundational knowledge of web design concepts and my time at York Technical College yielded an intermediate understanding of object oriented languages (Java and C#).",
        summary3: "I am looking to apply and sharpen these skills to start my career developing exciting software. Expected to graduate in Spring 2024. ",
        
        work: " ",
        github: "https://github.com/nnalaj",
        ig: "https://instagram.com/nnnalaj", 
        email: "jalannlittle923@gmail.com ",  
     }



    return(
        <div className='ResumeBlock'>
            <div className='resumeContent'>
                <img className="ResumeImage" />
                <h1>Jalann Little</h1>
                <h2 className="ResumeHeader">
                    <a href = "mailto:jalannlittle923@gmail.com" className="resumeEmail">{resumeData.email}</a>
                <br/>
                </h2>
                {/* <p className="ResumeSummary"> {resumeData.summary} {resumeData.summary2}  </p> */}
                    <div>
                        <h2>Skills:</h2>
                        <table className = "skillsTable">
                            <thead>
                                <h2>
                                <tr className="tableHead">
                                    <th>Web Development</th>
                                    <th>Database</th>
                                    <th>Object Oriented</th>
                                </tr>
                                </h2>
                            <tr>
                                {/* <td><img /> , {resumeData.skills[2]}, {resumeData.skills[4]} </td>    vertical layout with pngs underneath 
                                <td>{resumeData.skills[0]}, {resumeData.skills[3]} </td>
                                <td>{resumeData.skills[5]}, {resumeData.skills[6]} </td> */}
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <h2 className="resumeLinks">
                    <a href = {resumeData.github}>github </a>|<a href = {resumeData.email}>email me</a>
                    </h2>
                {/* <a href = {resumeData.ig}>Insta</a>| */}
            </div>
        </div>
    )
}

export default Resume;