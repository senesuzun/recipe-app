"use client"
// src/app/videos/[id]/page.tsx
import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import videos from '../../../data/videos.json';


interface VideoProps {
    id: string;
    title: string;
    description: string;
    youtubeId: string;
}

const VideoPage: React.FC = () => {
    const [video, setVideo] = useState<VideoProps | null>(null);

    useEffect(() => {
        // URL'den video ID'sini çıkar
        const path = window.location.pathname;
        const segments = path.split('/');
        const videoId = segments[segments.length - 1]; // URL son segmentini alır

        const foundVideo = videos.find(video => video.id === videoId);
        setVideo(foundVideo || null);
    }, []);

    if (!video) {
        return <div>Video bulunamadı.</div>;
    }

    return (
        <main className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
            <Navbar />
            <div className="container mx-auto p-4 lg:p-8">
                <h1 className="text-5xl font-bold mb-6 text-center lg:text-left">{video.title}</h1>
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full max-w-7xl">
                        <iframe
                            className="w-full aspect-video shadow-2xl rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                            src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&autoplay=1&modestbranding=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="mt-8 w-full max-w-4xl text-center lg:text-left">
                        <h2 className="text-2xl font-semibold mb-4">Description:</h2>
                        <p className="text-lg leading-relaxed">{video.description}</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default VideoPage;
