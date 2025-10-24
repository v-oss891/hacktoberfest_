function loadResource(resourceId) {
  return new Promise((resolve, reject) => {
    if (typeof resourceId !== 'number' || isNaN(resourceId)) {
      reject("Invalid resource ID");
      return;
    }
    const id = Math.floor(resourceId);

    if (id <= 0 || id > 1000) {
      reject("Invalid resource ID");
      return;
    }

    setTimeout(() => {
      resolve("Resource loaded successfully");
    }, 1000); 
  });
}
