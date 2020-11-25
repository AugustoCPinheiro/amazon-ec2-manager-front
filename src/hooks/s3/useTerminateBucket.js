import axios from 'axios';
import { useMutation, useQueryCache } from 'react-query';

const useTerminateBucket = () => {
  const cache = useQueryCache();
  const [terminateBucket] = useMutation(
    ({ name }) => {
      axios.delete(`http://localhost:8080/s3/${name}`);
    },
    {
      onSuccess: () => {
        cache.invalidateQueries('instances');
        window.location.reload();
      },
    }
  );

  return { terminateBucket };
};

export default useTerminateBucket;
