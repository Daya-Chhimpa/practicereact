import React, { useState } from 'react'

const HocComponent = (Warapdcomponent) => {
    const GunShot =(props)=>{
        const [gunShot,setGunShot]=useState(0)

    const countshotFun =()=>{
        setGunShot(gunShot+1)
    }
        return(
            <Warapdcomponent gunShot={gunShot} countshotFun={countshotFun}  gun="AK 56"/>
        )

    }
    return GunShot;

}

export default HocComponent