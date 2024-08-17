import React from 'react';
import { avatar, quotationMark } from './index';

const FeedbackCard = () => {
  return (
    <div className='bg-white p-8 rounded-3xl shadow-xl mx-2 w-full'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <img src={avatar} alt="avatar" className="h-12 w-12 rounded-full" />
          <div>
            <h1 className="font-bold">Jenny Wilson</h1>
            <p className="text-gray-500">UI-UX Designer</p>
          </div>
        </div>
        <img className='h-8' src={quotationMark} alt="quotation mark" />
      </div>
      <div className='py-8'>
        <p className='text-lg text-gray-700'>
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
