import React, { useState } from 'react';
import { GridList, ActionWrapper, InfoWrapper, InstanceDataItem, Item } from './BucketListItem.style';
import IconButton from '../IconButton';
import { ReactComponent as SkullIcon } from '../../icons/cranio.svg'
import useTerminateBucket from '../../hooks/s3/useTerminateBucket'
import useListBuckets from '../../hooks/s3/useListObjects'
import axios from 'axios';
import { Route, } from 'react-router-dom';
import BucketObjects from '../../pages/BucketObjectsPage.page'


const BucketListItem = ({ bucket }) => {
    const { terminateBucket } = useTerminateBucket();

    const handleClick = () => {
        window.location.href = "/bucket/" + bucket.Name
    }



    return (

        <Item onClick={handleClick}>
            <InfoWrapper>
                <InstanceDataItem label="Nome" value={bucket.Name} />
            </InfoWrapper>
            <ActionWrapper>
                <IconButton
                    onClick={() => {
                        terminateBucket({ name: bucket.Name });
                    }}
                >
                    <SkullIcon width="20px" height="20px" />
                </IconButton>
            </ActionWrapper>
        </Item>
    )
};

export default BucketListItem;
