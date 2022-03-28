import React from 'react';
import { Container, Content, Divider } from 'rsuite';
import SideNav from './side-nav';
import Listing from './listing';
import FilterForm from './filter';
import NoticeIcon from '@rsuite/icons/Notice';
import AdminIcon from '@rsuite/icons/Admin';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';

const ViewPage = ()=>{
    return (
        <div className="show-fake-browser sidebar-page">
            <Container>
                <SideNav/>

                <Container>
                    <div className="form-group filter-section" style={{alignItems:'center'}}>
                        <div style={{flex:'2',justifyContent:"end"}}>
                            <p>Inventory / Offers</p>
                        </div>
                        <div className="form-group" style={{justifyContent:"end"}}>
                            <select className="form-control">
                                <option>KGC Food</option>
                            </select>
                        </div>
                        <Divider vertical></Divider>
                        <div className="icon-set">
                            <HelpOutlineIcon size="5em" color="blueviolet"/>
                            <NoticeIcon size="5em" />
                            <AdminIcon  size="5em" />
                        </div>
                    </div>
                    <FilterForm/>
                    <Content>
                        <Listing/>
                    </Content>
                </Container>
            </Container>
        </div>
    )
}
export default ViewPage;