"use client"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description: 'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description: 'Learn the craft of songwriting from experienced composers and lyricists.',
      slug: 'the-art-of-songwriting',
      isFeatured: false,
    },
    {
      title: 'Mastering Performance Techniques',
      description: 'Improve your stage presence and performance skills with expert guidance.',
      slug: 'mastering-performance-techniques',
      isFeatured: false,
    },
    {
      title: 'Advanced Music Production',
      description: 'Explore advanced techniques in music production to elevate your tracks.',
      slug: 'advanced-music-production',
      isFeatured: true,
    },
    {
      title: 'Music Business Essentials',
      description: 'Gain insights into the music industry and learn essential business skills.',
      slug: 'music-business-essentials',
      isFeatured: false,
    },
    {
      title: 'Improvisation Mastery',
      description: 'Unlock your creativity and master the art of musical improvisation.',
      slug: 'improvisation-mastery',
      isFeatured: true,
    },

  ];
function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Mucial Journey</p>
            </div>
            <div className="mt-10">
                <HoverEffect items={featuredWebinars.map((webinar)=>(
                    {
                        title:webinar.title,
                        description:webinar.description,
                        link:'/'
                    }
                ))}/>
            </div>
            <div className="mt-10 text-center">
            <Link href={"/"} className="px-4 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
                    View All Webinars
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars