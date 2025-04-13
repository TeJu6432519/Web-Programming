import React from 'react';

function UserInfo(){
    return(
        <>
        <h4 style={{fontFamily:"sans-serif"}}>
            <p style={{textAlign:"center"}}>
            Tejaswwini SS<br/><br/>
            tejaswwini.ss2023@vitstudent.ac.in<br/><br/>
            Developer | Tech Enthusiast | Problem Solver<br/>
           </p>
           
           <div style={{fontFamily:"sans-serif",padding:"20px",backgroundColor:"rgba(128, 128, 128, 0.6)",borderRadius:"20px",margin:"200px",marginTop:"50px"}}>
           I am a passionate developer with experience in React, JavaScript, and full-stack development. I enjoy building clean, efficient, and user-friendly applications while constantly learning new technologies.
            <ul style={{fontFamily:"sans-serif",backgroundColor:"rgba(158, 128, 148, 0.6)",padding:"20px",borderRadius:"20px"}}>
                <li style={{fontFamily:"sans-serif",backgroundColor:"rgba(128, 128, 128, 0.0)",marginLeft:"30px"}}>Tech Stack: React, JavaScript, HTML, CSS, Node.js</li>
                <li style={{fontFamily:"sans-serif",backgroundColor:"rgba(128, 128, 128, 0.0)",marginLeft:"30px"}}>Interests: Web development, UI/UX design, and automation</li>
                <li style={{fontFamily:"sans-serif",backgroundColor:"rgba(128, 128, 128, 0.0)",marginLeft:"30px"}}>Projects: Currently working on virtualization setups and boot loader implementation</li>
            </ul>
            When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, or solving real-world tech problems.
           </div>
            
        </h4>
        </>
    );
}

export default UserInfo;