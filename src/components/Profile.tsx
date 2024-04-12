import React from 'react';

const ProfilePage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full md:w-3/4 lg:w-2/4">
                <div className="flex items-center justify-center">
                    <img
                        className="h-20 w-20 rounded-full object-cover"
                        src="https://randomuser.me/api/portraits/women/75.jpg"
                        alt="Profile"
                    />
                </div>
                <div className="text-center mt-4">
                    <h2 className="text-xl font-semibold">John Doe</h2>
                    <p className="text-gray-500">Web Developer</p>
                </div>
                <div className="mt-6">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Email:</span>
                        <span className="font-semibold">john.doe@example.com</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-gray-500">Phone:</span>
                        <span className="font-semibold">+123 456 7890</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span className="text-gray-500">Location:</span>
                        <span className="font-semibold">New York, USA</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
