/* A simple log file generator script */

TIMEOUT(1800000); /* 3600000 msecs or 1 hour */

log.log("Starting COOJA logger\n");

timeout_function = function () {
    log.log("Script timed out.\n");
    log.testOK();
}

while (true) {
    if (msg) {
        log.log(time + " " + id + " " + msg + "\n");
    }

    YIELD();
}
