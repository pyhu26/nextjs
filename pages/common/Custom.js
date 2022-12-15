import * as React from 'react';
import * as page from '../page';
import tab1 from '../page/tab1';
import tab2 from '../page/tab2';
import tab3 from '../page/tab3';


export default class Custom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: this.props.pageName
        };
    }
    render() {
     
        const Component = {
            tab1: tab1,
            tab2: tab2
        };

        // this.setState( {pageName : this.props.pageName });

        // const SpecificStory = Component[this.pageName];

        return (
            <>
                <h1>  { this.pageName }  </h1>

                {/* { this.pageName && (
                    <SpecificStory></SpecificStory>
                )} */}
            </>
        )
    }
}