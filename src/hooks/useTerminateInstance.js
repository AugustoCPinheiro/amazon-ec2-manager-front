import axios from 'axios';
import { useMutation, useQueryCache } from 'react-query';

const useTerminateInstance = () => {
  const cache = useQueryCache();
  const [terminateInstance] = useMutation(
    ({ id }) => {
      axios.delete(`http://localhost:8080/instance/${id}`);
    },
    {
      onSuccess: () => {
        cache.invalidateQueries('instances');
      },
    }
  );

  return { terminateInstance };
};

export default useTerminateInstance;
