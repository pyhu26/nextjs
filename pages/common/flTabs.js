import * as React from 'react';
import FlPage from './flPage';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import FlTab from './FlTab';



class FlTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: []
        };
        this.tabIndex = 0;
    }
    HandleNewTabClick = (props) => {
        // console.log(this.state.currentTab);
        this.tabIndex++;
        const tabName = "tab" + this.tabIndex;
        this.setState(state => ({
            currentTab: [...state.currentTab, tabName]
        }));
    }
    
    render() {
        const currTabs = this.state.currentTab;
        return (
            <>
                <Box sx={{ mt: 5, ml: 2 }} >
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" onClick={this.HandleNewTabClick}>New Tab</Button>
                    </Stack>
                    <FlTab tabs={currTabs}></FlTab> 
                </Box>
            </>
        );
    }
}
export default FlTabs