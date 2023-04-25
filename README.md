# PlaywrightVisualTesting-PoC

https://playwright.dev/docs/test-snapshots

### Installation
https://playwright.dev/docs/intro


### For non-experienced SDET
https://playwright.dev/docs/codegen-intro


### Command line 
https://playwright.dev/docs/test-cli

### How to run all tests on all 3 browser by defaul (Chrome, FF, Webkit)

    $ npx playwright test
    
    
### How to run a specific test/spec on all 3 browser by defaul (Chrome, FF, Webkit)

    $ npx playwright test preference-portal.spec.ts --headed    
    

### Things to remember

1. When the test runs for the first time, and there is no snapshot, PW will generate the snapshot (by default or you could give it a name) for every browser and OS.
2. Screenshot match would fail based on the viewport of the snapshot and the application.
