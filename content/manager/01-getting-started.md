# Getting started

Server Manager runs DayZ servers on your own Windows machine. It's one exe with
no accounts: it opens in its own window, keeps a tray icon, and only listens on
this computer (`127.0.0.1`), so nobody else on the network can reach it.

## Install

1. Download `ServerManager.exe` from the releases page and put it in its own
   folder, for example `C:\DayZ\ServerManager\`. Everything it makes (database,
   logs, SteamCMD, server installs) lives next to the exe.
2. Run it. It opens an app window (Chrome, Edge, Brave, Vivaldi or Chromium if
   you have one, else your default browser) and a tray icon.

Running the exe a second time doesn't start another copy: it opens the window of
the one already running.

## First-run setup

Until the basics are installed, every page sends you to **Set up Server
Manager**. It checks the machine for:

- **SteamCMD**, which downloads the DayZ server and Workshop mods.
- **Visual C++ runtime** and **DirectX runtime**, which the DayZ server needs.

Press **Install** and it fetches whatever is missing. **Skip for now** lets you
look around first, but you can't install a server until it's done.

## Sign in to Steam

The DayZ server is free, but SteamCMD still needs a Steam account that owns
DayZ. Enter the account name and password, then the Steam Guard code if Steam
asks for one (or confirm the sign-in on your phone). SteamCMD remembers the
sign-in, so you only do this once. You can change or remove it later in
[Manager settings](manager-settings).

## Your first server

1. The sidebar starts with one server under **Servers**. Hover it and use the
   pencil to give it a name. See [Servers](servers).
2. Open the instance, go to the **Install** tab on the [Server](server) page and
   install the **stable** branch.
3. Optionally add [mods](mods) and [Sentinel](sentinel).
4. Change the name, slots and mission in [Settings](settings).
5. Press **Start**.

## The window and the tray

Closing the window doesn't stop anything: the Manager keeps running in the tray,
with its restarts, updates and backups. Open it again from the tray icon or by
running the exe. Quit from the tray menu to stop the Manager itself (your game
servers keep running).

To start it with Windows, see [Manager settings](manager-settings).
