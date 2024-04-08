import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Entrepreneur.css";

export const CompanyXPage = () => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [mediaItems, setMediaItems] = useState([]);
    const [mediaFile, setMediaFile] = useState(null);
    const [mediaTitle, setMediaTitle] = useState("");

    const handleAddMedia = () => {
        if (mediaFile && mediaTitle) {
            const newMediaItem = {
                file: URL.createObjectURL(mediaFile),
                title: mediaTitle,
                type: mediaFile.type.startsWith('image') ? 'image' : 'video',
            } 
            setMediaItems([...mediaItems, newMediaItem]);
            setMediaFile(null);
            setMediaTitle("");
        } else {
            alert("Please select a media file and enter a title.");
        }
    };

    const handleMediaFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setMediaFile(file);
        }
    };

    // const handleAuthentication = () => {
    //     navigate("/authentication");
    // };

    const handleReviews = () => {
        navigate("/createbusinessreview");
    };

    return (
        <div className="company-x-page">
            <div className="div">
                <div className="overlap">
                    <div className="company-name">Company X</div>
                </div>
                <button className="add-media-button" onClick={() => setShowForm(true)}>Add Media</button>
                <button className="reviews" onClick={handleReviews}>Reviews</button>
            </div>
            {showForm && (
                <div className="add-media-form">
                    <h2>Add Media</h2>
                    <input
                        type="file"
                        accept="image/*, video/*"
                        onChange={handleMediaFileChange}
                    />
                    <input
                        type="text"
                        placeholder="Media Title"
                        value={mediaTitle}
                        onChange={(e) => setMediaTitle(e.target.value)}
                    />
                    <button onClick={handleAddMedia}>Add Media</button>
                    <button onClick={() => setShowForm(false)}>Cancel</button>
                </div>
            )}
            <div className="media-items">
                {mediaItems.map((media, index) => (
                    <div key={index} className="media-item">
                        {media.type === 'image' ? (
                            <img src={media.file} alt={media.title} />
                        ) : (
                            <video controls src={media.file} alt={media.title} />
                        )}
                        <div>{media.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};