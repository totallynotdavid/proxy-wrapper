import { withProxy } from './dist';

async function testProxy() {
  const fetchIp = withProxy(async () => {
    const response = await fetch('https://api.ipify.org?format=json');
    return response.json();
  });

  const result = await fetchIp();
  console.log('Current IP:', result.ip);
}

testProxy();