import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {Login} from "../pages/Login";
import {PetList} from "../pages/PetList";
import {OwnerList} from "../pages/OwnerList";
import {MyAddonPage} from "../addon/MyAddonPage";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Login">
                <Login/>
            </ComponentPreview>
          <ComponentPreview path="/PetList">
            <PetList/>
          </ComponentPreview>
          <ComponentPreview path="/OwnerList">
            <OwnerList/>
          </ComponentPreview>
          <ComponentPreview path="/MyAddonPage">
            <MyAddonPage/>
          </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;