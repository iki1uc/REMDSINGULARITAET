function cubeJob(cubeID) {
  switch (cubeID) {
    case "CUBE_1":
      console.log("Cube 1: RAW-Prozess gestartet.");
      rawwarKontakt();
      break;

    case "CUBE_2":
      console.log("Cube 2: SAFE-Analyse aktiv.");
      safeUI(1);
      break;

    // usw.
  }
}
