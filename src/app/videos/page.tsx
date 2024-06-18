"use client"
import React, { useEffect, useState } from 'react';

import Navbar from "@/components/Navbar";

import VideoCard from '@/components/VideoCard';

import videos from '@/data/videos.json';



const VideosPage: React.FC = () => {
    return (
        <main className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Video Collection</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {videos.map(video => (
                        <VideoCard
                            key={video.id}
                            id={video.id}
                            title={video.title}
                            description={video.description}
                            youtubeId={video.youtubeId}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default VideosPage;