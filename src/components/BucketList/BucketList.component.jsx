import React from 'react';
import Button from '../Button';
import useCreateBucket from '../../hooks/s3/useCreateBucket'
import { GridList, ListWrapper, List, ListHeader} from './BucketList.style';
import BucketListItem from '../BucketListItem';


const BucketList = ({ buckets = [] }) => {
    const { createBucket } = useCreateBucket();
    var name = "";

    const handleChange = e => {
        name = e.target.value;
    }

    const createBucketS3 = () => {
        const data = {
            name : name
        }

        createBucket(data);
      };
    

    return (
        <ListWrapper>
            <ListHeader>
                <input placeholder="Nome do bucket" onChange={e => handleChange(e)}></input>
                <Button onClick={createBucketS3}>Adicionar</Button>
            </ListHeader>
            <List>
                {buckets.map((bucket, index) => (
                    <BucketListItem bucket={bucket} key={index} />
                ))}
            </List>
        </ListWrapper>
    );
};

export default BucketList;
