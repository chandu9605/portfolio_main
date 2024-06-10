import React from 'react';
//import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {

  faGithub,

} from '@fortawesome/free-brands-svg-icons'


const Projects = () => { 
    //const navigate = useNavigate();

    // const handleProjectClick = (projectId) => {
    //   navigate(`/projects/${projectId}`);
    // };

    return (
        <section className='bg-black text-white px-5 py-20 ' id='project'>
            <div className="container mx-auto pb-6">
                <div className='project-info md:text-left'>
                    <h2 className='text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-teal-500 pb-2'>
                        Projects
                    </h2>
                </div>
            </div>
            <div className="cards container card-container mx-auto grid grid-cols-3 gap-x-4 gap-y-14  pt-6">

                    <div className='bg-white w-96 h-60 rounded-2xl relative transition-transform duration-1000 ease-in-out hover:translate-x-4 hover:-translate-y-4  '>  {/*onClick={() => handleProjectClick(1)}*/}
                        <header>
                            <div className="project-name text-black px-5 pt-8 text-lg font-bold">
                                Attendance Management
                            </div>
                            <a href='https://github.com/chandu9605/project-final'  style={{fontSize:"30px"}}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                />
                            </a>
                            <div className="high-idea text-black px-5 "> Developed a "Attendance Management System" between professor and stundents which generates a random code which is used by the students to give attendnance.</div>
                        </header>
                        <footer className=''>
                            <div className='text-black text-xs opacity-60 flex px-5 pt-5'>
                                <ul className='flex space-x-4'>
                                    <li>EJs</li>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                    <div className='bg-white w-96 h-60 rounded-2xl relative transition-transform duration-1000 ease-in-out hover:translate-x-4 hover:-translate-y-4  '>  {/*onClick={() => handleProjectClick(1)}*/}
                        <header>
                            <div className="project-name text-black px-5 pt-8 text-lg font-bold">
                                Book Store Web App
                            </div>
                            <a href="https://github.com/chandu9605/BulkyMvc" style={{fontSize:"30px"}}>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    color="#4d4d4e"
                                    className="anchor-icon"
                                />
                            </a>
                            <div className="high-idea text-black px-5 ">A Book Store Web App enables users to browse, purchase, and add books to their cart. Users can also log in or create an account, while administrators manage the platform's content. </div>
                        </header>
                        <footer className='' >
                            <div className='text-black text-xs opacity-60 flex px-5 pt-5'>
                                <ul className='flex space-x-4'>
                                    <li>HTML</li>
                                    <li>C#</li>
                                    <li>JavaScript</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                    
            </div>

            <div className=' more flex justify-center items-center py-28'> {/*nedd to modify padding when more projects are added*/}
                <a href="https://github.com/chandu9605" className='border-2 border-teal-500 px-4 py-2'>See More</a>
            </div>
        </section>
    
    )
}

export default Projects
