import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { uiActions } from '../../store/slices/uiSlice';

const JobItem = (props) => {
	const dispatch = useDispatch();

    const onClickJobHandler = ()=>{
        dispatch(uiActions.toggleCategoryForm());
        dispatch(uiActions.setSelectedJob(props.id));
    }
  return (
<React.Fragment>
    <li onClick={onClickJobHandler} className='flex w-[70%] text-center justify-evenly gap-10 p-1 cursor-pointer '><p className='flex-1' >{props.name}</p> <p className='flex-1'>{props.status}</p> </li>
</React.Fragment>
    )
}

export default JobItem