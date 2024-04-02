import React from 'react'
import Header from '../components/Header'

const LoginScreen = () => {
    return (
        <>
        <Header />
        
        
            <div className="body">
                {/* import a react bootstrap container for the control and display to aid responsiveness, use Row and Col */}
                <section className="control-keys">
                    <div className='container'>
                        <div>Start</div>
                        <div>Stop</div>
                        <div>Status</div>
                    </div>
                    <div className='container'>
                        <div>Inch</div>
                        <div></div>
                        <div>Rvrs</div>
                    </div>
                </section>
            </div>

            <footer>
                {/* holds stanley inc as footer check brad footers component  */}
            </footer>
        
        </>
    )
}

export default LoginScreen