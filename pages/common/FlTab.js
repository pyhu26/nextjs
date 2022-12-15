import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Router from "next/router";

import Custom from './Custom';

import * as pages from '../page';

export default function FlTab(props) {
    const [value, setValue] = React.useState(0);
    const arrTabs = props.tabs;
    
    let pageName = 'tab1';
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(arrTabs[newValue]);
        const url = arrTabs[newValue];
        // Router.push(url);
        pageName = url;
    };

    const moveRoute = (url, event) => {
        //Router.push(url);
        console.log(url);
    }


    return (
        <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                onClick={moveRoute(value)}
            >

                {arrTabs.map((item, index) =>
                    <Tab label={item} key={index} />
                )}

            </Tabs>

            <Custom pageName = {{pageName}} ></Custom>
        </Box>
    );
}