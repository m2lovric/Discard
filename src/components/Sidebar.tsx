import React, { useState } from 'react';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <aside className='w-1/6 bg-gray-700'>
      <div className='h-32 w-full bg-slate-100'>cover img</div>
      <section>
        <h5 onClick={() => setShow(!show)}>Topic1</h5>
        <ul className={`${show ? 'block' : 'hidden'} `}>
          <li>smth</li>
          <li>smth2</li>
          <li>smth3</li>
          <li>smth4</li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
