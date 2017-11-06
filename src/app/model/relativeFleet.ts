import { Asset } from "./asset";
import { Device } from "./device";
export class RelativeFleet {
  constructor(public assets: Asset[], public positions: Device[]) {}
}