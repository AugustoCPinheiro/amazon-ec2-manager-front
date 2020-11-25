import axios from 'axios';
import { useMutation, useQueryCache } from 'react-query';

const useDeleteObject = () => {
    const cache = useQueryCache();
    const [deleteObject] = useMutation(
        ({ params }) => {

            console.log(params);

            axios.delete(`http://localhost:8080/s3/${params.Bucket}/${params.Key}`).then(e => {
                window.location.reload();
            });
        },
        {
            onSuccess: () => {
                cache.invalidateQueries('instances');

            },
        }
    );

    return { deleteObject };
};

export default useDeleteObject;
