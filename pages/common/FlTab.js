import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Router from "next/router";

import Custom from './Custom';

import * as pages from '../page';

export default function FlTab(props) {
    const [value, setValue] = React.useState(0);
    const [tabText, setTabText] = React.useState(null);
    const [custom, setCustom] = React.useState(null);
    const [arrCustom,setArrCustom] = React.useState([]);
    const arrTabs = props.tabs;
    
    //let pageName = 'tab1';
    
    const handleChange = (event, newValue) => {
        console.log(`tab index : ${newValue} | tab text : ${arrTabs[newValue]}`);
        
        setValue(newValue);
        setTabText(arrTabs[newValue].toString());
        
        console.log(`pageName1 : ${tabText}`);
        console.log(`arrTabs[newValue] : ${arrTabs[newValue].toString()}`);
        


        if(value > 0)
        {

            console.log('기존 페이지 로드');
            setCustom(
                arrCustom[value]  
                );
        }
        else
        {
            console.log('새 페이지');

            const newPage = newCustom();
            setArrCustom((prevCustom) => [...prevCustom, newPage]);
            setCustom(newPage);
        }
    };

    const newCustom = () =>{
        console.log(`pageName2 : ${tabText}`);
        return <Custom pageName = { tabText } key={value} ></Custom> ;
    }

    // const newCustom = (arrCustom)=>{
    //     const newCustom = <Custom pageName = { pageName } key={value} ></Custom> ;

    //     [...arrCustom, newCustom]

    //     return(
    //         newCustom
    //     );
    // }

    return (
        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >

                {arrTabs.map((item, index) =>
                    <Tab label={item} key={index} />
                )}

            </Tabs>

            {/* { pageName && (
                <Custom pageName = { pageName } key={value} ></Custom>
            )}         */}

            {custom}      
        </Box>
    );
}