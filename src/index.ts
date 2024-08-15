import { FsaNodeFs } from "memfs/lib/fsa-to-node/index.js";

const dir = navigator.storage.getDirectory();
const fs = new FsaNodeFs(dir as Promise<any>);
const promises = fs.promises;
export default fs;
export { promises };