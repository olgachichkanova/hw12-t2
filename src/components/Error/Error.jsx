import { useDispatch } from 'react-redux';
import { loadServices } from '../../store/services';
const Error = ({data}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Error has occured</h2>
            <p>{data.message}</p>
            <button onClick={() => {dispatch(loadServices())}}>Try again</button>
        </div>
    )
}

export default Error;