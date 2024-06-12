import { IndexDB } from "../IndexDB.js";
import { ThreadComm } from "@divinestar/threads";

export class IndexDBError extends Error {
 constructor(
  message: string,
  data: {
   blocked?: boolean;
   collection?: string;
   dataBaseID?: string;
   event?: any;
   dataBase?: any;
   functionName?: string;
  }
 ) {
  super();
  console.group();
  console.error(
   `[ZDB ERROR: ${new Date().toLocaleTimeString()}]
   [THREAD: name: ${ThreadComm.threadName} number: ${
    ThreadComm.threadName
   } parent : ${ThreadComm.parent.name}]
   ${message}`,
   data
  );
  console.table(IndexDB.core.loadedDatabases);
  console.groupEnd();
 }
}
