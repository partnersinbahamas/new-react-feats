import { useOptimistic, useState, useTransition } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { mockServerSuccess, mockServerError } from "./utils";

const Optimistic = () => {
    const [isPending, startTransition] = useTransition();
    const [like, setLike] = useState(false);
    const [optimisticLike, setOptimisticList] = useOptimistic(like, (draft, value: boolean) => value);
    

    const handleLike = async () => {
        startTransition(async () => {
            try {
                setOptimisticList(true);
                // const respose = await mockServerError();
                const respose = await mockServerSuccess(true);
                setLike(respose.data)
            } catch(error) {
                console.error('Error', error)
            }
        });
    };

    return (
        <div>
        <h2>useOptimistic</h2>
        
        <button type="submit" onClick={handleLike}>
          {optimisticLike ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon />
          )}
        </button>
      </div>
    )
}

export default Optimistic