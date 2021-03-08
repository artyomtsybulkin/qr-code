# qr-code
### Example QR Code generation for 2FA services

Using [Google QR Code API](https://developers.google.com/chart/infographics/docs/qr_codes) this example shows how simply create html page with qr code. It can be used for 2FA service (mobile authenticator) assignment to any service that supporting it.\
### Logic: 
1. Store passcode on server.
2. Take a picture of QR Code using authenticator/one-time password generator application.
2. Use One-time passwords for authentication on server.

![Example output](/example.png "Example")

Also [jQuery Library](https://developers.google.com/speed/libraries#jquery) used for this small project.