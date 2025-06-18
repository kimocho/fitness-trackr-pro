import useQuery from "../api/useQuery";
import useMutate from "../api/useMutation";
import { useParams, useNavigate } from 'react-router';

const RoutineDetails = () => {
  const { routineID } = useParams();
  const { data } = useQuery(`/routines/${routineID}`, "routines");
  const { mutate } = useMutate('DELETE', `/routines/${routineID}`, ["routines"]);
  const navigate = useNavigate();

  const deleting = (formData) => {
    mutate({ formData });
    navigate('/routines');
  }

  return (
    <>
      <h1>Routine Details</h1>
      {
        data &&
        <form action={deleting}>
          <p>CreatorID: {data.creatorId}</p>
          <p>CreatorName: {data.creatorName}</p>
          <p>Goal: {data.goal}</p>
          <p>ID: {data.id}</p>
          <p>Name: {data.name}</p>
          <button>Delete</button>
        </form>
      }
    </>
  )
}

export default RoutineDetails;