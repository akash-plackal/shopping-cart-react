import React, { useState } from 'react';
import './thumb.css'

function Thumb() {
    const [up, setUp] = useState(true)
    const toggleUp = () => setUp(!up)
    const styles = { backgroundColor: up ? '#C6FFC1' : '#EE9595' }

    return (
        <h1 style={styles}
            onClick={toggleUp}
            className='Thumb'
        >{up ? '👍🏼' : '👎🏼'}
        </h1>
    )
}

export default Thumb;