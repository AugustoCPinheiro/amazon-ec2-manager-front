import { useMutation, useQueryCache } from 'react-query';
import axios from 'axios';

const useUpdateInstance = () => {
  const cache = useQueryCache();

  const [mutate] = useMutation(
    ({ ids, action }) => {
      axios.put('http://localhost:8080/instance', { instanceIds: ids, action });
    },
    {
      onSuccess: () => {
        cache.invalidateQueries('instances');
      },
    }
  );

  return { updateInstance: mutate };
};

export default useUpdateInstance;
