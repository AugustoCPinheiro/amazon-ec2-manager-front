import { useMutation } from 'react-query';
import axios from 'axios';

const useCreateInstance = (onSuccess) => {
  const [mutate] = useMutation(
    () => {
      axios.post('http://localhost:8080/instance');
    },
    {
      onSuccess,
    }
  );

  return { createInstance: mutate };
};

export default useCreateInstance;
