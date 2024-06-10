import React,{useEffect} from 'react'
import TagCloud from 'TagCloud'
import './About.scss';

function About() {
    useEffect(() => {
        const container = ".tagcloud";
        const texts = [
          "ASP.NET MVC,",
          "Angular,",
          "Entity Framework,",
          "ASP.NET",
          "Redis",
          "ASP.NET Core",
          "SQL Server",
          "NoSQL",
          "Oracle",
          "MYSQL",
          "T-SQL",
          "PostgreSQL",
          "PL/SQL",
          "NUnit",
          "Moq",
          "Selenium",
          "Junit",
          "Docker",
          "Kubernetes",
          "Azure",
          "AWS",
          "C#",
          "NET Framework/Core",
          "HTML",
          "CSS",
          "BootStrap",
          "C++",
          "C",
          "Java",
          "NodeJS",
          "JavaScript",
          "Profiling tools",
          "Optimization Techniques",
          "Github",
          "JSON",
          "PowerBI",
          "Apache",
          "Tomcat",
          "LDAP",
          "ReactJS",
          "JQuery",
          "Jira",
          "REST API",
        ];
      
        let tagCloudInstance = null; // Variable to store the TagCloud instance
      
        const updateTagCloud = () => {
          const screenWidth = window.innerWidth;
          const radius = screenWidth >= 768 ? 300 : 170; // Adjust the breakpoint as needed
      
          const options = {
            radius: radius,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
          };
      
          if (tagCloudInstance) {
            tagCloudInstance.destroy(); // Destroy the previous instance
          }
      
          tagCloudInstance = TagCloud(container, texts, options);
        };
      
        updateTagCloud(); // Initial setup
      
        window.addEventListener("resize", updateTagCloud); // Update on window resize
      
        return () => {
          window.removeEventListener("resize", updateTagCloud);
          if (tagCloudInstance) {
            tagCloudInstance.destroy(); // Cleanup the TagCloud instance
          }
        };
      }, []);
      
    return (
        <section className='bg-black text-white px-5 py-20 md:py-32' id='about'>
            <div className="aboutc container mx-auto grid md:grid-cols-2 justify-center md:justify-between">
                <div className='text-shpere mr-auto md:mr-28 mt-0 md:-mt-16 '>
                  <span className="tagcloud"></span>
                </div>
                <div className='about-info'>
                    <h2 className='text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-teal-500 pb-2'>
                        About Me
                    </h2>
                    <p align='justify' className='pb-5 pt-6'>
                      I'm a passionate <span className='text-teal-500'>Software Developer</span> with a background in computer science from R.M.D. Engineering College and a Master's from SUNY Binghamton University. I bring expertise in ASP.NET MVC, Docker, Kubernetes, and more, honed through internships and professional roles.
                    </p>
                    <p align='justify' className='pb-5'>
                    With a knack for <span className='text-teal-500'>optimization</span> and <span className='text-teal-500'>automation</span>. I've consistently delivered solutions that enhance efficiency and reliability. I'm adept at mentoring teams, communicating complex ideas, and staying abreast of emerging technologies.
                    </p>
                    <p align='justify' className='pb-5'>
                    Throughout my professional trajectory, I've showcased a fervent drive for overcoming <span className='text-teal-500'>intricate challenges</span> and <span className='text-teal-500'>delivering meaningful outcomes</span>. My ability to communicate complex technical concepts in a clear and concise manner has been instrumental in fostering collaboration and driving project success.
                    </p>
                    <p align='justify'>
                    I am actively seeking job opportunities where I can contribute, expand my skill set, and advance professionally. If you have a fitting opportunity that aligns with my expertise and experience, please feel free to reach out to me. I welcome any inquiries or discussions regarding potential collaborations. You can <a href='#contact' className='text-teal-500 cursor-pointer border-b'>contact me</a> me at any time..
                    </p>
    
                </div>
            </div>
        </section>
    
    )
}


export default About
