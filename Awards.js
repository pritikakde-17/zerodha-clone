import React from 'react'
function Awards() {
    return ( 
       <div className='container mt-5 mb-5'>
        <div  className='row text-center'>
           
        <div className='col-6 p-5 mt-3'>
              <img src='media/largestBroker.svg'></img>

        </div>
        <div className='col-6 mt-3'>
            <h1 className='ml-3'>Largest Stock In India</h1>
            <p className='mb-5'> 2+ million zarodha clients contribute to over 15% of all the volume in india daily by trading and investing in:
            </p>
            <div className='row'>
                <div className='col-6'>
                 <ul>
                <li>
                    <p>Futures and Options</p>
                </li>
                 <li>
                    <p>Commodity derivatives</p>
                </li>
                 <li>
                    <p>Currency derivatives</p>
                </li>
            </ul>
            </div>
            < div className='col-6'>
            <ul>
                <li>
                    <p>Stock & IPOS</p>
                </li>
                 <li>
                    <p>Direct mutual funds</p>
                </li>
                 <li>
                    <p>Bond and gov </p>
                </li>
            </ul>
        </div>
        </div>
        <img src='media/pressLogos.png'style={{width:"80%"}}></img>
        </div>
        </div>
       </div>
     );
}

export default Awards ;