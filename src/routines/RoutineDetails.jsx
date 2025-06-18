import useQuery from "../api/useQuery";
import useMutate from "../api/useMutation";
import { useParams, useNavigate } from 'react-router';

const RoutineDetails = () => {
  const { routineID } = useParams();
  const { data: routineData } = useQuery(`/routines/${routineID}`, "routines");
  const { data: activitiesData } = useQuery("/activities", "activities");
  // const { data: setsData } = useQuery("/sets", "sets");
  const { mutate: delRoutine } = useMutate('DELETE', `/routines/${routineID}`, ["routines"]);
  const { mutate: delSet } = useMutate('DELETE', `/sets/${routineID}`, ["sets"]);
  const { mutate: addSet } = useMutate('POST', `/sets`, ["sets"]);

  const navigate = useNavigate();

  const deletingRoutine = (formData) => {
    delRoutine({ formData });
    navigate('/routines');
  }

  const deletingSet = (formData) => {
    delSet({ formData });
    navigate(`/routines/${routineID}`);
  }

  const addingSet = (formData) => {
    const count = formData.get('numOfReps');
    const activityId = formData.get('activity');
    addSet({ routineId: routineID, activityId, count });
  }

  return (
    <>
      {
        routineData &&
        <form action={deletingRoutine}>
          <h1>{routineData.name}</h1>
          <p>CreatorName: {routineData.creatorName}</p>
          <p>Goal: {routineData.goal}</p>
          <button>Delete</button>
        </form>
      }
      <h2>Sets</h2>
      {(routineData && !routineData.sets.length) && <p>Add a set to the routine.</p>}
      {
        routineData &&
        routineData.sets.map((setObj) => (
          <form action={deletingSet} key={setObj.id}>
            <h2>{setObj.name}</h2>
            <p>name: {setObj.name}</p>
            <p>description: {setObj.description}</p>
            <p>duration: {setObj.duration}</p>
            <p>count: {setObj.count}</p>
            <button>Delete Set</button>
          </form>
        ))
      }
      {
        <form action={addingSet}>
          <h2>Add a Set</h2>
          <p>Activity</p>

          <select name="activity">
            {activitiesData && activitiesData.map((eachActivity) => (
              <option key={eachActivity.id} value={eachActivity.id}>{eachActivity.name}</option>
            ))}
          </select>

          <label>
            Number of Reps <input name="numOfReps" />
          </label>
          <button>Add Set</button>
        </form>
      }
    </>
  )
}

export default RoutineDetails;