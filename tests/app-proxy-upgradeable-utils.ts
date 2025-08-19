import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { ProxyDeposit } from "../generated/AppProxyUpgradeable/AppProxyUpgradeable"

export function createProxyDepositEvent(
  sender: Address,
  value: BigInt
): ProxyDeposit {
  let proxyDepositEvent = changetype<ProxyDeposit>(newMockEvent())

  proxyDepositEvent.parameters = new Array()

  proxyDepositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  proxyDepositEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return proxyDepositEvent
}
