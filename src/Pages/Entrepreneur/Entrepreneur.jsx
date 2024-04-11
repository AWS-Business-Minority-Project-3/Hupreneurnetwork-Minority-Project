import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { generateClient } from "aws-amplify/api";
import { getBusiness } from "../../graphql/queries";
import "./Entrepreneur.css";

const client = generateClient();

const CompanyXPage = () => {
    const navigate = useNavigate();
    const { businessId } = useParams(); // Extract businessId from URL params
    const [businessData, setBusinessData] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [mediaItems, setMediaItems] = useState([]);
    const [mediaFile, setMediaFile] = useState(null);
    const [mediaTitle, setMediaTitle] = useState("");

    useEffect(() => {
        fetchBusinessData();
    }, [businessId]);

    async function fetchBusinessData() {
        try {
            const apiBusinessData = await client.graphql({ query: getBusiness, variables: { id: businessId } });
            const business = apiBusinessData.data.getBusiness;
            setBusinessData(business);
        } catch (error) {
            console.error("Error fetching company data", error);
        }
    };

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

    const handleReviews = () => {
        navigate("/createbusinessreview");
        // navigate(`/entrepreneur/${businessId}/reviews`);
    };

    return (
        <div className="company-x-page">
            {businessData && (
                <div className="div" style={{ backgroundImage: `url(${businessData.businessImagePath})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="overlap">
                        <div className="company-name">{businessData.name}</div>
                    </div>
                    <button className="add-media-button" onClick={() => setShowForm(true)}>Add Media</button>
                    <button className="reviews" onClick={handleReviews}>Reviews</button>
                </div>
            )}
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

export default CompanyXPage;