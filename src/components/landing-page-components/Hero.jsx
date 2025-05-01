import React from 'react'
import Nav from '../Nav'
import './Hero.css'

export default function Hero() {
    return (
        <div>
            <Nav />
            <div className='hero shadow-sm'>
                <div className="left_side">
                    <div className="hero_item1">
                        <p className="lefttext">تعلم</p>
                        <img src="/imgs/learn.png" alt="hero" className='leftimg' />

                    </div>
                    <img src="/imgs/flower1.png" alt="hero" className='leftflower1' />
                    <div className="hero_item2">
                        <p className="lefttext">اعرض</p>
                        <img src="/imgs/store.png" alt="hero" className='leftimg' />
                    </div>
                    <img src="/imgs/flowe2.png" alt="hero" className='leftflower2' />
                    <div className="hero_item3">
                        <p className="lefttext">بيع</p>
                        <img src="/imgs/sell.png" alt="hero" className='leftimg' />
                    </div>

                </div>
                <div className="right_side">
                    <img src="/imgs/logo.png" alt="hero" className='hero_logo' />
                    <h4 className='hero_title'>لكل المهتمين بمجال الحرف اليدوية</h4>
                </div>

            </div>

        </div>
    )
}
