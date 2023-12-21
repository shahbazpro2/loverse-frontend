// pages/profile.js
import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ImageGrid from '../components/ImageGrid';
import styles from '../ui/profile.module.css';

const ProfilePage = () => {
    const username = 'Ariana Grande';
    const plan = 'Entry Level';
    const email = 'ariangrande@gmail.com';
    const credits = '100';
    const images = ['image1.png', 'image2.png', 'image3.png','image4.png','image5.png','image6.png','image7.png','image8.png','image9.png','image10.png']; // Array of image URLs

  return (
    <div className='bg-gray-900 min-h-screen'>
    <ProfileHeader username={username} plan={plan}  email={email} credits={credits}/>
    <div className="max-w-7xl mx-auto">
        <h1 className={styles.title}>My Generated Image</h1>
    </div>
    <ImageGrid images={images} />
    </div>
  );
};

export default ProfilePage;