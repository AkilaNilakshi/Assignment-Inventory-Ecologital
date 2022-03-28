import React from 'react';
import { Visible} from '@rsuite/icons';
import {  Drawer,Button,Tag } from 'rsuite';
import ImageSlider from './image-slider';
import  foodPhoto from '../images/img.png'
import { More } from '@rsuite/icons/lib/icons/legacy';

const Listing = ()=>{
    const [openWithHeader, setOpenWithHeader] = React.useState(false);
    let tData = [];
    for (let i = 0; i < 20; i++) {
        tData.push( <tr key={i}>
            <td><input type="checkbox"/></td>
            <td>Promotion 1</td>
            <td>prom_11_000</td>
            <td>$157</td>
            <td>25/01/2022</td>
            <td>25/01/2022</td>
            <td>157</td>
            <td>184,123</td>
            <td>184,123</td>
            <td>
                <Visible size="2em" />
                <More  size="2em" onClick={() => setOpenWithHeader(true)}/>
            </td>
        </tr>)
    }
    return(
        <React.Fragment>
            <Drawer open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
                <Drawer.Header>
                    <Drawer.Title>Offer Overview</Drawer.Title>
                    <Drawer.Actions>
                        <Button onClick={() => setOpenWithHeader(false)}>Delete</Button>
                        <Button onClick={() => setOpenWithHeader(false)} appearance="primary">
                            Edit
                        </Button>
                    </Drawer.Actions>
                </Drawer.Header>
                <Drawer.Body>
                    <div className="form-group pb-25">
                        <div>
                            <img src={foodPhoto} style={{height:'200px',width:'200px'}}/>
                        </div>
                        <div>
                            <div className="main-title" >Sed Vestibulum Offer<Tag color="green">Active</Tag></div>
                            <div>START DATE: 25/01/2022</div>
                            <div>END DATE: 14/02/2022</div>
                            <div>$ 148</div>
                            <div>OFFER PRICE</div>
                        </div>

                    </div>
                    <div>
                        <ImageSlider/>
                    </div>

                </Drawer.Body>
            </Drawer>
            <table id="customers">
                <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>Promotion Name</th>
                    <th>Promotion Type</th>
                    <th>Price</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Qty</th>
                    <th>Min Saving</th>
                    <th>Max Saving</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {tData}
                </tbody>

            </table>
        </React.Fragment>

    )
}
export default Listing;