
import { FaTools } from 'react-icons/fa'; // Importing an icon from react-icons

const Working = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
            <div className="text-center p-6 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-lg">
                <FaTools className="text-6xl mb-4 animate-spin" />
                <h1 className="text-4xl font-bold mb-2">This Page is Under Construction</h1>
                <p className="text-xl">We are working hard to bring you something amazing. Please check back later!</p>
            </div>
        </div>
    );
};

export default Working;
