import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics () {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt='laptop' />
                <div className='flex flex-col justify-center '>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl font-bold text-2xl py-2'>Manage Data Analytics Centrally</h1>
                    <p className=''>Velit laborum excepteur magna adipisicing incididunt sit. Magna ipsum exercitation ad esse eiusmod sint exercitation eu ut ut. Ipsum ipsum consectetur incididunt Lorem laborum irure eiusmod et culpa ut. Exercitation tempor nisi quis consequat adipisicing reprehenderit incididunt aute in anim dolor sunt.</p>
                    <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics