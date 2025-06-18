import useQuery from '../api/useQuery';
import useMutation from '../api/useMutation';
import { Link } from 'react-router';
import { useAuth } from '../auth/AuthContext';

const Routines = () => {
  const { data } = useQuery('/routines', 'routines');
  const { mutate } = useMutation('POST', '/routines', ['routines']);
  const { token } = useAuth();
  const addRoutine = (formdata) => {
    const name = formdata.get('nameInput');
    const goal = formdata.get('goalInput');
    mutate({ name, goal });
  }

  return (
    <>
      <h1>Routines</h1>
      {
        data && data.map((eachRoutine) =>
          <Link to={`/routineDetails/${eachRoutine.id}`} key={eachRoutine.id}>
            <li>{eachRoutine.name}</li>
          </Link>
        )
      }
      {
        token &&
        <form action={addRoutine}>
          <h2>Create a New Routine</h2>
          <label>
            Name <input name='nameInput' />
          </label>
          <label>
            Goal <input name='goalInput' />
          </label>
          <button>Add Routine</button>
        </form>
      }
    </>
  )
}

export default Routines;