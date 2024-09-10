# proxy-wrapper

A lightweight proxy wrapper for fetch requests.

## Installation

```bash
npm i @totallynodavid/proxy-wrapper
```

## Setup

1. Create an `.env` file in your project root:

```env
PROXY_HOST=your_proxy_host
PROXY_PORT=your_proxy_port
PROXY_USERNAME=your_proxy_username
PROXY_PASSWORD=your_proxy_password
```

### Usage

```typescript
import {withProxy} from 'fast-proxy-wrapper';

const originalFunction = async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
};

const proxiedFunction = withProxy(originalFunction);
```
