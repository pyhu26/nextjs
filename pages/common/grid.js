import * as React from 'react';
import axios from 'axios';

export default function grid() {

    const [stateMenu, SetStateMenu] = React.useState(null);
    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'https://a4678e66-520f-40ca-9b40-04715baefa64.mock.pstmn.io',
        headers: {}
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            SetStateMenu(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

    return (
        <p>{
            stateMenu
        }</p>
    );
}