import { 
  Transfer as TransferEvent,  
} from "../generated/AppProxyUpgradeable/AppProxyUpgradeable"
import { Transfer } from "../generated/schema" 

export function handleTransfer(event: TransferEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let transfer = new Transfer(id)
  
  transfer.from = event.params.from
  transfer.to = event.params.to
  transfer.amount = event.params.value
  transfer.blockNumber = event.block.number
  transfer.blockTimestamp = event.block.timestamp
  transfer.transactionHash = event.transaction.hash
  
  transfer.save()
}
