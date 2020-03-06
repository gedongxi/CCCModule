export default class UInt64 {

  private low: number = 0;
  private high: number = 0;

  public constructor(high?: number, low?: number) {
    this.high = high;
    this.low = low;
  }

  public Set(high: number, low: number): void {
    this.high = high;
    this.low = low;
  }

  public SetVal(val: number) {
    this.low = val >>> 31;
    this.low = val >>> 1;
    this.high = ((val & 0xffffffff) >>> 0);
  }

  public Low(): number {
    return this.low;
  }

  public High(): number {
    return this.high;
  }

  public get IsZero(): boolean { return this.high === 0 && this.low === 0; }

  public ToNumber(): number {
    return this.low * 0x100000000 + this.high;
  }

  public Equal(other: UInt64): boolean {
    return other.High() === this.high && other.Low() === this.low;
  }
}
