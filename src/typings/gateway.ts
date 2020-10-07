export interface GatewayResponse {
  t: any,
  s: any,
  op: number,
  d: Heartbeat,
}

export interface Heartbeat {
  heartbeat_interval: number,
  _trace?: Array<string>,
}