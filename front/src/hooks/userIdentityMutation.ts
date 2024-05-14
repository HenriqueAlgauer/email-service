import { useMutation } from "react-query";
import { PersonData } from "../interface/person-data";
import axios from "axios";

const postData = (data: PersonData) => {
  return axios.post("https://localhost:3200/send", data);
};

function useIdentityMutation() {
  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: (data: PersonData) => postData(data),
  });

  return {
    mutate,
    isLoading,
    isSuccess,
  };
}

export { useIdentityMutation };
