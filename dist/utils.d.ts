import JSBI from 'jsbi';
import { BigintIsh } from '@uniswap/sdk-core';
export declare function validateAndParseAddress(address: string): string;
export declare function parseBigintIsh(bigintIsh: BigintIsh): JSBI;
export declare function sortedInsert<T>(items: T[], add: T, maxSize: number, comparator: (a: T, b: T) => number): T | null;
