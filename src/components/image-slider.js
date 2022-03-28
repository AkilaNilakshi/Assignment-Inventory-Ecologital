import React from 'react';
import { Slide } from 'react-slideshow-image';
import FoodPhoto from '../images/img.png'
import { Panel } from 'rsuite';
import 'react-slideshow-image/dist/styles.css'

const ImageSlider = ()=>{
    const style = {
        textAlign: 'center',
        padding: '10px 10px',
        fontSize: '30px',
        marginRight:'10px'
    };

    const properties = {
        duration: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        indicators: true,
    };

    return (
        <div>
            <Slide {...properties}>
                <Panel shaded bordered bodyFill style={style}>
                    <img src={FoodPhoto} style={{ height: '100px', width: '100px' }}/>
                    <Panel header="Sed Vestibulum">
                        <p>
                            <small>$148</small>
                        </p>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill style={style}>
                    <img src={FoodPhoto} style={{ height: '100px', width: '100px' }}/>
                    <Panel header="Sed Vestibulum">
                        <p>
                            <small>$148</small>
                        </p>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill style={style}>
                    <img src={FoodPhoto} style={{ height: '100px', width: '100px' }}/>
                    <Panel header="Sed Vestibulum">
                        <p>
                            <small>$148</small>
                        </p>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill style={style}>
                    <img src={FoodPhoto} style={{ height: '100px', width: '100px' }}/>
                    <Panel header="Sed Vestibulum">
                        <p>
                            <small>$148</small>
                        </p>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill style={style}>
                    <img src={FoodPhoto} style={{ height: '100px', width: '100px' }}/>
                    <Panel header="Sed Vestibulum">
                        <p>
                            <small>$148</small>
                        </p>
                    </Panel>
                </Panel>
                <Panel shaded bordered bodyFill style={style}>
                    <img src={FoodPhoto} style={{ height: '100px', width: '100px' }}/>
                    <Panel header="Sed Vestibulum">
                        <p>
                            <small>$148</small>
                        </p>
                    </Panel>
                </Panel>
            </Slide>
        </div>
    );
}
export default ImageSlider;