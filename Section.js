import React from 'react'

function Section() {
    return ( 
        
        <div className='container'>
            <div className='row text-center'>
                <img src='media/homeHero.png' className='mb-5'></img>

                <h1 className='mt-3'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

                <button className='p-3 btn btn-primary fs-5'style={{width:"25%",margin:"0 auto"}}>Sign Up for free</button>
            </div>

        </div>
     );
}

export default Section;