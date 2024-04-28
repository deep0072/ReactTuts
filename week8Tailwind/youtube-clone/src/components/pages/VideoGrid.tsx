import React from 'react'
import YoutubeCard from './YoutubeCard';
const VIDEOS = [
    {
      author: "Mr Beast",
      title: "In 10 Minutes This Room Will Explode",
      timeStamp: "69 days ago",
      views: "69 Mn ",
    },
    {
      author: "Mr Beast2",
      title: "In 10 Minutes This Room Will Explode",
      timeStamp: "69 days ago",
      views: "69 Mn ",
    },
    {
      author: "Mr Beast3",
      title: "In 10 Minutes This Room Will Explode",
      timeStamp: "69 days ago",
      views: "69 Mn ",
    },
    {
      author: "Mr Beast3",
      title: "In 10 Minutes This Room Will Explode",
      timeStamp: "69 days ago",
      views: "69 Mn ",
    },
    {
      author: "Mr Beast3",
      title: "In 10 Minutes This Room Will Explode",
      timeStamp: "69 days ago",
      views: "69 Mn ",
    },
    {
      author: "Mr Beast3",
      title: "In 10 Minutes This Room Will Explode",
      timeStamp: "69 days ago",
      views: "69 Mn ",
    },
    {
      author: "Mr Beast3",
      title: "In 10 Minutes This Room Will Explode",
      timeStamp: "69 days ago",
      views: "69 Mn ",
    },
    {
      author: "Mr Beast3",
      title: "In 10 Minutes This Room Will Explode",
      timeStamp: "69 days ago",
      views: "69 Mn ",
    },
    {
      author: "Mr Beast3",
      title: "In 10 Minutes This Room Will Explode",
      timeStamp: "69 days ago",
      views: "69 Mn ",
    },
  ];

  // grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ==>
  // this means when screen size cross the md (medium) breakpoint then col will be shown 2 and if cross the larger screen
  // size then col will be 4 otherwise col 1
  
const VideoGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
   
    {VIDEOS.map((video) => (
      <div>
        <YoutubeCard title={video.title} author={video.author} timeStamp={video.timeStamp} views={video.views}/>
      </div>
    ))}
  </div>
  )
}

export default VideoGrid