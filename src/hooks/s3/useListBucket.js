import { useQuery } from 'react-query';
import axios from 'axios';

const useListBuckets = () => {
  const { loading, error, data } = useQuery('buckets', async () => {
    const { data: result } = await axios.get('http://localhost:8080/s3');

    return result;
  });

  return {
    bucketsLoading: loading,
    buckets: data,
    bucketError: error,
  };
};

export default useListBuckets;
