import { checkPropTypes } from 'prop-types';
import React from 'react';

const Footer= (props) =>{
    return(
        <div>
            <center>
                <h>NYIDOL'S {props.year}</h>
            </center>
        </div>
    )
}
export default Footer;