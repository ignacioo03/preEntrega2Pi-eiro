
import { useEffect, useState } from 'react';
import { pedirItemPorId } from '../ayudin/pedirDatos';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ itemId }) => {
    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        pedirItemPorId(id)
            .then((res) => {
                setItem(res);
            });
    }, [itemId]);

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    );
}

export default ItemDetailContainer;