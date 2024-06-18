import React from 'react';
import Link from 'next/link';

interface VideoCardProps {
    id: string;
    title: string;
    description: string;
    youtubeId: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, title, description, youtubeId }) => {
    const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

    return (
        <Link href={`/videos/${id}`} passHref>
            <div className="block transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-out cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:bg-gray-50 h-full flex flex-col">
                <div className="flex-shrink-0">
                    <img src={thumbnailUrl} alt={title} className="w-full h-48 object-cover" />
                </div>
                <div className="flex flex-col p-4 flex-grow">
                    <h2 className="font-semibold text-xl text-gray-800">{title}</h2>
                    <span className="mt-auto text-gray-800 text-right text-xs">Watch Now</span>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
