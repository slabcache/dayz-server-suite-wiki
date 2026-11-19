# Features

Everything Server Manager does, with a link to where each is explained.

## Setup

- One exe, no accounts, nothing to configure: it installs SteamCMD and the
  Visual C++ and DirectX runtimes for you. See
  [Getting started](getting-started).
- Signs in to Steam once (Steam Guard supported), and SteamCMD remembers it.
- Starts with Windows, in the tray, if you want
  ([Manager settings](manager-settings)).
- Updates itself from GitHub, with the download's SHA-256 checked.

## Servers

- Several DayZ servers on one machine, each with its own folder, ports, mods,
  settings and backups ([Servers](servers)).
- New ones start empty, as a copy of another, or restored from the trash. Stable
  or Experimental.
- Each new server gets its own port (2302, 2402, 2502…), so they don't clash.
- Deleting moves a server to the trash. Nothing is erased.

## Install and update

- Every branch Steam has, with its build, size and date. Switch branches or
  verify files in one click ([Server → Install](server)).
- Downloads go through SteamCMD, one at a time for all servers, with live
  progress.
- **Update automatically**: checks every 15 minutes. If a server or mod update
  is out, it warns players, backs up the world, updates and starts again
  ([Server](server)).

## Running

- **Start / Stop / Restart** with live state: Starting, Running, Not responding,
  Restarting.
- Servers run on a hidden desktop: no console windows, and Windows' crash
  dialogs are off.
- **Restart on crash or hang**: restarts after a crash, a 2-minute freeze, or an
  error popup (which it closes). It gives up after 5 restarts in 15 minutes.
- **Scheduled restarts** at set times of day, with chat warnings at 15, 10, 5
  and 1 minutes.
- **Restart with warning**: restart in 5 minutes, telling players at 5 and 1.
- CPU, RAM, players and threads charted per server, kept 7 days.
- Live server logs (script log, RPT), plus an **Export logs** bundle for
  support.
- Checks whether Steam lists your server.

## Mods

- Workshop browsing and search without a Steam API key ([Mods](mods)).
- Dependencies install with the mod, and keys are copied to `keys/`.
- Load order, turn a mod off without removing it, change notes, and roll back to
  the previous version.
- **Update all**, or let auto-update do it.

## Configuration

- A form for `serverDZ.cfg`: every setting, explained ([Settings](settings)).
- Launch parameters: port, CPU cores, FPS limit, logs, BattlEye and storage
  folders.
- A [Config editor](config-editor) for the mission files, mod configs, ban list,
  whitelist and priority list, with syntax highlighting.
- Changes made while the server runs wait and apply at the next start.

## Backups

- Scheduled world backups, kept to a number you choose ([Backups](backups)).
- Made automatically before every update and every restore.
- One-click restore.

## With Sentinel

The optional [Sentinel](sentinel) mod adds the live player list, messages to
everyone in chat, chat warnings before restarts, and freeze detection.

## Everything at a glance

- [Monitor](monitor) shows every server on the machine, plus CPU, RAM and disk.
