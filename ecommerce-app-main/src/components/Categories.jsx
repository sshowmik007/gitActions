import React from 'react'
import {ApiCategories} from '../componentApi/CategoryApi'
import Category from './Category';


const Categories = () => {
  return <div className='flex justify-between items-center p-5 mobile:flex-col'>
    {ApiCategories.map((category) => (
      <Category item={category} key={category.id} />
    ))}
  </div>;
};
  
  export default Categories;
