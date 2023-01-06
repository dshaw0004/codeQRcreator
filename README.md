# QR Code Generator

This site can convert any text or url into QR Code using an open source free api.

# Also it have a built in scanner to scan you code.

#### website

```
https://dshaw0004.github.io/codeQRcreator/
```

---

## <u>API Reference</u>

### **QR Code Generator**

This QR Code generator uses an free api to generate the qr code.

#### Get documentation

```http
https://goqr.me/api/
```

#### Get item

```http
  GET https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `text`    | `string` | **Required**. value of qr code to fetch |

### **QR Code Scanner**

To make the scanner I use a npm package [qr-scanner](https://www.npmjs.com/package/qr-scanner?activeTab=readme)

---

## Authors

- [dshaw0004](https://github.com/dshaw0004)
