import useMutate from "../api/useMutation";
import { useNavigate } from "react-router";

const SetsDetails = ({ setObj }) => {
  const { mutate: delSet } = useMutate('DELETE', `/sets/${setObj.id}`);
  const navigate = useNavigate();

  const deletingSet = (formData) => {
    const objID = formData.get('grabdel');
    delSet({ objID });
    navigate(`/routineDetails/${setObj.id}`);
  }
  return (
    <>
      <form action={deletingSet}>
        <h2>{setObj.name}</h2>
        <p>name: {setObj.name}</p>
        <p>description: {setObj.description}</p>
        <p>count: {setObj.count}</p>
        <button name='grabdel' value={setObj.id}>Delete Set</button>
      </form>
    </>
  )
}

export default SetsDetails;