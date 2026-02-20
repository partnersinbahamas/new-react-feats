import { useActionState, useOptimistic, useState, useTransition } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { mockServerSuccess, mockServerError } from "./utils";

const Optimistic = () => {
    const [like, setLike] = useState(false);
    const [optimisticLike, setOptimisticLike] = useOptimistic(like, (draft, value: boolean) => value);
    
    const [_, likeAction] = useActionState(async() => {
        try {
            setOptimisticLike(true);
            const respose = await mockServerSuccess(true);
    
            setLike(respose.data)
        } catch(err) {
            // ...
        }
    }, null)


    return (
        <div>
        <h2>useOptimistic</h2>
        
        <form action={likeAction}>
            <button type="submit">
                {optimisticLike ? (
                    <FavoriteIcon />
                ) : (
                    <FavoriteBorderIcon />
                )}
            </button>
        </form>
      </div>
    )
}

export default Optimistic