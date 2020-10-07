import { Heartbeat } from './heartbeat';

export interface GatewayResponse {
  t: any,
  s: any,
  op: number,
  d: Heartbeat,
}
