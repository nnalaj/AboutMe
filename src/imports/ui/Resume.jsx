import React from "react";

//TODO:
//add resume details and have them output in a block on the screen
//add headshot or something
//maybe add icons to social links
//style the thing (working on)

const Resume =() => {
        
const resumeData = {
        summary:"Current Winthrop student studying Digital Information and Web Application Design looking to start a career in web application development.",
        summary2: "/t Winthrop University has provided me with strong foundational knowledge of web design concepts and my time at York Technical College yielded an intermediate understanding of object oriented languages (Java and C#).",
        summary3: "I am looking to apply and sharpen these skills to start my career developing exciting software. Expected to graduate in Spring 2024. ",
        skills:  ["./logos/c#.png", "./logos/CSS.png", "./logos/html.png","./logos/java.png","./logos/JS.png","./logos/mongodb.png","./logos/sql.png"],
        work: " ",
        github: "https://github.com/nnalaj",
        ig: "https://instagram.com/nnnalaj", 
        email: "jalannlittle923@gmail.com ", 
     }

    return(
        <div className='resumeBlock'>
            <div className='resumeContent'>
                <h2 className="resumeHeader">Jalann Little</h2>
                <a href = "mailto:jalannlittle923@gmail.com" className="resumeHeaderEmail">{resumeData.email}</a>
                <p className="resumeSummary"> I NEED A JOB </p>
                    <div>
                        {/* <h2>Skills:</h2> */}
                        <hr/>
                        <table className = "skillsTable">
                            <tr>
                                <th>Web Developer</th>
                                <th>Database</th>
                                <th>Object Oriented</th>
                            </tr>
                        </table>
                    </div>
                    <div className="resumeFooter">
                        <a href = {resumeData.github}>github </a>|<a href = {resumeData.email}>email me</a>
                    </div>
            </div>
        </div>
    )
}

export default Resume;