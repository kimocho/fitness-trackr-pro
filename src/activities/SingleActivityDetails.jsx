import useQuery from '../api/useQuery';
import { useState } from 'react';
import { useParams } from 'react-router';

const SingleActivityDetails = (activity) => {
  const [data, setData] = useState();
  const { data } = useQuery(`/activities/${activityID}`, 'act');
  const { activityID } = useParams();
  const { mutate } = useMutation('DELETE', `/activities/${activityID}`, ['act']);
  return (
    <>
      <p>{activityID.id}</p>
      <p>{activityID.creatorId}</p>
      <p>{activityID.name}</p>
      <p>{activityID.description}</p>
    </>
  )

}

export default SingleActivityDetails;