import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

class FlTabs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1> tab2 </h1>
                <div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                    </Box>
                </div>
            </>
        );
    }
}

export default FlTabs