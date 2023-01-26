import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from './ListItem';
import { loadServices } from '../store/services';
import Loader from './Loader/Loader';
import Error from './Error/Error';

const List = () => {
    const {services, loading, error} = useSelector(state => state.serviceList)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(loadServices())
    }, [])
    
    return (
        <ul>
            {loading &&  <Loader />}
            {error ? <Error data={error} /> : services.map(item => <ListItem key={item.id} item={item} />)}
        </ul>
    )
}

export default List;