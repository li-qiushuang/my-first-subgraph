import { ProxyDeposit as ProxyDepositEvent } from "../generated/AppProxyUpgradeable/AppProxyUpgradeable"
import { ProxyDeposit } from "../generated/schema"

export function handleProxyDeposit(event: ProxyDepositEvent): void {
  let entity = new ProxyDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
