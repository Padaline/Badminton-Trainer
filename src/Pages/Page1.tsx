import CustomButton from '../customButton';
import React from 'react';
import './Page1.css'

function Page1 () {

    return ( 
    <div className="Page1">
        <h1 className='menuTitle'>MY DRILLS</h1>
        <CustomButton drillName='FOUR CORNERS' description={"This drill takes up so many birdies that I cant even comprehend. It makes me want to run away because birdies do be mad scary. I Need to extend this because birides and stuff"}/>
        <CustomButton drillName='SMASH RECEIVE' description={"This is a sample description for the drill describing the number of birdies and shots"}/>
        <CustomButton drillName='RANDOM' description={"This drill requires users to run about randomly, as if they were headless fire breathing chickens, because of how fast the birdies will be shooting at them. In fact it may be so fast that the birdies may leave welts on the enemies. User discretion is advised"}/>
    </div>
    )
}

export default Page1;