import React from 'react';
import Button from '../Button';
import useCreateBucket from '../../hooks/s3/useCreateBucket'
import { GridList, ListWrapper, List, ListHeader} from './BucketObjectList.style';
import BucketObjectListItem from '../BucketObjectListItem';


const BucketList = ({ bucketObjects = [] }) => {
  
    return (
        <ListWrapper>
            <List>
                {bucketObjects.map((bucketObject, index) => (
                    <BucketObjectListItem bucketObject={bucketObject} key={index} />
                ))}
            </List>
        </ListWrapper>
    );
};

export default BucketList;
