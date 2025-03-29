import React from 'react';
import { IoCallOutline, IoPhonePortraitOutline, IoChatbubbleEllipsesOutline, IoDocumentTextOutline } from 'react-icons/io5';

const cardData = [
  {
    id: 1,
    icon: IoCallOutline,
    title: 'AI Receptionist',
    description:
      'Never miss a call with 24/7 intelligent conversation handling and automatic task management.',
    linkText: 'Handles calls 24/7',
  },
  {
    id: 2,
    icon: IoPhonePortraitOutline,
    title: 'Smart Phone System',
    description:
      'Make and receive calls, send SMS, and manage all communications from one place.',
    linkText: 'Dedicated phone number',
  },
  {
    id: 3,
    icon: IoChatbubbleEllipsesOutline,
    title: 'AI SMS & Follow-up',
    description:
      'Automated SMS responses and follow-ups that keep your business moving forward.',
    linkText: 'Instant responses',
  },
  {
    id: 4,
    icon: IoDocumentTextOutline,
    title: 'Smart CRM',
    description:
      'Every interaction automatically organized and summarized for easy reference.',
    linkText: 'Stay on top of everything',
  },
];

function Card() {
  return (
    <div className="flex flex-wrap ">
      {cardData.map(({ id, icon: Icon, title, description, linkText }) => (
        <div
          key={id}
          className='flex bg-box h-auto shadow-md p-6 rounded-lg my-4 mx-2 w-full lg:w-[47%]'
        >
          <div className='bg-gradient-to-t from-elecBlue to-primary bg-clip-text text-transparent'>
            <div className='bg-primary/10 p-2 rounded-xl  hover:bg-primary/20 transition-all'>
              <Icon size={40} style={{ color: "#007bff" }} />
            </div>
          </div>
          <div className='pl-4'>
            <h1 className='text-2xl font-semibold bg-gradient-to-b from-elecBlue to-primary bg-clip-text text-transparent'>{title}</h1>
            <p className='text-white'>{description}</p>
            <p className='bg-gradient-to-b from-elecBlue to-primary bg-clip-text text-transparent text-sm font-semibold pt-4'>{linkText}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
