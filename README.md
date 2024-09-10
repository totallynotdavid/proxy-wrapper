# proxy-wrapper

A lightweight proxy wrapper for fetch requests.

## Installation

```bash
npm install fast-proxy-wrapper
```

## Setup

1. Create a `.env` file in your project root:

```env
PROXY_HOST=your_proxy_host
PROXY_PORT=your_proxy_port
PROXY_USERNAME=your_proxy_username
PROXY_PASSWORD=your_proxy_password
```

### Usage

```typescript
import {withProxy} from 'fast-proxy-wrapper';

// Wrap any function that uses fetch
const originalFunction = async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
};

const proxiedFunction = withProxy(originalFunction);
```

### License

MIT
