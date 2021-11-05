/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextFetchEvent, NextRequest } from 'next/server'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function middleware(_req: NextRequest, _ev: NextFetchEvent) {
    return new Response('Hello, world!')
} 