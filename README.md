# Energy Dashboard for Homey Pro

A Homey app that shows your energy on a web page: what your solar panels produce, what you take from and return to the grid, what your home battery does, which devices use the most and what it all costs. It looks like the Homey app and is made for a tablet on the wall, but works just as well on your phone or computer.

![The dashboard](docs/screenshots/dashboard-dark.png)

## Install

1. Open the app in the Homey App Store: https://homey.app/a/com.drpeppers.energydashboard/test/ and choose **Install**.
2. In the Homey app, go to *More → Apps → Energy Dashboard → Settings*. The link to your dashboard is at the top.
3. Open that link on a tablet, phone or computer in your home network.

That is all: no extra computer, no account and no API key. Updates arrive by themselves, like with any other app. The app finds your smart meter, solar panels, home battery and other devices on its own.

When you install it, Homey asks for access to your Homey. The app needs it to read the data of your other apps, such as the smart meter and the inverter. The dashboard only reads; it never switches anything.

## What you need

- A Homey Pro
- A smart meter in Homey, for example through a HomeWizard P1 meter

Solar panels, a home battery, EV charger, heat pump, water heater or smart plugs are optional. If you have them, they appear on the dashboard by themselves.

## What you see

The dashboard is made of blocks that you choose, move and resize with the pencil at the top right. Among them:

- **Energy now**: what flows between solar, grid, home and battery right now
- **Totals** per day, week, month and year, compared with the previous period
- **Power today**: your use and production through the day
- **Energy flows**: where your power came from and which device used it
- **Costs**, **Electricity price** and **End of net metering**, with your own energy contract
- **Home battery** and **Battery use**: what the battery charged and delivered, and what that was worth
- **Hot water**, **Heating** and **EV charger**
- **Circuits** and **Phase load**: how heavily each circuit in your fuse box is loaded
- **Meter readings**, **Standby use**, **Alerts** and **Choose a battery** (which home battery fits your use)

The **i** on each block explains how it is calculated. For Today and Yesterday you can look back to an earlier moment of the day. There are also widgets for Homey Dashboards.

The dashboard works in light and dark mode and in ten languages: English, Dutch, German, Norwegian, Swedish, Danish, Italian, French, Portuguese and Spanish.

| | |
|---|---|
| ![Energy now](docs/screenshots/energy-now.png) | ![Energy flows](docs/screenshots/energy-flows.png) |
| ![Home battery](docs/screenshots/battery.png) | ![Phone](docs/screenshots/phone-nl.png) |

The full description of every block and setting is in the [manual](homey-app/README.md) (in Dutch).

## Questions or something not working?

- Ask on the Homey community forum: [English](https://community.homey.app/t/160116) or [Dutch](https://community.homey.app/t/160118).
- Or open an [issue](https://github.com/WNijhof/homey-energy-dashboard/issues) here on GitHub.
- If something looks wrong, please include a diagnosis: in the app settings, choose **Share diagnosis**. It shows which devices the app found.

---

Want to work on the code? See [DEVELOPMENT.md](DEVELOPMENT.md).
