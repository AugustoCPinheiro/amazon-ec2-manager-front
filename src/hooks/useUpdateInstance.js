import { useMutation } from 'react-query';
import axios from 'axios';

const useUpdateInstance = (onSuccess) => {
  const [mutate] = useMutation(
    ({ids, action}) => {
      axios.put('http://localhost:8080/instance', { instanceIds: ids, action });
    },
    {
      onSuccess,
    }
  );

  return { updateInstance: mutate };
};

export default useUpdateInstance;
