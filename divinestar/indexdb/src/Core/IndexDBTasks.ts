import { ThreadComm } from "@divinestar/threads/";
import { IndexDBCore } from "./IndexDBCore.js";

export function RegisterZeneithTasks() {
 ThreadComm.registerTasks<string>(
  "zdb-close-database",
  async (dbId, onDone) => {
   const db = IndexDBCore.loadedDatabases[dbId];
   if (!db) return;
   await db.waitTillTranscationDone();
   db.close();
   if (onDone) onDone();
  },
  "deferred"
 );
 ThreadComm.registerTasks<string>(
  "zdb-open-database",
  async (dbId, onDone) => {
   const db = IndexDBCore.loadedDatabases[dbId];
   if (!db) return;
   await db.waitTillTranscationDone();
   db.open();
   if (onDone) onDone();
  },
  "deferred"
 );
}
