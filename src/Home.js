import React from 'react'
import './home.css';
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container' >
                <img 
                    className='home__image'
                    src='https://cdn.zeebiz.com/sites/default/files/2017/09/20/23943-amazon-official-website.jpg'
                    alt=''
                />
                <div className='home__row'>
                    <Product 
                        id='123'
                        title='Bloodborne - Game of the Year Edition (PS4)' 
                        price={1790.00} 
                        image='https://images-na.ssl-images-amazon.com/images/I/71QCDEEwSgL._SL1500_.jpg'
                        rating={4}
                    />
                    <Product 
                        id='124'
                        title='Dell XPS 13 7390 10th Generation Corei5-1021U 8GB RAM,512GB SSD,13.3" Full HD Windows 10 Laptop' 
                        price={120990.00} 
                        image='https://images-na.ssl-images-amazon.com/images/I/61OBvwVHtQL._SL1280_.jpg'
                        rating={4}
                    />
                    

                </div>

                <div className='home__row'>
                    <Product 
                        id='125'
                        title='Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, Touch Control & Alexa Voice Control – (Silver)' 
                        price={26990} 
                        image='https://images-na.ssl-images-amazon.com/images/I/71a5XAAbzbL._SL1500_.jpg'
                        rating={5}
                    />
                    <Product 
                        id='126'
                        title='Google Pixel 4a (Just Black, 128 GB)  (6 GB RAM)' 
                        price={29999}
                        image='https://rukminim1.flixcart.com/image/416/416/kflftzk0/mobile/h/q/u/google-pixel-4a-ga02099-in-original-imafwyzmnfxzmv5q.jpeg?q=70'
                        rating={4}
                    />
                    <Product 
                        id='127'
                        title='Samsung Galaxy Buds+ (Black)' 
                        price={9490}
                        image='https://images-na.ssl-images-amazon.com/images/I/71nrZHQMZ7L._SL1500_.jpg'
                        rating={4}
                    />
                    
                </div>

                <div className='home__row'>
                    <Product 
                        id='128'
                        title='LG 27 inch 4K-UHD (3840 x 2160) HDR 10 Monitor (Gaming & Design) with IPS Panel, HDMI x 2, Display Port, AMD Freesync  - 27UL500 (Silver Stand with White Body)' 
                        price={28499.00}
                        image='https://images-na.ssl-images-amazon.com/images/I/81U4T6K5wQL._SL1500_.jpg'
                        rating={3}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Home
