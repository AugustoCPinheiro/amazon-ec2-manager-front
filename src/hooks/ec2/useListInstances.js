import { useQuery } from 'react-query';
import axios from 'axios';

const useListInstances = () => {
  const { loading, error, data } = useQuery('instances', async () => {
    const { data: result } = await axios.get('http://localhost:8080/instance');

    return result;
  });

  return {
    instancesLoading: loading,
    instances: data?.Reservations.map(
      (reservation) => reservation.Instances[0]
    ),
    instanceError: error,
  };
};

export default useListInstances;
