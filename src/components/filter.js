import React from 'react';
import { DateRangePicker,IconButton,ButtonGroup,Button } from 'rsuite';
import { Cog, Filter } from '@rsuite/icons/es/icons/legacy';
import ArrowDownIcon from '@rsuite/icons/ArrowDown';

const FilterForm = () => {
    return (
        <div className="form-group filter-section" >
            <div className="form-group" style={{flex:'2',justifyContent:"space-between"}}>
                <div>
                    <select className="form-control" style={{borderRadius:'4px 0 0 4px'}}>
                        <option>All</option>
                        <option>Paid</option>
                        <option>Not Paid</option>
                    </select>
                    <input className="form-control" placeholder="search..." style={{borderRadius:'0 4px 4px 0'}}/>
                </div>
                <div>
                    <select className="form-control">
                        <option>Price</option>
                        <option>All</option>
                    </select>
                </div>
                <div>
                    <DateRangePicker character="-" placeholder="Start Date - End Date"/>
                </div>
                <div>
                    <IconButton icon={<Filter />} />
                </div>
                <div>
                    <label>Clear All</label>
                </div>
            </div>
            <div className="form-group" style={{flex:'1',justifyContent:"end"}}>
                <div className="mr-10">
                    <ButtonGroup>
                        <Button appearance="primary" >Add</Button>
                        <IconButton appearance="primary" icon={<ArrowDownIcon />} />
                    </ButtonGroup>
                </div>
                <div>
                    <IconButton icon={<Cog />} />

                </div>


            </div>
        </div>

    );

};
export default FilterForm;