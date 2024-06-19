# CODDE Protocol

CODDE Protocol is the base layer of the CODDE Pi Framework. This protocol let CODDE Pi interacts with any hardware through WiFi, Bluetooth and BLE using an embedded library and a mobile app. This technology enables users to freely interact with hardware thanks to a secure, stable and reliable technology without be (too) intrusive.

## How it works

CODDE Pi is based on client-server architecture. Basically, the mobile App you download is the client side, and the base layer you embed on your project is the server side

![Widgets & CODDE Protocol](./assets/codde_pi_widget.drawio.svg)

## Usage

```python
import codde_protocol
import time
# import gpio

# instantiate server
server = CoddePiServer.use_socket('localhost:12345')

# some hardware control
# pin10 = gpio.DigitalPin(10, gpio.OUTPUT)

@event(server)
def toggle_button_1(*args):
    widget: ToggleButton = args[0]
    print("value received : ", widget.value)
    server.callback(1, ServerStatus.Idle, ConfirmResult(True))

@event(server)
def click_button_2(*args):
    pass
    # pin10.on()

if __name__ == "__main__":
    print('opening server...', end=' ')
    server.open()
    try:
    print('serve')
        server.serve()
        while True:
            sleep(1)
    except KeyboardInterrupt:
        print("CTRL + C.")
        print("Program interrupted.")
    finally:
        server.close()
```
