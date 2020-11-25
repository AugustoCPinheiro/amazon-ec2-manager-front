import { useMutation, useQueryCache } from 'react-query';
import axios from 'axios';

const useCreateBucket = () => {
  const cache = useQueryCache();

  const [mutate] = useMutation(
    (data) => {
      axios.post('http://localhost:8080/s3', data).then(e => {
        window.location.reload();
      }).catch();
    },
    {
      onSuccess: () => {
        cache.invalidateQueries('instances');
        
      },
    }
  );

  return { createBucket: mutate };
};

export default useCreateBucket;
