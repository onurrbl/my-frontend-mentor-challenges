import React from 'react'
import Image from 'next/image';
import Thmb1 from './../images/image-product-1-thumbnail.jpg';
import Thmb2 from './../images/image-product-2-thumbnail.jpg';
import Thmb3 from './../images/image-product-3-thumbnail.jpg';
import Thmb4 from './../images/image-product-4-thumbnail.jpg';
import styles from './SlideController.module.scss';

const SlideController = () => {
  return (
    <section className={styles.controllerCtn}>
        <div className="imageCtn"><Image src={Thmb1} width={100} height={100} alt='product thumbnail' /></div>
        <div className="imageCtn"><Image src={Thmb2} width={100} height={100} alt='product thumbnail' /></div>
        <div className="imageCtn"><Image src={Thmb3} width={100} height={100} alt='product thumbnail' /></div>
        <div className="imageCtn"><Image src={Thmb4} width={100} height={100} alt='product thumbnail' /></div>
    </section>
  )
}

export default SlideController