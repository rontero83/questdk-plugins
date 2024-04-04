import type { SwapActionParams } from '@rabbitholegg/questdk'
import { GreaterThanOrEqual } from '@rabbitholegg/questdk'
import { Chains, type TestParams } from '@rabbitholegg/questdk-plugin-utils'
import { parseEther, parseUnits, zeroAddress } from 'viem'

export const PROCESS_ROUTE_ETH_TOKEN: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 8453,
    to: '0x83ec81ae54dd8dca17c3dd4703141599090751d1',
    from: '0x96e0fd08cbcd2f8c9fa20557898464cb970c9a75',
    hash: '0x2cd1151740feb1f85e094eb66365507f9103ff6021a9b14f7eda2106fd25c86f',
    input:
      '0x2646478b000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000001d24b2dfac520000000000000000000000000000f6e932ca12afa26665dc4dde7e27be02a7c02e50000000000000000000000000000000000000000000db38863c2a4c58f5c28f5c00000000000000000000000096e0fd08cbcd2f8c9fa20557898464cb970c9a7500000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000009c0301ffff020183ec81ae54dd8dca17c3dd4703141599090751d1420000000000000000000000000000000000000601420000000000000000000000000000000000000602dc2800be09692245268b607c3029469d14be06191a05660196e0fd08cbcd2f8c9fa20557898464cb970c9a75ffff01fcc89a1f250d76de198767d33e1ca9138a7fb54b0196e0fd08cbcd2f8c9fa20557898464cb970c9a7500000000',
    value: '2100000000000000000',
  },
  params: {
    chainId: Chains.BASE,
    tokenIn: zeroAddress, // ETH
    tokenOut: '0xf6e932ca12afa26665dc4dde7e27be02a7c02e50', // MOCHI
    amountIn: GreaterThanOrEqual(parseEther('2.1')),
    amountOut: GreaterThanOrEqual(parseUnits('265021683', 18)),
    recipient: '0x96e0fd08cbcd2f8c9fa20557898464cb970c9a75',
  },
}

export const PROCESS_ROUTE_TOKEN_ETH: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 10,
    to: '0xeb94eca012ec0bbb254722fdda2ce7475875a52b',
    from: '0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1',
    hash: '0xa2cf50bdacaa2de8e8a599ef2660ac40f7fafd422805ede7c7b9e345ed0ef32d',
    input:
      '0x2646478b00000000000000000000000042000000000000000000000000000000000000420000000000000000000000000000000000000000000000000de0b6b3a7640000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000369e8bffc4404000000000000000000000000865c301c46d64de5c9b124ec1a97ef1efc1bcbd100000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000007002420000000000000000000000000000000000004201ffff0158b2f113244ddc9332c46af25bc223873e68ff3d00eb94eca012ec0bbb254722fdda2ce7475875a52b01420000000000000000000000000000000000000601ffff0200865c301c46d64de5c9b124ec1a97ef1efc1bcbd100000000000000000000000000000000',
    value: '0',
  },
  params: {
    chainId: Chains.OPTIMISM,
    tokenIn: '0x4200000000000000000000000000000000000042', // OP
    tokenOut: zeroAddress, // ETH
    amountIn: GreaterThanOrEqual(parseUnits('1', 18)),
    amountOut: GreaterThanOrEqual(parseEther('0.00096')),
    recipient: '0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1',
  },
}

export const PROCESS_ROUTE_TOKEN_TOKEN: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x09bd2a33c47746ff03b86bce4e885d03c74a8e8c',
    from: '0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1',
    input:
      '0x2646478b000000000000000000000000539bde0d7dbd336b79148aa742883198bbf603420000000000000000000000000000000000000000000000001bc16d674ec80000000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc800000000000000000000000000000000000000000000000000000000001a3ccc000000000000000000000000865c301c46d64de5c9b124ec1a97ef1efc1bcbd100000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000008102539bde0d7dbd336b79148aa742883198bbf6034201ffff00b7e50106a5bd3cf21af210a755f9c8740890a8c901905dfcd5649217c42684f23958568e533c711aa30482af49447d8a07e3bd95bd0d56f35241523fbab100905dfcd5649217c42684f23958568e533c711aa301865c301c46d64de5c9b124ec1a97ef1efc1bcbd100000000000000000000000000000000000000000000000000000000000000',
    value: '0',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    tokenIn: '0x539bde0d7dbd336b79148aa742883198bbf60342', // MAGIC
    tokenOut: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', // USDC.e
    amountIn: GreaterThanOrEqual(parseUnits('2', 18)),
    amountOut: GreaterThanOrEqual(parseUnits('1.70', 6)),
    recipient: '0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1',
  },
}

export const PROCESS_ROUTE_V4: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 10,
    from: '0x98c364a2678ede157939aec359788ef5c5441f98',
    to: '0x1f2fcf1d036b375b384012e61d3aa33f8c256bbe',
    hash: '0x231b7abba801c1cafe5db10f48ad087a83e48f96ef4446d9e04c91ee9bcdeff8',
    input:
      '0x2646478b000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000001c6bf526340000000000000000000000000007f5c764cbc14f9669b88837ca1490cca17c31607000000000000000000000000000000000000000000000000000000000016a9e900000000000000000000000098c364a2678ede157939aec359788ef5c5441f9800000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000700301ffff0201cdbcd51a5e8728e0af4895ce5771b7d17ff71959420000000000000000000000000000000000000601420000000000000000000000000000000000000601ffff018b3c4271440bc98a085eb6b348243ed3679751a40198c364a2678ede157939aec359788ef5c5441f9800000000000000000000000000000000',
    value: '500000000000000',
  },
  params: {
    chainId: Chains.OPTIMISM,
    tokenIn: zeroAddress, // ETH
    amountIn: GreaterThanOrEqual(parseEther('0.0005')),
    tokenOut: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', // USDC.e
    amountOut: GreaterThanOrEqual(parseUnits('1.1', 6)),
    recipient: '0x98c364a2678ede157939aec359788ef5c5441f98',
  },
}

export const BLAST_SWAP: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 81457,
    from: '0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1',
    to: '0xcdbcd51a5e8728e0af4895ce5771b7d17ff71959',
    hash: '0x64bf292a41a825abc314539a2eafb1100a40ef26ac62a210477e825835778cbb',
    input: '0x2646478b000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000aa87bee53800000000000000000000000000043000000000000000000000000000000000000030000000000000000000000000000000000000000000000008b38650164bc63ae000000000000000000000000865c301c46d64de5c9b124ec1a97ef1efc1bcbd100000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000700301ffff0201cdbcd51a5e8728e0af4895ce5771b7d17ff71959430000000000000000000000000000000000000401430000000000000000000000000000000000000401ffff01cd03572e7cfb94996beebaa539234ce5c23ae1d600865c301c46d64de5c9b124ec1a97ef1efc1bcbd100000000000000000000000000000000',
    value: '3000000000000000',
  },
  params: {
    chainId: Chains.BLAST,
    tokenIn: zeroAddress, // ETH
    tokenOut: '0x4300000000000000000000000000000000000003', // USDB
    amountIn: GreaterThanOrEqual(parseEther('0.003')),
    amountOut: GreaterThanOrEqual(parseUnits('10', 18)),
    recipient: '0x865c301c46d64de5c9b124ec1a97ef1efc1bcbd1',
  },
}
// Legacy AMM transactions

export const ETH_FOR_EXACT_TOKENS: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
    from: '0x94cb896fe6a76ea7d22ea35d73db47c428957bc8',
    hash: '0xad7122cd402f436fae8665815bbad1c042727410e081edf7e240607578aacbec',
    input:
      '0xfb3bdb4100000000000000000000000000000000000000000000013a366b78ebea500000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000094cb896fe6a76ea7d22ea35d73db47c428957bc800000000000000000000000000000000000000000000000000000000657d0075000000000000000000000000000000000000000000000000000000000000000200000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1000000000000000000000000539bde0d7dbd336b79148aa742883198bbf60342',
    value: '2227545056953132288',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    tokenIn: zeroAddress, // ETH
    tokenOut: '0x539bde0d7dbd336b79148aa742883198bbf60342', // MAGIC
    amountIn: GreaterThanOrEqual(parseEther('2.22')),
    amountOut: GreaterThanOrEqual(parseUnits('5796', 18)),
    recipient: '0x94cb896fe6a76ea7d22ea35d73db47c428957bc8',
  },
}

export const EXACT_ETH_FOR_TOKENS: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
    from: '0x4e51a06e4643197e1be2f050b6af60f9ad3cef06',
    hash: '0x5bb8e6314c11d195fae2958d1ee5a71f61d14239f33dd78dbbd0c20f115e8a6f',
    input:
      '0x7ff36ab500000000000000000000000000000000000000000000000f76241229561ff33800000000000000000000000000000000000000000000000000000000000000800000000000000000000000004e51a06e4643197e1be2f050b6af60f9ad3cef0600000000000000000000000000000000000000000000000000000000657d068f000000000000000000000000000000000000000000000000000000000000000300000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc8000000000000000000000000326c33fd1113c1f29b35b4407f3d6312a8518431',
    value: '200000000000000000',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    tokenIn: zeroAddress, // ETH
    tokenOut: '0x326c33fd1113c1f29b35b4407f3d6312a8518431', // STRP
    amountIn: GreaterThanOrEqual(parseEther('0.2')),
    amountOut: GreaterThanOrEqual(parseUnits('285', 18)),
    recipient: '0x4e51a06e4643197e1be2f050b6af60f9ad3cef06',
  },
}

export const TOKENS_FOR_EXACT_ETH: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
    from: '0xe9534c611bccf57ca418354552a6041b154aa795',
    hash: '0x435412cf72ce84239413846c928dbb53f7be077c7dc262332c8d0c2c6cf07e12',
    input:
      '0x4a25d94a00000000000000000000000000000000000000000000000000b258a24fb980000000000000000000000000000000000000000000000000001c942e8ad8c1620000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000e9534c611bccf57ca418354552a6041b154aa79500000000000000000000000000000000000000000000000000000002540be3ff00000000000000000000000000000000000000000000000000000000000000020000000000000000000000006c2c06790b3e3e3c38e12ee22f8183b37a13ee5500000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1',
    value: '0',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    tokenIn: '0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55', // DPX
    tokenOut: zeroAddress, // ETH
    amountIn: GreaterThanOrEqual(parseUnits('1.95', 18)),
    amountOut: GreaterThanOrEqual(parseEther('0.05')),
    recipient: '0xe9534c611bccf57ca418354552a6041b154aa795',
  },
}

export const EXACT_TOKENS_FOR_ETH: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
    from: '0x5c058298cbbe14cd0988a2d3ae8c6202268d1759',
    hash: '0x0f9926be82b9b990a988f5ea3ed215c0000db584fb8d9547c0c39f6c6579c4d1',
    input:
      '0x18cbafe5000000000000000000000000000000000000000000000000373bfc44bdd9eb9e0000000000000000000000000000000000000000000000000006f6179cc7702800000000000000000000000000000000000000000000000000000000000000a00000000000000000000000005c058298cbbe14cd0988a2d3ae8c6202268d175900000000000000000000000000000000000000000000000000000000657d20fa0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000912ce59144191c1204e64559fe8253a0e49e654800000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1',
    value: '0',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    tokenIn: '0x912ce59144191c1204e64559fe8253a0e49e6548', // ARB
    tokenOut: zeroAddress, // ETH
    amountIn: GreaterThanOrEqual(parseUnits('3.98', 18)),
    amountOut: GreaterThanOrEqual(parseEther('0.00195')),
    recipient: '0x5c058298cbbe14cd0988a2d3ae8c6202268d1759',
  },
}

export const TOKENS_FOR_EXACT_TOKENS: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
    from: '0x7380db868e01e6045d12e7d20ece366bd0c1bb8a',
    hash: '0x05556fe065658534b364cd427a4564e3063c673f4796aee70217c87ca7a9c31d',
    input:
      '0x8803dbee00000000000000000000000000000000000000000000003be6f49d7586a4000000000000000000000000000000000000000000000000000005e946f62c3c69f200000000000000000000000000000000000000000000000000000000000000a00000000000000000000000007380db868e01e6045d12e7d20ece366bd0c1bb8a00000000000000000000000000000000000000000000000000000000657e8de8000000000000000000000000000000000000000000000000000000000000000200000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1000000000000000000000000539bde0d7dbd336b79148aa742883198bbf60342',
    value: '0',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    tokenIn: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', // WETH
    tokenOut: '0x539bde0d7dbd336b79148aa742883198bbf60342', // MAGIC
    amountIn: GreaterThanOrEqual(parseUnits('0.425', 18)),
    amountOut: GreaterThanOrEqual(parseUnits('1105', 18)),
    recipient: '0x7380db868e01e6045d12e7d20ece366bd0c1bb8a',
  },
}

export const EXACT_TOKENS_FOR_TOKENS: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    to: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
    from: '0xa891f1a98360b6ce991d134df671ea0451a156ab',
    hash: '0xaeac4ad9f2b559dabaceff1b3295ad1e0dcefe657ec8b9192f75cc472bfbc1bf',
    input:
      '0x38ed173900000000000000000000000000000000000000000000000022b1c8c1227a00000000000000000000000000000000000000000000b039ffc5fe626fc4ea1cbcac00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000a891f1a98360b6ce991d134df671ea0451a156ab00000000000000000000000000000000000000000000000000000000657d1fe8000000000000000000000000000000000000000000000000000000000000000200000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1000000000000000000000000155f0dd04424939368972f4e1838687d6a831151',
    value: '0',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    tokenIn: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', // WETH
    tokenOut: '0x155f0dd04424939368972f4e1838687d6a831151', // AIDOGE
    amountIn: GreaterThanOrEqual(parseUnits('2.5', 18)),
    amountOut: GreaterThanOrEqual(parseUnits('54539478356', 18)),
    recipient: '0xa891f1a98360b6ce991d134df671ea0451a156ab',
  },
}
