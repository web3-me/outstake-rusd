import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/RUSDStakeManager/RUSDStakeManager"

export function createClaimMaxGasEvent(
  recipient: Address,
  gasAmount: BigInt
): ClaimMaxGas {
  let claimMaxGasEvent = changetype<ClaimMaxGas>(newMockEvent())

  claimMaxGasEvent.parameters = new Array()

  claimMaxGasEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  claimMaxGasEvent.parameters.push(
    new ethereum.EventParam(
      "gasAmount",
      ethereum.Value.fromUnsignedBigInt(gasAmount)
    )
  )

  return claimMaxGasEvent
}

export function createExtendLockTimeEvent(
  positionId: BigInt,
  extendDays: BigInt,
  newDeadLine: BigInt,
  mintedRUY: BigInt
): ExtendLockTime {
  let extendLockTimeEvent = changetype<ExtendLockTime>(newMockEvent())

  extendLockTimeEvent.parameters = new Array()

  extendLockTimeEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  extendLockTimeEvent.parameters.push(
    new ethereum.EventParam(
      "extendDays",
      ethereum.Value.fromUnsignedBigInt(extendDays)
    )
  )
  extendLockTimeEvent.parameters.push(
    new ethereum.EventParam(
      "newDeadLine",
      ethereum.Value.fromUnsignedBigInt(newDeadLine)
    )
  )
  extendLockTimeEvent.parameters.push(
    new ethereum.EventParam(
      "mintedRUY",
      ethereum.Value.fromUnsignedBigInt(mintedRUY)
    )
  )

  return extendLockTimeEvent
}

export function createGasManagerTransferredEvent(
  previousGasManager: Address,
  newGasManager: Address
): GasManagerTransferred {
  let gasManagerTransferredEvent = changetype<GasManagerTransferred>(
    newMockEvent()
  )

  gasManagerTransferredEvent.parameters = new Array()

  gasManagerTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousGasManager",
      ethereum.Value.fromAddress(previousGasManager)
    )
  )
  gasManagerTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "newGasManager",
      ethereum.Value.fromAddress(newGasManager)
    )
  )

  return gasManagerTransferredEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSetForceUnstakeFeeEvent(
  forceUnstakeFee: BigInt
): SetForceUnstakeFee {
  let setForceUnstakeFeeEvent = changetype<SetForceUnstakeFee>(newMockEvent())

  setForceUnstakeFeeEvent.parameters = new Array()

  setForceUnstakeFeeEvent.parameters.push(
    new ethereum.EventParam(
      "forceUnstakeFee",
      ethereum.Value.fromUnsignedBigInt(forceUnstakeFee)
    )
  )

  return setForceUnstakeFeeEvent
}

export function createSetMaxLockupDaysEvent(
  maxLockupDays: i32
): SetMaxLockupDays {
  let setMaxLockupDaysEvent = changetype<SetMaxLockupDays>(newMockEvent())

  setMaxLockupDaysEvent.parameters = new Array()

  setMaxLockupDaysEvent.parameters.push(
    new ethereum.EventParam(
      "maxLockupDays",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(maxLockupDays))
    )
  )

  return setMaxLockupDaysEvent
}

export function createSetMinLockupDaysEvent(
  minLockupDays: i32
): SetMinLockupDays {
  let setMinLockupDaysEvent = changetype<SetMinLockupDays>(newMockEvent())

  setMinLockupDaysEvent.parameters = new Array()

  setMinLockupDaysEvent.parameters.push(
    new ethereum.EventParam(
      "minLockupDays",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(minLockupDays))
    )
  )

  return setMinLockupDaysEvent
}

export function createSetOutUSDBVaultEvent(
  outUSDBVault: Address
): SetOutUSDBVault {
  let setOutUsdbVaultEvent = changetype<SetOutUSDBVault>(newMockEvent())

  setOutUsdbVaultEvent.parameters = new Array()

  setOutUsdbVaultEvent.parameters.push(
    new ethereum.EventParam(
      "outUSDBVault",
      ethereum.Value.fromAddress(outUSDBVault)
    )
  )

  return setOutUsdbVaultEvent
}

export function createStakeRUSDEvent(
  positionId: BigInt,
  account: Address,
  amountInRUSD: BigInt,
  amountInPUSD: BigInt,
  amountInRUY: BigInt,
  deadline: BigInt
): StakeRUSD {
  let stakeRusdEvent = changetype<StakeRUSD>(newMockEvent())

  stakeRusdEvent.parameters = new Array()

  stakeRusdEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  stakeRusdEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  stakeRusdEvent.parameters.push(
    new ethereum.EventParam(
      "amountInRUSD",
      ethereum.Value.fromUnsignedBigInt(amountInRUSD)
    )
  )
  stakeRusdEvent.parameters.push(
    new ethereum.EventParam(
      "amountInPUSD",
      ethereum.Value.fromUnsignedBigInt(amountInPUSD)
    )
  )
  stakeRusdEvent.parameters.push(
    new ethereum.EventParam(
      "amountInRUY",
      ethereum.Value.fromUnsignedBigInt(amountInRUY)
    )
  )
  stakeRusdEvent.parameters.push(
    new ethereum.EventParam(
      "deadline",
      ethereum.Value.fromUnsignedBigInt(deadline)
    )
  )

  return stakeRusdEvent
}

export function createUnstakeEvent(
  positionId: BigInt,
  amountInRUSD: BigInt,
  burnedPUSD: BigInt,
  burnedRUY: BigInt
): Unstake {
  let unstakeEvent = changetype<Unstake>(newMockEvent())

  unstakeEvent.parameters = new Array()

  unstakeEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  unstakeEvent.parameters.push(
    new ethereum.EventParam(
      "amountInRUSD",
      ethereum.Value.fromUnsignedBigInt(amountInRUSD)
    )
  )
  unstakeEvent.parameters.push(
    new ethereum.EventParam(
      "burnedPUSD",
      ethereum.Value.fromUnsignedBigInt(burnedPUSD)
    )
  )
  unstakeEvent.parameters.push(
    new ethereum.EventParam(
      "burnedRUY",
      ethereum.Value.fromUnsignedBigInt(burnedRUY)
    )
  )

  return unstakeEvent
}

export function createWithdrawYieldEvent(
  account: Address,
  burnedRUY: BigInt,
  yieldAmount: BigInt
): WithdrawYield {
  let withdrawYieldEvent = changetype<WithdrawYield>(newMockEvent())

  withdrawYieldEvent.parameters = new Array()

  withdrawYieldEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  withdrawYieldEvent.parameters.push(
    new ethereum.EventParam(
      "burnedRUY",
      ethereum.Value.fromUnsignedBigInt(burnedRUY)
    )
  )
  withdrawYieldEvent.parameters.push(
    new ethereum.EventParam(
      "yieldAmount",
      ethereum.Value.fromUnsignedBigInt(yieldAmount)
    )
  )

  return withdrawYieldEvent
}
