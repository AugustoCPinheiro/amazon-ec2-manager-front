import axios from 'axios';


const useListBuckets = async (name) => {

    console.log(name);

    const result = await axios.get("http://localhost:8080/s3/" + name + "/object");
  
    return result.data.Contents;

}


export default useListBuckets;
