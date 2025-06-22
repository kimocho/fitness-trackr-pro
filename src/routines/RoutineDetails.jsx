import useQuery from "../api/useQuery";
import useMutate from "../api/useMutation";
import { useParams, useNavigate } from 'react-router';
import Sets from './Sets';

const RoutineDetails = () => {
  const { routineID } = useParams();
  const { data: routineData } = useQuery(`/routines/${routineID}`, "routines");
  const { data: activitiesData } = useQuery("/activities", "activities");
  const { mutate: delRoutine } = useMutate('DELETE', `/routines/${routineID}`, ["routines"]);
  const navigate = useNavigate();

  const deletingRoutine = (formData) => {
    delRoutine({ formData });
    navigate('/routines');
  }

  return (
    <>
      {
        routineData &&
        <form action={deletingRoutine}>
          <h1>{routineData.name}</h1>
          <p>CreatorName: {routineData.creatorName}</p>
          <p>Goal: {routineData.goal}</p>
          <button>Delete Routine</button>
        </form>
      }
      <Sets routineData={routineData} routineID={routineID} activitiesData={activitiesData} />
    </>
  )
}

export default RoutineDetails;