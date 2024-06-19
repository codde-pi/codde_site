# Widgets

Widgets are _semi-standalone_ **UI blocks** of C.O.D.D.E. Pi's virtual controllers. While a controller establish connection with hardware once thanks to [CODDE Protocol](../procotol/index.md), each widget handle data differently and is a (potential) trigger/receiver for incoming/outgoing data.

## Widget types

Widgets have different role in hardware interactions, triggering/streaming data differently. They can be classified like below:

- **Views:** Streaming entrypoint of periodic continuous incoming data, provided spontaneously by the server side
- **[Buttons](/docs/category/buttons):** Basically user input triggers, sending instruction associated with contextual data
- **Sensors:** Client side streams sending data periodically based on hardware changes
- **Compatible hardware:** Extension of buttons, physical controller interfaced by CODDE Pi

### Data model

:::warning Available soon
:::
