import useQuery from '../api/useQuery';
import { useState } from 'react';
import { useParams } from 'react-router';

const SingleActivityDetails = (activity) => {
  const [data, setData] = useState();
  const { data } = useQuery('/activities', 'act');
  const { activityDetails } = useParams();
  return (
    <>
      <p>{activityDetails.id}</p>
      <p>{activityDetails.creatorId}</p>
      <p>{activityDetails.name}</p>
      <p>{activityDetails.description}</p>
    </>
  )

}

export default SingleActivityDetails;