import React from 'react'

import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
    let workIconStyles = { background: "#37e4db" };
    let schoolIconStyles = { background: "#37e4db" };
  return (
    <section className=' bg-black text-white px-5 py-20 md:py-32 ' id='experience'>
    <div className="container mx-auto pb-6">
        <div className='project-info md:text-left'>
            <h2 className='text-4xl font-bold mb-5 border-b-[4px] w-[180px] border-teal-500 pb-2'>
                Experience
            </h2>

        </div>

        <div className='pt-12'>
            <VerticalTimeline>
                {
                    timelineElements.map(element=>{
                        let isWorkIcon = element.icon ==="work";
                        return(
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName='date'
                                iconStyle={isWorkIcon? workIconStyles : schoolIconStyles}
                                icon={isWorkIcon? <WorkIcon  /> : <SchoolIcon/>}
                            >
                                <h3 className="vertical-timeline-element-title text-black text-2xl font-bold">
                                    {element.title}
                                </h3>

                                <h5 className="vertical-timeline-element-subtitle text-black text-xs font-semibold">
                                    {element.location}
                                </h5>
                                <div dangerouslySetInnerHTML={{ __html: element.description }} id="description" className='text-black'></div>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>

        </div>
    </div>

    </section>
  )
}

export default Experience
