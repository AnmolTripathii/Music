"use client"
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description: 
        'Embark on a musical journey that\'s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    },
    {
      title: 'Unleash Your Musical Potential: Tailored Lessons for Every Skill Level',
      description: 
        'Whether you\'re a beginner or an advanced musician, our tailored lessons are designed to help you reach your full potential. With experienced instructors and a supportive community, you\'ll find the perfect environment to thrive musically.',
    },
    {
      title: 'Innovative Techniques and Modern Methods: Stay Ahead in Music',
      description: 
        'Stay ahead in the ever-evolving world of music with our innovative techniques and modern teaching methods. Our curriculum is constantly updated to reflect the latest trends and advancements, ensuring you receive the most relevant and effective instruction.',
    },
    {
      title: 'Perform with Confidence: Build Your Stage Presence',
      description: 
        'Gain the confidence to perform on any stage with our performance-focused training. From mastering stage presence to perfecting your technique, our comprehensive approach prepares you for a variety of performance opportunities.',
    },
    {
      title: 'Join a Vibrant Musical Community: Connect and Collaborate',
      description: 
        'Join a vibrant community of musicians who share your passion. Our school offers numerous opportunities to connect and collaborate with fellow students, participate in ensembles, and perform in recitals, fostering a rich and dynamic musical experience.',
    }
  ];
  
function WhyChooseUs() {
  return (
    <div className="flex justify-center">
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs