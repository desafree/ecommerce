import { useEffect } from "react";
import { fetchProducts } from "../slice";
import { selectProductsStatus } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../_shared";

export const useInitFetchProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(selectProductsStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status]);

  return status;
};
