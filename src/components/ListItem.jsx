import { Link } from "react-router-dom";

const ListItem = ({item}) => {
    return (
        
        <li><Link to={`${item.id}/details`}>{item.name} {item.price}</Link></li>
    )
}

export default ListItem;