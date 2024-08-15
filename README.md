# OPFS

OPFS stands for [Origin Private File System](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system#browser_compatibility). It is a virtual file system available in browser and it requires no permission to access.

This package wraps fs-like OPFS adapter from [memfs](http://npmjs.com/package/memfs) to become a drop in `fs` replacement in webpack, rollup and other web applications which support aliasing the node packages.

You can install [OPFS Explorer](https://chrome.google.com/webstore/detail/opfs-explorer/acndjpgkpaclldomagafnognkcgjignd) Chrome
extension to verify the contents of the OPFS file system. Visit the [demo page](https://tomayac.github.io/opfs-explorer/) to try out the extension.
