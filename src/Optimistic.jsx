import { useActionState, useOptimistic, useState, useTransition } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { mockServerSuccess, mockServerError } from "./utils";

const Optimistic = () => { 
  const [likeState, likeAction, isPending] = useActionState(async() => {
    try {
      setOptimisticLike(true);
      // const response = await mockServerSuccess(true);
      const response = await mockServerError('Failed');
      return { ...response, success: true };
    } catch(error) {
      return { success: false, error: error.message }
    }
  }, { data: false });


  const [optimisticLike, setOptimisticLike] = useOptimistic(likeState.data);

  return (      
    <form action={likeAction}>
      <button type="submit" className="">
        {optimisticLike ? (
          <FavoriteIcon />
        ) : (
          <FavoriteBorderIcon />
        )}
      </button>
      {/* <br /> */}
      {isPending && (
        <span>Pending...</span>
      )}

      {likeState.success && (
        <span className="success">Success</span>
      )}

      {likeState.error && (
        <span className="failed">Failed</span>
      )}
    </form>
  );
}

export default Optimistic;