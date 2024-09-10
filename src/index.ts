import dotenv from 'dotenv';
import {HttpsProxyAgent} from 'https-proxy-agent';
import nodeFetch, {RequestInfo, RequestInit, Response} from 'node-fetch';

dotenv.config();

const proxyUrl = `http://${process.env.PROXY_USERNAME}:${process.env.PROXY_PASSWORD}@${process.env.PROXY_HOST}:${process.env.PROXY_PORT}`;
const proxyAgent = new HttpsProxyAgent(proxyUrl);

type FetchFunction = (url: RequestInfo, init?: RequestInit) => Promise<Response>;

function withProxy<T extends (...args: any[]) => Promise<any>>(fn: T): T {
    return (async (...args: Parameters<T>): Promise<ReturnType<T>> => {
        const originalFetch = global.fetch;
        (global as any).fetch = ((url: RequestInfo, options: RequestInit = {}) => {
            console.log(`Fetching with proxy: ${url.toString()}`);
            return nodeFetch(url, {...options, agent: proxyAgent});
        }) as FetchFunction;

        try {
            return await fn(...args);
        } finally {
            (global as any).fetch = originalFetch;
        }
    }) as T;
}

export {withProxy};
