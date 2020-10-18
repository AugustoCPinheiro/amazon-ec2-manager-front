import { useMutation, useQueryCache } from 'react-query';
import axios from 'axios';

const useCreateInstance = () => {
  const cache = useQueryCache();

  const [mutate] = useMutation(
    () => {
      axios.post('http://localhost:8080/instance');
    },
    {
      onSuccess: () => {
        cache.invalidateQueries('instances');
      },
    }
  );

  return { createInstance: mutate };
};

export default useCreateInstance;
