"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicSchoolTestimonials = [
    {
      quote: 'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
      name: 'Alex Johnson',
      title: 'Guitar Student',
    },
    {
      quote: 'The community and support at this school are unmatched. I\'ve grown not just as a pianist, but also as a performer, thanks to their comprehensive programs.',
      name: 'Emily Davis',
      title: 'Piano Student',
    },
    {
      quote: 'The instructors here are not only knowledgeable but also incredibly encouraging. I\'ve gained so much confidence in my abilities.',
      name: 'Michael Lee',
      title: 'Drum Student',
    },
    {
      quote: 'Attending this music school has been a wonderful experience. The personalized lessons and performance opportunities have greatly improved my skills.',
      name: 'Sarah Martinez',
      title: 'Violin Student',
    },
    {
      quote: 'The environment at this school fosters creativity and growth. I\'ve learned so much and made lasting connections with fellow musicians.',
      name: 'David Brown',
      title: 'Vocal Student',
    },
    {
      quote: 'This school offers a unique blend of practical training and theoretical knowledge. It has been instrumental in my development as a musician.',
      name: 'Jessica Smith',
      title: 'Saxophone Student',
    },
    {
      quote: 'The level of dedication and passion from the instructors is truly inspiring. I\'ve improved my technique and performance skills significantly.',
      name: 'Chris Wilson',
      title: 'Trumpet Student',
    },
    {
      quote: 'What I appreciate most is the personalized approach to teaching. The instructors really care about my progress and tailor the lessons to suit my needs.',
      name: 'Olivia Johnson',
      title: 'Flute Student',
    },
    {
      quote: 'Being part of this music school has been a fantastic journey. The collaborative projects and performances have enriched my learning experience.',
      name: 'Daniel Garcia',
      title: 'Cello Student',
    }
  ];
  
function TestimonialCards() {
  return (
    <div className="h-[50rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden ">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices Of Sucess</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards 
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
                />
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards