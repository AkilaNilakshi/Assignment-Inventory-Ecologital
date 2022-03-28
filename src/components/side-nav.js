import React from 'react';
import { Sidenav, Navbar, Dropdown, Sidebar,Nav } from 'rsuite';
import { EventDetail, Grid, Setting, Time } from '@rsuite/icons';
import { AngleLeft, AngleRight, Folder, Home } from '@rsuite/icons/es/icons/legacy';
import 'rsuite/dist/rsuite.min.css';

const headerStyles= {
    padding: 18,
    fontSize: 16,
    height: 56,
    background: '#34c3ff',
    color: ' #fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
}

const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Navbar.Body>
                <Nav pullRight>
                    <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                        {expand ? <AngleLeft /> : <AngleRight />}
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};
const SideNav = ()=>{
    const [expand, setExpand] = React.useState(true);
    return(
        <Sidebar
            style={{ display: 'flex', flexDirection: 'column' }}
            width={expand ? 260 : 56}
            collapsible
        >
            <Sidenav.Header>
                <div style={headerStyles}>
                    <Setting style={{ fontSize: 20 }} />
                    <span style={{ marginLeft: 12 }}> BRAND</span>
                </div>
            </Sidenav.Header>
            <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="1" active icon={<Home />}>
                            Home
                        </Nav.Item>
                        <Dropdown
                            eventKey="2"
                            trigger="hover"
                            title="Inventory"
                            icon={<Grid />}
                            placement="rightStart"
                        >

                            <Dropdown.Item eventKey="2-1">Product</Dropdown.Item>
                            <Dropdown.Item eventKey="2-2">Offers</Dropdown.Item>
                            <Dropdown.Item eventKey="2-3">Category</Dropdown.Item>
                            <Dropdown.Item eventKey="2-4">Brand</Dropdown.Item>
                        </Dropdown>
                        <Nav.Item eventKey="3" icon={<Time />}>
                            TimeSheet
                        </Nav.Item>
                        <Nav.Item eventKey="4" icon={<EventDetail />}>
                            Delivery
                        </Nav.Item>
                        <Nav.Item eventKey="5" icon={<Folder/>}>
                            Folders
                        </Nav.Item>
                        <Nav.Item eventKey="6" icon={<Setting />}>
                            Settings
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

    )
}
export default SideNav;