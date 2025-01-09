import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className='w-full md:w-1/3 lg:w-1/4 mx-auto text-center my-8'>
            <p className='text-[#D99904] font-semibold pb-2 '>{subheading}</p>
            <h2 className='text-3xl font-semibold border-y-4 py-4 border-gray-300 uppercase'>{heading}</h2>

        </div>
    );
};

export default SectionTitle;