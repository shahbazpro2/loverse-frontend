import React from 'react';

import Image from 'next/image';
import styles from '../ui/profile.module.css';

const ImageGrid = ({ images }) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 p-6 lg:p-0 sm:grid-cols-2  lg:grid-cols-6 gap-6 ">
    {images.map((imageName, index) => (
      <div key={index} className={styles.image_item}>
          <Image src={`/images/${imageName}`} alt={`Image ${index + 1}`} width={200} height={500}  className="mb-5" />
      </div>
    ))}
  </div>
  );
};

export default ImageGrid;