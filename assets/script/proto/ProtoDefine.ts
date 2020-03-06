/// <reference path="../commonUnit/NetByteArray.ts">

import { ByteArray } from "../commonUnit/NetByteArray";

export type Int8 = number;
export type Uint8 = number;
export type Int16 = number;
export type Uint16 = number;
export type Int32 = number;
export type Uint32 = number;
export type Int64 = number;
export type Uint64 = number;

export interface IProtoMsgC2S {
  encode(): ByteArray;
}
