import useQuery from '../api/useQuery';
import useMutation from '../api/useMutation';
import { useParams, useNavigate } from 'react-router';

const SingleActivityDetails = () => {
  const { activityID } = useParams();
  const { data } = useQuery(`/activities/${activityID}`, 'act');
  const { mutate } = useMutation('DELETE', `/activities/${activityID}`, ['act']);
  const navigate = useNavigate();

  const deleting = (formData) => {
    mutate({ formData });
    navigate('/');
  }

  return (
    <>
      <h1>Activity Details</h1>
      {
        data &&
        <form action={deleting}>
          <p>ID: {data.id}</p>
          <p>CreatorID: {data.creatorId}</p>
          <p>Name: {data.name}</p>
          <p>Description: {data.description}</p>
          <button>Delete</button>
        </form>
      }
    </>
  )

}

export default SingleActivityDetails;


// /** Shows a single activity. Logged-in users will also see a delete button. */
// function ActivityListItem({ activity }) {
//   const { token } = useAuth();
//   const {
//     mutate: deleteActivity,
//     loading,
//     error,
//   } = useMutation("DELETE", "/activities/" + activity.id, ["activities"]);
// {
//   token && (
//     <button onClick={() => deleteActivity()}>
//       {loading ? "Deleting" : error ? error : "Delete"}
//     </button>
//   )
// }