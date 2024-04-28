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