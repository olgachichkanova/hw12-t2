import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Loader/Loader';
import { loadServiceDetails } from '../store/services';
import { useParams } from 'react-router-dom';

const Card = () => {
    const {id} = useParams()

    const {serviceDetails, loading, error} = useSelector(state => state.serviceDetails);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(loadServiceDetails(id))
    }, [])
    return (
        <div>
            {loading && <Loader />}
            {error 
                ? 
            <div>Error: {error.message}</div> 
            : 
            <div>
                <h2>{serviceDetails.name}</h2>
                <p>{serviceDetails.price}</p>
                <p>{serviceDetails.content}</p>   
            </div>}
        </div>
    )
}

export default Card;