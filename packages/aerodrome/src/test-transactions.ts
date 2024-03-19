import {
  type SwapActionParams,
  GreaterThanOrEqual,
} from '@rabbitholegg/questdk'
import {
  createTestCase,
  type TestParams,
} from '@rabbitholegg/questdk-plugin-utils'
import { parseEther } from 'viem'

export const ETH_FOR_TOKENS: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 8453,
    from: '0x1e7fc21f03a9859b9f4d841b735e5b3508715f97',
    hash: '0x553c5ab29791da1e5b8beb9aaebd517849c06f23356b3188f809062a65472157',
    input:
      '0x903638a40000000000000000000000000000000000000000000000000000000000385d5900000000000000000000000000000000000000000000000000000000000000800000000000000000000000001e7fc21f03a9859b9f4d841b735e5b3508715f970000000000000000000000000000000000000000000000000000000065ee56770000000000000000000000000000000000000000000000000000000000000003000000000000000000000000420000000000000000000000000000000000000600000000000000000000000054bc229d1cb15f8b6415efeab4290a40bc8b7d840000000000000000000000000000000000000000000000000000000000000000000000000000000000000000420dd381b31aef6683db6b902084cb0ffece40da00000000000000000000000054bc229d1cb15f8b6415efeab4290a40bc8b7d84000000000000000000000000940181a94a35a4569e4529a3cdfb74e38fd986310000000000000000000000000000000000000000000000000000000000000000000000000000000000000000420dd381b31aef6683db6b902084cb0ffece40da000000000000000000000000940181a94a35a4569e4529a3cdfb74e38fd98631000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda029130000000000000000000000000000000000000000000000000000000000000000000000000000000000000000420dd381b31aef6683db6b902084cb0ffece40da',
    to: '0xcf77a3ba9a5ca399b7c97c74d54e5b1beb874e43',
    value: '952336671958473',
  },
  params: {
    chainId: 8453,
    amountIn: GreaterThanOrEqual(900000000000000),
    tokenIn: '0x0000000000000000000000000000000000000000',
    tokenOut: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
    amountOut: GreaterThanOrEqual(1),
  },
}
export const TOKENS_FOR_ETH: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 8453,
    from: '0xfd093ce753d5bab4ec02c1fc93574e36858e4b9d',
    hash: '0x9af9f272fbf6ecde7e58f3f16f851b51c60cef84e24bde7b77e0d4640835463a',
    input:
      '0xc6b7f1b6000000000000000000000000000000000000000000000000000000000044aa2000000000000000000000000000000000000000000000000000042b28f422b80b00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000fd093ce753d5bab4ec02c1fc93574e36858e4b9d0000000000000000000000000000000000000000000000000000000065ee57920000000000000000000000000000000000000000000000000000000000000002000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda02913000000000000000000000000940181a94a35a4569e4529a3cdfb74e38fd986310000000000000000000000000000000000000000000000000000000000000001000000000000000000000000420dd381b31aef6683db6b902084cb0ffece40da000000000000000000000000940181a94a35a4569e4529a3cdfb74e38fd9863100000000000000000000000042000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000001000000000000000000000000420dd381b31aef6683db6b902084cb0ffece40da',
    to: '0xcf77a3ba9a5ca399b7c97c74d54e5b1beb874e43',
    value: '0',
  },
  params: {
    chainId: 8453,
    amountIn: GreaterThanOrEqual(4000000),
    tokenIn: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
    tokenOut: '0x0000000000000000000000000000000000000000',
    amountOut: GreaterThanOrEqual(1),
  },
}
export const TOKENS_FOR_TOKENS: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 8453,
    from: '0x182db652de873f2e6be9b384a2b69640204b0f06',
    hash: '0xd3a8f0d830d3f43db6ab70ee36c20b34dca587358cabc7d8c083f3d630b8b5f8',
    input:
      '0xcac88ea90000000000000000000000000000000000000000000000000000000000553a000000000000000000000000000000000000000000000000004dd9f4eb80c0a76200000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000182db652de873f2e6be9b384a2b69640204b0f060000000000000000000000000000000000000000000000000000000065ee57ff0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000833589fcd6edb6e08f4c7c32d4f71b54bda02913000000000000000000000000940181a94a35a4569e4529a3cdfb74e38fd986310000000000000000000000000000000000000000000000000000000000000001000000000000000000000000420dd381b31aef6683db6b902084cb0ffece40da000000000000000000000000940181a94a35a4569e4529a3cdfb74e38fd98631000000000000000000000000d9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000420dd381b31aef6683db6b902084cb0ffece40da000000000000000000000000d9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca00000000000000000000000050c5725949a6f0c72e6c4a641f24049a917db0cb0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000420dd381b31aef6683db6b902084cb0ffece40da',
    to: '0xcf77a3ba9a5ca399b7c97c74d54e5b1beb874e43',
    value: '0',
  },
  params: {
    chainId: 8453,
    amountIn: GreaterThanOrEqual(5000000),
    tokenIn: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
    tokenOut: '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
    amountOut: GreaterThanOrEqual(1),
  },
}

export const passingTestCases = [
  createTestCase(ETH_FOR_TOKENS, 'when using swapExactETHForTokens'),
  createTestCase(TOKENS_FOR_ETH, 'when using swapExactTokensForETH'),
  createTestCase(TOKENS_FOR_TOKENS, 'when using swapExactTokensForTokens'),
  createTestCase(ETH_FOR_TOKENS, 'when using tokenIn is "Any"', {
    tokenIn: undefined,
  }),
  createTestCase(TOKENS_FOR_TOKENS, 'when using tokenOut is "Any"', {
    tokenOut: undefined,
  }),
  createTestCase(TOKENS_FOR_TOKENS, 'when using amountIn is "Any"', {
    amountIn: undefined,
  }),
]

export const failingTestCases = [
  createTestCase(ETH_FOR_TOKENS, 'when chainId is not correct', { chainId: 0 }),
  createTestCase(TOKENS_FOR_ETH, 'when tokenIn is not correct', {
    tokenIn: '0x6982508145454ce325ddbe47a25d4ec3d2311933',
  }),
  createTestCase(TOKENS_FOR_TOKENS, 'when tokenOut is not correct', {
    tokenOut: '0x6982508145454ce325ddbe47a25d4ec3d2311933',
  }),
  createTestCase(ETH_FOR_TOKENS, 'when amountIn is insufficient using ETH', {
    amountIn: GreaterThanOrEqual(parseEther('1000000000')),
  }),
  createTestCase(TOKENS_FOR_ETH, 'when amountIn is insufficient using tokens', {
    amountIn: GreaterThanOrEqual(parseEther('1000000000')),
  }),
]
