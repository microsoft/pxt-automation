# Automation

Various algorithm for Systems & Control operations.

## PID controller

A Proportional-Integral-Derivative control is a classic control structure in automation.
The user needs to define 3 gains (``Kp``, ``Ki``, ``Kd``) to tune the controll.er

```blocks
automation.pid1.setGains(1, 0.01, 0.001);
for (let i = 0; i < 10; ++i) {
    const x = automation.pid1.compute(0.1, 5);
}
```

## Supported targets

* for PXT/maker
* for PXT/adafruit

## License

MIT

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
