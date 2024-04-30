import {
  ClaimMaxGas as ClaimMaxGasEvent,
  ExtendLockTime as ExtendLockTimeEvent,
  GasManagerTransferred as GasManagerTransferredEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SetForceUnstakeFee as SetForceUnstakeFeeEvent,
  SetMaxLockupDays as SetMaxLockupDaysEvent,
  SetMinLockupDays as SetMinLockupDaysEvent,
  SetOutUSDBVault as SetOutUSDBVaultEvent,
  StakeRUSD as StakeRUSDEvent,
  Unstake as UnstakeEvent,
  WithdrawYield as WithdrawYieldEvent
} from "../generated/RUSDStakeManager/RUSDStakeManager"
import {
  ClaimMaxGas,
  ExtendLockTime,
  GasManagerTransferred,
  OwnershipTransferred,
  SetForceUnstakeFee,
  SetMaxLockupDays,
  SetMinLockupDays,
  SetOutUSDBVault,
  StakeRUSD,
  Unstake,
  WithdrawYield
} from "../generated/schema"

export function handleClaimMaxGas(event: ClaimMaxGasEvent): void {
  let entity = new ClaimMaxGas(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.gasAmount = event.params.gasAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExtendLockTime(event: ExtendLockTimeEvent): void {
  let entity = new ExtendLockTime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.positionId = event.params.positionId
  entity.extendDays = event.params.extendDays
  entity.newDeadLine = event.params.newDeadLine
  entity.mintedRUY = event.params.mintedRUY

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGasManagerTransferred(
  event: GasManagerTransferredEvent
): void {
  let entity = new GasManagerTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousGasManager = event.params.previousGasManager
  entity.newGasManager = event.params.newGasManager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetForceUnstakeFee(event: SetForceUnstakeFeeEvent): void {
  let entity = new SetForceUnstakeFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.forceUnstakeFee = event.params.forceUnstakeFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetMaxLockupDays(event: SetMaxLockupDaysEvent): void {
  let entity = new SetMaxLockupDays(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.maxLockupDays = event.params.maxLockupDays

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetMinLockupDays(event: SetMinLockupDaysEvent): void {
  let entity = new SetMinLockupDays(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minLockupDays = event.params.minLockupDays

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetOutUSDBVault(event: SetOutUSDBVaultEvent): void {
  let entity = new SetOutUSDBVault(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.outUSDBVault = event.params.outUSDBVault

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeRUSD(event: StakeRUSDEvent): void {
  let entity = new StakeRUSD(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.positionId = event.params.positionId
  entity.account = event.params.account
  entity.amountInRUSD = event.params.amountInRUSD
  entity.amountInPUSD = event.params.amountInPUSD
  entity.amountInRUY = event.params.amountInRUY
  entity.deadline = event.params.deadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnstake(event: UnstakeEvent): void {
  let entity = new Unstake(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.positionId = event.params.positionId
  entity.amountInRUSD = event.params.amountInRUSD
  entity.burnedPUSD = event.params.burnedPUSD
  entity.burnedRUY = event.params.burnedRUY

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawYield(event: WithdrawYieldEvent): void {
  let entity = new WithdrawYield(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.burnedRUY = event.params.burnedRUY
  entity.yieldAmount = event.params.yieldAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
