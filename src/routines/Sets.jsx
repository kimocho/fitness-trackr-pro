import useMutate from "../api/useMutation";
import SetsDetails from "./SetsDetails";

const Sets = ({ routineData, routineID, activitiesData }) => {
  const { mutate: addSet } = useMutate('POST', `/sets`);

  const addingSet = (formData) => {
    const count = formData.get('count');
    const activityId = formData.get('activity');
    addSet({ routineId: routineID, activityId, count });
  }

  return (
    <>
      <h2>Sets</h2>
      {(routineData && !routineData.sets.length) && <p>Add a set to the routine.</p>}
      {
        routineData &&
        routineData.sets.map((setObj) => (
          <SetsDetails key={setObj.id} setObj={setObj} />
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
            Number of Reps <input name="count" />
          </label>
          <button>Add Set</button>
        </form>
      }
    </>
  )
}

export default Sets;