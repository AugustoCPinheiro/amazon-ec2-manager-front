import React, { useState } from 'react';
import { GridList, ActionWrapper, InfoWrapper, InstanceDataItem, Item } from './BucketObjectListItem.style';
import IconButton from '../IconButton';
import { ReactComponent as SkullIcon } from '../../icons/cranio.svg'
import useDeleteObject from '../../hooks/s3/useDeleteObject'


const BucketObjectListItem = ({ bucketObject }) => {
    const { deleteObject } = useDeleteObject();

    var params = {
        Bucket: window.location.pathname.split("/")[2],
        Key: bucketObject.Key
    };


    return (
        <Item>
            <InfoWrapper>
                <InstanceDataItem label="Nome" value={bucketObject.Key} />
            </InfoWrapper>
            <InfoWrapper>
                <InstanceDataItem label="tamanho" value={bucketObject.Size} />
            </InfoWrapper>
            <ActionWrapper>
                <IconButton
                    onClick={() => {
                        deleteObject({params})
                    }}
                >
                    <SkullIcon width="20px" height="20px" />
                </IconButton>
            </ActionWrapper>
        </Item>
    )
};

export default BucketObjectListItem;
