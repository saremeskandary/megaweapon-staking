import weapon from "../artifacts/contracts/mw2.sol/WEAPON.json";
import { weaponAddress } from "../config";
import type { WEAPON } from "../typechain/WEAPON";
import useContract from "./useContract";

export default function useWeaponContract() {
  return useContract<WEAPON>(weaponAddress, weapon.abi);
}
